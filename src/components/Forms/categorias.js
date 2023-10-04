
const ListaCategorias = (props) => {

    const manejarCambio = (e) => {
        props.actualizarCategoria(e.target.value)
    }

    return <div className="lista-opciones">
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Escoja una categoria</option>
            {props.categorias.map((categoria, index) => <option key={index} value={categoria}>{categoria}</option>)}
        </select>
    </div>
}

export default ListaCategorias;