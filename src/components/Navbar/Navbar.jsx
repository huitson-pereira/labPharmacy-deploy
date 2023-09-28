import { Link } from "react-router-dom"
import logo from "../../image/logo.png"
import style from "./Navbar.module.css"

function Navbar () {
  return(
    <nav className={`${style.navbar} ${style.fixed}`}>
      <div >
        <Link to="/">
          <img width={40} src={logo} alt="Logo"/>
        </Link>
        <span>LABPharmacia inc</span>
      </div>
      <ul className={style.list}>
        <li className={style.item}>
          <Link to="/" aria-current="page" >
            Login
          </Link>
        </li>
        <li className={style.item}>
          <Link className="" to="/farmacias">
            Farmacia
          </Link>
        </li>
        <li className={style.item}>
          <Link className="" aria-current="page" to="/medicamentos">
            Medicamentos
          </Link>
        </li>
        <li className={style.item}>
          <Link className="" aria-current="page" to="/lista-farmacia">
            Lista de farmacias
          </Link>
        </li>
        <li className={style.item}>
          <Link className="" aria-current="page" to="/lista-medicamento">
            Lista de medicamentos
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;