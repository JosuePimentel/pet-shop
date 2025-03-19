import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="">
            <div className="bar"></div>
            <h1 className="">
                <p> AU AU & CIA </p>
                <img src="/pata.png" alt="" />
                <p> CLÍNICA VETERINÁRIA </p>
            </h1>
            <nav className="geist">
                <Link to="/" >Home</Link>
                <Link to="/our-team" >Conheça nossa equipe</Link>
                <Link to="/schedule" >Agendamento</Link>
                <Link to="/find-us" >Onde nos encontrar</Link>
            </nav>
        </header>
    );
}