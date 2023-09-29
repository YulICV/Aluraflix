import { StyledHeader } from "./header";
import logo from '../../assets/img/logo.svg'
import Btn from "../Button";

const Header = (props) => {
    return (
        <StyledHeader>
            <img src={logo} className="logo" alt="logo" />
            <Btn
                className='tittle-btn'
                backgroundColor='var(--color-black-dark)'
                borderColor='var(--color-gray-light)'
                hoverColor='var(--color-primary-medium)'
                hoverTextColor='#FFFFFF'
                texto='Nuevo Video'
            />
        </StyledHeader>
    );
}

export default Header;