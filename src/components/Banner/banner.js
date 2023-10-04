import styled from "styled-components";
import banner from '../../assets/img/banner.png'

export const StyledBanner = styled.div`
    background-image:url(${banner});
    height: 700px;
    background-size: cover;  // Ajusta el tamaño de la imagen según tus necesidades
    background-position: center;
    background-repeat: no-repeat;
`;

