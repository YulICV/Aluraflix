import { StyledButton } from "./button";

const Btn = (props) => {
  return (
    <StyledButton
      className='tittle-btn'
      backgroundColor={props.backgroundColor}
      textColor={props.textColor}
      borderColor={props.borderColor}
      hoverColor={props.hoverColor}
      hoverTextColor={props.hoverTextColor}
      hoverBorderColor={props.hoverBorderColor}>{props.texto}</StyledButton>
  );

};

export default Btn;