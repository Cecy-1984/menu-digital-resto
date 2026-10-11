function ResumenMenu({ platos }) {
    const totalPlatos = platos.length;
    const platosDisponibles = platos.filter(
        plato => plato.disponible === true
    );
    const cantidadDisponibles = platosDisponibles.length;
    const totalPrecios = platosDisponibles.reduce((acumulado, plato) => {
    return acumulado + plato.precio;
    }, 0);
    const promedioPrecio = totalPrecios / cantidadDisponibles;
    return (
        <section>
            <p>Total de platos: {totalPlatos}</p>
            <p>Platos disponibles: {cantidadDisponibles}</p>
            <p>Precio promedio: ${promedioPrecio.toLocaleString("es-AR")}</p>
        </section>
    );
}

export default ResumenMenu;