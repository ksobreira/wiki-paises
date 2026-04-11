function Header( {onSelectContinent}){
    
    return (
        <header>
            <h1>WikiPaises</h1>
            <nav>
                <button onClick={() => onSelectContinent("Europe")}>Europe</button>
                <button onClick={() => onSelectContinent("Americas")}>Americas</button>
                <button onClick={() => onSelectContinent("Asia")}>Asia</button>
                <button onClick={() => onSelectContinent("Africa")}>Africa</button>
                <button onClick={() => onSelectContinent("Oceania")}>Oceania</button>
            </nav>
        </header>
    );
}

export default Header