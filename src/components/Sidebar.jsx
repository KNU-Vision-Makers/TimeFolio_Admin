import "../styles/globals.css";
import NamePlate from "./NamePlate";
import Link from 'next/link';

export default function Sidebar({ sectionRefs }) {
  const handleClick = (key) => {
    sectionRefs[key]?.current?.scrollIntoView({ behavior: "smooth" });
  };
    return (
        <aside className="side-bar">
            <NamePlate />
            <hr style={{ border: "none", borderTop: "4px solid #BEBEBE", margin: "40px 30px 0px 30px" }} />
            <ul style={{ listStyle: "none" }}>
                <li><button className="side-bar-button" onClick={() => handleClick("Info")}>Info</button></li>
                <li><button className="side-bar-button" onClick={() => handleClick("TimeLine")}>TimeLine</button></li>
                <li><button className="side-bar-button" onClick={() => handleClick("TechStack")}>TechStack</button></li>
                <li><button className="side-bar-button" onClick={() => handleClick("DocGenerate")}>Doc Generate</button></li>
            </ul>
            <hr style={{ border: "none", borderTop: "4px solid #BEBEBE", margin: "10px 30px 0px 30px" }} />

            <Link href="/login" className="side-bar-login-button">
              Login
            </Link>
            
            <Link href="/signup" className="side-bar-signup-button">
              Sign up
            </Link>
        </aside>
    )
}