import { Outlet } from "react-router-dom";
import NavBar from "./SearchBar";

function AppLayout() {
    return (
        <>
            <NavBar/>
            <Outlet />
            <footer></footer>
        </>
    )
}

export default AppLayout