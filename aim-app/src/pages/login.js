

export default function Login() {
  return (
    <div class="h-screen flex flex-col items-center justify-center">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <p class="text-xl font-bold text-center">Login</p>
            <div class="mb-4 mt-8">
            <label class="block text-gray-700 text-sm mb-2 text-left" for="username">
                Username
            </label>
            <input class="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
            </div>
            <div class="mb-6">
            <label class="block text-gray-700 text-sm mb-2 text-left" for="password">
                Password
            </label>
            <input class="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
            {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
            </div>
            <div class="flex flex-col items-center justify-between">
                <a href="/find">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Login
                    </button>
                </a>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-4" href="#">
                    Forgot Password?
                </a>
            </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
            &copy;2023 Routnix corp. All rights reserved.
        </p>
    </div>
  );
}
