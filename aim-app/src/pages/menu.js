

export default function Menu() {
    return (
      <div class="h-screen flex flex-col items-center justify-center">
        
            <p class="text-xl font-bold mb-8">Main Menu</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32" type="button">
                Create
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32" type="button">
                Find
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32" type="button">
                Export
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32" type="button">
                Import
            </button>
        
      </div>
    );
  }
  