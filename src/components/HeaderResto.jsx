function HeaderResto({nombreLocal, eslogan, estaAbierto}){
    return(
        <header> 
            <h1>{nombreLocal}</h1>
            <p>{eslogan}</p>
            <p className={estaAbierto ? "abierto" : "cerrado"}>
                {estaAbierto ? "Abierto Ahora" : "Cerrado por el momento"}
            </p>
        </header>
    );
}     


export default HeaderResto;