import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          {new Date().getFullYear()} Copyright Text
          <Link to="/Movies/11" className=" right">
            REPO
          </Link>
        </div>
      </div>
    </footer>
  );
}
