const db = require('../db')

const getAllInventories = async (req, res, next) => {

  db.connection.query(
    `SELECT * FROM inventories;`,
    [],
    (err, result) => {
      if (err) {
        return next(err)
      }
      return res.status(200).json(result)
    }
  )
}

const getInventoryDetail = (req, res, next) => {

  db.connection.query(
    `SELECT *
    FROM inventories
    WHERE id = ?;`,
    [req.params.id],
    (err, result) => {
      if (err) {
        return next(err)
      }
      return res.status(200).json(result[0])
    }
  )
}

const createInventoryBulk = (req, res, next) => {
  const { data } = req.body

  for (let datum of data) {
    const { name, pf, location, division, serial_number, type, hostname, os, ip, other, status, remarks } = datum

    console.log(name)

    if (!name || !pf || !location || !division || !serial_number || !type || !status) {
      res.status(400).json({ error: 'invalid request params' })
    }

    db.connection.query(
      `INSERT INTO inventories (name, pf, location, division, serial_number, 
        type, hostname, os, ip, other, status, remarks) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
      [name, pf, location, division, serial_number, type, hostname, os, ip, other, status, remarks],
      (err, result) => {
        if (err) {
          return next(err)
        }
      }
    )
  }

  return res.status(200).json({
    message: `successfully created inventory with ${data.length} assets`,
  })
}

module.exports = {
  getAllInventories,
  getInventoryDetail,
  createInventoryBulk
}
