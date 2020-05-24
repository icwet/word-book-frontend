import { createGlobalStyle } from "styled-components";
import Roboto from "fonts/Roboto/Roboto-Regular.woff";

export const Font = createGlobalStyle`
    @font-face {
        font-family: 'Roboto-Regular';
        src: local('Roboto'), local('Roboto'),
        url(${Roboto}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
`;
