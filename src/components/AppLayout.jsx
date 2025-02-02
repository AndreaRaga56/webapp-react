import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function AppLayout() {
    return (
        <>
            <NavBar />
            <main >
                <div className="container pt-4">
                    <Outlet />
                </div>
            </main>
            <footer></footer>
        </>
    )
}

export default AppLayout