function Header(){

    // Arriba
    // Derecha
    // Abajo
    // Izquierda

    // padding: 10px 5px 2px 1px

    
    


    return (
        <header className="flex justify-between px-10 py-5 bg-blue-500">
            <div className="text-white font-bold">
                MyPortfolio
            </div>
            <nav>
                <ul className="flex gap-4">
                    <li className="text-slate-300 hover:text-white font-bold">
                        <a href="#about">About</a>
                    </li>
                    <li className="text-slate-300 hover:text-white font-bold">
                        <a href="#work">Work</a>
                    </li>
                    <li className="text-slate-300 hover:text-white font-bold">
                        <a href="#contact">Contact</a>
                    </li>
                    <li className="text-slate-300 hover:text-white font-bold">
                        <a href="#cv">CV</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;