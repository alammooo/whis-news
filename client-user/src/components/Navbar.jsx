import {NavLink} from "react-router-dom"
function Navbar() {
  return (
    <nav className="pt-7">
      <div className="flex justify-between items-center">
        <NavLink to="/">
          <div className="w-10">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8553a5ff-ec10-48b0-ab92-3d7237628a0d/df0uizl-c66fedf3-3cce-4847-ab2b-1ed0956f7c70.png/v1/fill/w_632,h_605,strp/signature_of_whis_by_lagreyzuliana_df0uizl-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjA1IiwicGF0aCI6IlwvZlwvODU1M2E1ZmYtZWMxMC00OGIwLWFiOTItM2Q3MjM3NjI4YTBkXC9kZjB1aXpsLWM2NmZlZGYzLTNjY2UtNDg0Ny1hYjJiLTFlZDA5NTZmN2M3MC5wbmciLCJ3aWR0aCI6Ijw9NjMyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.7jjdigeVD8wr4wDUjLWFxx_uG77DccPbDTGUBWwaxQU"
              alt="mainLogo"
              className="w-full h-full"></img>
          </div>
        </NavLink>
        <form className="shadow-md w-1/2">
          <label
            htmlFor="default-search"
            className="mb-2 text-md font-medium text-gray-900 sr-only">
            Search
          </label>
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="p-4 w-full text-md text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required></input>
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-md px-4 py-2">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </form>
        <div className="flex gap-2 items-center">
          <h1>Name</h1>
          <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full">
            <svg
              className="absolute -left-1 w-12 h-12 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <ul className="flex justify-between font-medium">
          <li>
            <button className="text-gray-900 hover:underline">Sport</button>
          </li>
          <li>
            <button className="text-gray-900 hover:underline">Politics</button>
          </li>
          <li>
            <button className="text-gray-900 hover:underline">
              Technology
            </button>
          </li>
          <li>
            <button className="text-gray-900 hover:underline">Lifestyle</button>
          </li>
          <li>
            <button className="text-gray-900 hover:underline">Finance</button>
          </li>
          <li>
            <button className="text-gray-900 hover:underline">Health</button>
          </li>
        </ul>
        <hr className="py-3 mt-2"></hr>
      </div>
    </nav>
  )
}

export default Navbar
