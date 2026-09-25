import "./Footer.scss"

import { FaQuestion } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
    }).format(new Date());
  return (
    <section className="wrapper">
    <footer>
      <p className="copyright">&copy; {year} Feedback App. All rights reserved.</p>
        <Link to={"/about"}>
        <FaQuestion className="about-link" /></Link>
    </footer>
    </section>
  )
}

export default Footer
