import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
    :root { 
        --background: #f0f2f5;
        --shape: #ffffff;
        
        --red: #e52e4d;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --green: #33cc95;

        --text-title: #363f5f;
        --text-body: #969cb3;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-border-box;
    }


    html {
        //utiliza medida % pq se o usuario estiver com a configuracao do device 
        //para aumentar a fonte (acessibilidade), a font aumenta tbm.
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Montserrat', sans-serif;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`