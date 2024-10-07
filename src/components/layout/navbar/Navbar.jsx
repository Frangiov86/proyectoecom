import { CartWidget } from "../../common/carWidget/CartWidget";
import "./navbar.css";
import "../../pages/itemListContainer/ItemListContainer";
export const Navbar = () => {
  return (
    <>
      <div>
        <nav className="nav">
          <img
            src="https://res.cloudinary.com/deg6afpqs/image/upload/v1728253484/logo-removebg-preview_qvfwj2.png"
            alt=""
            style={{
              width: "100px",
              height: "100px",
            }}
          />
          <ul>
            <li>Todas las pcs</li>
            <li>Pc de escritorio</li>
            <li>Notebooks</li>
          </ul>

          <CartWidget />
        </nav>
      </div>
    </>
  );
};
