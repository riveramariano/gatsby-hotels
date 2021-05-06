import React, { Fragment } from 'react'
import { Link } from 'gatsby';
import Navegacion from './nav';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const EnlaceHome = styled(Link)`
    color: #FFF;
    text-align: center;
    text-decoration: none;
`;

const Footer = ({title}) => {

    const year = new Date().getFullYear();

    return (
        <Fragment>
            <footer css={css`
            background-color: rgba(44,62,80);
            margin-top: 5rem;
            padding: 1rem;
            `}>
                <div css={css`
                max-width: 1200px;
                margin: 0 auto;

                @media (min-width: 768px) {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                `}>
                    <Navegacion />
                    <EnlaceHome to="/"><h1>Gatsby Hotels</h1></EnlaceHome>
                </div>
            </footer>
            <p css={css`
                text-align:center;
                color: #FFF;
                background-color: rgb(33,44,55);
                margin: 0;
                padding: 1rem;
            `}>
                {title}. Todos los Derechos Reservados {year} &copy;
                Mariano Rivera
            </p>
        </Fragment>
    );
}

export default Footer;