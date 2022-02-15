import { createGlobalStyle } from 'styled-components';

import { theme } from 'utils';

const GlobalCss = createGlobalStyle<{ theme: typeof theme }>`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }; 

    html,body{
        background-color: #F3F3F3;
        font-family: ${(props) => props.theme.font.fontFamily};
        font-weight: ${(props) => props.theme.font.fontWeights[3]};
        line-height: ${(props) => props.theme.space.lineHeights.copy};
        scroll-behavior: smooth;
        text-rendering: optimizeLegibility;
    };

    body {
        min-height: 100%;
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

    .skip-content {
        position: absolute;
        left: 0;
        top: -45px;
        z-index: 100;
        transition: top 0.5s ease-out;
        
        &:focus {
        position: absolute;
        left: 0;
        top:0;
        transition: top 0.5s ease-in;
        };
    };
`;

export { GlobalCss };
