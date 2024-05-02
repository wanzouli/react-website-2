import { Link } from 'react-router-dom'

export default function Navbar (){
    return <nav className="nav">
        <a href="/react-website-2" className="site-title"> Rawan Ghazouli's Portfolio </a>
        <ul>
            <li>
               <Link to="/react-website-2/Work"> Work </Link>
            </li>
            <li>
               <Link to="/react-website-2/About"> About </Link>
            </li>
        </ul>
    </nav>
}