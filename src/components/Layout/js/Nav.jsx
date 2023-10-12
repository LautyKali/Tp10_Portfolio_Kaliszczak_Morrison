import '../css/Nav.css'
import { arrayOf, string } from 'prop-types'

function Nav({}) {
  const navItems = [
    {
      item: (
        <img
          className="logo"
          src=""
          alt=""
        />
      ),
      logo: true,
      position: "left",
    },
    {
      item: "Home",
      position: "left",
    },
    {
      item: "AboutUs",
      path: "AboutUs",
      position: "left",
    },
    {
      item: "MisCreaciones",
      dropdown: true,
      categories: "",
      position: "left",
    },
    {
      item: "Contacto",
      path: "contacto",
      position: "left",
    },
    {
      item: (
        <img
          className="icon"
          src=""
          alt=""
        />
      ),
      path: "Favoritos",
      position: "right",
    }
  ];

  const navItemsLeft = navItems.filter((i) => i.position === "left");
  const navItemsRight = navItems.filter((i) => i.position === "right");

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        </div>
      </div>
    </nav>
  );
}

export default Nav