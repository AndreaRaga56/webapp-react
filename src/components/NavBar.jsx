import { NavLink } from "react-router-dom";

function NavBar() {

  const NavLinks=[
    {
      path:"/",
      name:"Home"
    },
    {
      path:"/movies",
      name:"Film"
    }
  ]


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary d-flex align-items-end">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Movie DB</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {
                NavLinks.map((curElem, i)=>{
                  return (
                  <li key={i} className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to={curElem.path}>{curElem.name}</NavLink>
                </li>
                )})
              }              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;