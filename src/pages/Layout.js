import { Outlet, Link } from "react-router-dom";
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { NavBar } from "../components/NavBar";

const Layout = () => {
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to ="/Design">Design</Link>
                </li>
            </ul>
            </nav>
            <Outlet />
            </>
    )
};

export default Layout;