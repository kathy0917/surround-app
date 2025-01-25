import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html,body{
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        font-family: 'Arial', sans-serif;

        max-width: 480px; 
        min-height: 100vh; 
        margin: 0 auto; 

        color: #090909; 
        }

    a {
        color: inherit; 
        text-decoration: none;
    }
`;
