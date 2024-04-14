

import { FaHamburger } from "react-icons/fa"
import { Button } from "./ui/button"
import { ModeToggle } from "./DarkTheme"



const NavBar = () => {


  
  return (
    

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className=" flex flex-row justify-between mr-4 ml-4 p-2">
    <h1 className="my-auto">Quizz-Bay</h1>
 
    <div className="flex flex-row gap-4  " id="navbar-default">
     <ModeToggle/>
    <Button variant="outline" size="icon">
      <FaHamburger/>
      </Button>
    </div>
  </div>
</nav>

  )
}
export default NavBar