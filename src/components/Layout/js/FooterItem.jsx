import { Link } from "react-router-dom";

function FooterItem({ image }) {
  return (
    <>
      <Link
        className="btn btn-floating btn-light text-dark m-1"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <img src={image} width="40px" alt="" />
      </Link>
    </>
  );
}



export default FooterItem