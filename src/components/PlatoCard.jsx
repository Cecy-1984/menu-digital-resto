function PlatoCard({ nombre, precio, descripcion, disponible, etiquetas }) {
    return (
        <article
            className={disponible ? "estilo-platocard" : "estilo-platocard agotado"}
        >
            <h2>{nombre}</h2>
            <p>Descripción: {descripcion}</p>
            <p>
                {disponible
                    ? `Precio: $${precio.toLocaleString("es-AR")}`
                    : "Agotado"}
            </p>
            <div className="etiquetas">
                {etiquetas.map((etiqueta) => (
                    <span className="etiqueta" key={etiqueta}>
                        {etiqueta}
                    </span>
                ))}
            </div>
        </article>
    );
}

export default PlatoCard;