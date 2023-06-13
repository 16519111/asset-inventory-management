const db = require('../db')
const format = require('pg-format')

const getRecipeList = (req, res, next) => {
  db.query(`SELECT * FROM RECIPE;`, [], (err, result) => {
    if (err) {
      return next(err)
    }
    return res.status(200).json(result.rows)
  })
}

const getRecipeListAll = async (req, res, next) => {
  db.query(
    `SELECT R.ID AS RECIPE_ID, R.NAME AS RECIPE_NAME, I.ID, I.NAME AS INGREDIENT_NAME, QUANTITY, STOCK
    FROM RECIPE R
    JOIN RECIPE_INGREDIENT RB ON RB.ID_RECIPE = R.ID
    JOIN INGREDIENT I ON RB.ID_INGREDIENT = I.ID;`,
    [],
    (err, result) => {
      if (err) {
        return next(err)
      }
      return res.status(200).json(result.rows)
    }
  )
}

const getRecipeDetail = (req, res, next) => {
  let detail = {}
  db.query(
    `SELECT *
    FROM RECIPE
    WHERE ID = $1;`,
    [req.params.id],
    (err, result) => {
      if (err) {
        return next(err)
      }
      detail = result.rows[0]
    }
  )
  db.query(
    `SELECT ID_INGREDIENT AS ID, NAME, QUANTITY, STOCK
    FROM RECIPE_INGREDIENT RB
    JOIN INGREDIENT B ON RB.ID_INGREDIENT = B.ID
    WHERE RB.ID_RECIPE = $1
    ORDER BY ID;`,
    [req.params.id],
    (err, result) => {
      if (err) {
        return next(err)
      }
      let rsp = { ...detail, ingredient: result.rows }
      return res.status(200).json(rsp)
    }
  )
}

const createRecipe = (req, res, next) => {
  const { name, ingredients } = req.body

  if (!name || !ingredients) {
    res.status(400).json({ error: 'invalid request params' })
  }

  db.query('BEGIN', (err) => {
    if (err) return next(err)

    db.query(
      `INSERT INTO RECIPE (NAME) VALUES ($1) RETURNING ID;`,
      [name],
      (err, result) => {
        if (err) return next(err)
        let id = result.rows[0].id
        let sql = `INSERT INTO RECIPE_INGREDIENT VALUES %L`
        let values = []

        ingredients.forEach((ingredient) => {
          values.push([id, ingredient.id, ingredient.quantity])
        })

        db.query(format(sql, values), [], (err, _) => {
          if (err) return next(err)

          db.query('COMMIT', (err) => {
            if (err) return next(err)

            return res.status(200).json({
              message: `successfully created recipe: ${name}`,
            })
          })
        })
      }
    )
  })
}

module.exports = {
  getRecipeList,
  getRecipeListAll,
  getRecipeDetail,
  createRecipe,
}
