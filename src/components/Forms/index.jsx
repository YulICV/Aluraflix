import { useState } from "react";
import Campo from "../Input";
import Btn from "../Button";
import ListaCategorias from "./categorias";

const Formulario = (props) => {
    const [titulo, actualizarTitulo] = useState("")
    const [link, actualizarLink] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [desc, actualizarDesc] = useState("")
    const [codig, actualizarCodig] = useState("")
    const [categoria, actualizarCategoria] = useState("")


    const [nombre, actualizarNombre] = useState("")
    const [color, actualizarColor] = useState("")
    const { registrarVideo, crearCategoria } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datosAEnviar = {
            titulo,
            link,
            imagen,
            categoria,
            desc,
            codig
        }
        registrarVideo(datosAEnviar)
    }
    const manejarNuevaCategoria = (e) => {
        e.preventDefault()
        crearCategoria({ nombre, colorPrimario: color })
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Nuevo Video</h2>
            <Campo
                placeholder="Titulo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo
                placeholder="Link del video"
                required valor={link}
                actualizarValor={actualizarLink}
            />
            <Campo
                placeholder="Link imagen del video"
                required
                valor={imagen}
                actualizarValor={actualizarImagen}
            />
            <ListaCategorias
                valor={categoria}
                actualizarCategoria={actualizarCategoria}
                categorias={props.categorias}
            />
            <Campo
                placeholder="Ingresar descripcion"
                required
                valor={desc}
                actualizarValor={actualizarDesc}
                type="textarea"
            />
            <Campo
                placeholder="Codigo de seguridad"
                required
                valor={codig}
                actualizarValor={actualizarCodig}
            />
            <Campo />
            <Btn texto="Guardar" />
            <Btn texto="Limpiar" />
            <Btn texto="Nueva Categoria" />
        </form>
        <form onSubmit={manejarNuevaCategoria}>
            <h2>Nueva Categoria</h2>
            <Campo
                placeholder="Nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <Campo
                placeholder="Ingresar descripcion"
                required
                valor={desc}
                actualizarValor={actualizarDesc}
                type="textarea"
            />
            <Campo
                placeholder="Color"
                required valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Campo
                placeholder="Codigo de seguridad"
                required
                valor={codig}
                actualizarValor={actualizarCodig}
            />
            <Btn texto="Guardar" />
            <Btn texto="Limpiar" />
        </form>


    </section>

}

export default Formulario;