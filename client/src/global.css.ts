import { createGlobalStyle } from 'styled-components';

import { theme } from 'utils';

const GlobalCss = createGlobalStyle<{ theme: typeof theme }>`
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap');
    :root{
        --bidocs-font-size:16px;
        --bidocs-line-spacing:1.2;
        --bidocs-word-spacing:5;
        --bidocs-background-color:#fff;
        --bidocs-heading-color:#000;
        --bidocs-paragraph-color:#000;
    };

    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }; 

    html,body{
        font-family: ${(props) => props.theme.font.fontFamily};
        font-weight: ${(props) => props.theme.font.fontWeights[3]};
        line-height: ${(props) => props.theme.space.lineHeights.copy};
        scroll-behavior: smooth;
        text-rendering: optimizeLegibility;
        font-size: var(--bidocs-font-size);
    };

    body {
        background-color: var(--bidocs-background-color);
        min-height: 100%;
        font-family: ${(props) => props.theme.font.fontFamily};
    }

    h1,h2,h3,h4,h5,h6,
    label{
        color:var(--bidocs-heading-color)
    }

    p{
        color:var(--bidocs-paragraph-color)
    }

    h1 {
        font-size: clamp(2rem, 2rem + 1vw, 3rem);
    }
    h2 {
        font-size: clamp(1.5rem, 1.5rem + 1vw, 2rem);
    }
    h3 {
        font-size: clamp(1.25rem, 1.25rem + 1vw, 1.5rem);
    }
    h4 {
        font-size: clamp(1rem, 1rem + 1vw, 0.8rem);
    }

    img {
        max-width: 100%;
        display: block;
    }
    
    ol, ul {
        list-style: none;
    }

    select,
    button, 
    [role="button"],
    [type="submit"],
    [type="reset"]{
        cursor: pointer;
    };

    a{
        text-decoration: none;
    }

    #appRoot {
        width: 100%;
    }

    .skip-content {
        background-color: #eee;
        border: solid 1px #333;
        border-radius: 5px;
        color: #333;
        font-size: 0.9rem;
        padding: 8px;
        position: absolute;
        left: 0;
        top: -45px;
        z-index: 100;
        transition: top 0.5s ease-out;
        outline: none;
        
        &:focus {
        position: absolute;
        left: 0;
        top:0;
        transition: top 0.5s ease-in;
        };
    };
`;

export { GlobalCss };
