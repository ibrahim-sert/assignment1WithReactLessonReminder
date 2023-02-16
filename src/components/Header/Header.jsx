import "./Header.css"
import images from "../../img/clr.png"
const Header = () => {
  return (
    <header> 
      <img  src={images} alt="cw" /><span className="header-span">FullStack Developers</span>
      
    </header>
   
  )
}

export default Header