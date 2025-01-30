import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function AppLayout() {
    return (
        <>
            <NavBar />
            <main className="container mt-4">
                <Outlet />
            </main>
            <footer></footer>
        </>
    )
}

export default AppLayout