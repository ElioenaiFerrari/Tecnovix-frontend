import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    *{
        margin:0;
        outline:0;
        padding:0;
        box-sizing:border-box;
        font-size: 14px;
        font-family: 'Roboto', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        --webkit-font-smoothing: antialiased !important;
    }
    html, #root, body{
        background: #F0F3F7;
    }
`;

export const primaryColor = '#ff5722';
