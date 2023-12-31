import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="w-full h-16 bg-blue-700 flex items-center justify-between px-16">
            <h1> Logo </h1>
            <ul className="flex items-center justify-between gap-16">
                <li className="bg-white p-4 text-xl"> <Link to ="/login" className=""> Entrar </Link></li>
                <li className="bg-white p-4 text-xl"> <Link to ="/signup"> Cadastre-se </Link></li>
            </ul>
        </header>
    )
}