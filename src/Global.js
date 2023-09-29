import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body,html{
        font-family: 'Roboto',sans-serif;
    }

    :root{
        /*Error */
        --color-error-dark:#C62828;
        --color-error-medium:#E53935;
        --color-error-light:#FCE7E7;
        /*Gray */
        --color-gray-dark:#C2C2C2;
        --color-gray-medium:#E5E5E5;
        --color-gray-light:#F5F5F5;
        /*Black */
        --color-black-dark:#000000; //90%
        --color-black-medium:#000000; //60%
        --color-black-light:#000000; //50%
        --color-black-lighter:#9E9E9E;
        /*Courses */
        --color-frontend:#6BD1FF;
        --color-infra:#9CD33B;
        --color-backend:#00C86F; 
        --color-marketing:#6B5BE2;
        --color-mobile:#FFBA05;
        --color-inovation:#FF8C2A;
        --color-ux:#DC6EBE; 
        --color-data-science:#9CD33B;
        /*Primary */
        --color-primary-medium:#2A7AE4;
    }


    .tittle-btn{
        font-family: 'Source sans 3',sans-serif;
        font-weight:600;
        font-size: 21px;
        line-height: 24px;
        text-align: center;
    }

    .tittle-big{
        font-family: 'Roboto',sans-serif;
        font-weight:400;
        font-size: 60px;
        line-height: 70.31px;
        text-align: center;
    }

    .logo{
        width: 168.45px;
        height: 40px;
    }

    .logoPie{
        width: 252.5px;
        height: 60px;
    }









`;

export default GlobalStyle;