import { CampoWrapper } from "./input"

const Campo = (props) => {
  const placeholderModificado = `${props.placeholder}...`

  //Destructuracion
  const { type = "text" } = props

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value)
  }

  return < CampoWrapper className={`campo campo-${type}`}>
    <label>{props.titulo}</label>
    <input
      placeholder={placeholderModificado}
      required={props.required}
      value={props.valor}
      onChange={manejarCambio}
      type={type}
    />
  </ CampoWrapper>
}

export default Campo;