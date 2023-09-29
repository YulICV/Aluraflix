import { StyledFooter } from "./footer";
import logo from '../../assets/img/logo.svg'


const Footer = () => {
    return (
        <StyledFooter>
            <img src={logo} className="logoPie" alt="logo" style={{ margin: '0 auto' }} />
        </StyledFooter>
    );
}

export default Footer;