import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"


function App() {
  /* Did Mount, executed depend on desirable moment */
  useEffect(() => {
    console.log("done mount!")
  }, [])

  /* Did Update */
  useEffect(() => {
    console.log("done update!")
  }, [])

  /* Will Unmount, usually after logout, excecuted after component closed*/
  useEffect(() => {
    return
  }, [])

  /* Functions */
  /*  */

  return (
    <div className="App">
      <div className="container mx-auto bg-stone-50 shadow-lg px-36">
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default App
