import React from 'react';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { css } from '@emotion/react';

export const query = graphql`
    query ($slug: String!) {
        allDatoCmsHabitacion (filter: {slug: { eq: $slug } }) {
            nodes {
                titulo
                contenido
                imagen {
                    fluid (maxWidth: 1200) {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`;

const HabitacionTemplate = ({ data }) => {

    const { titulo, contenido, imagen } = data.allDatoCmsHabitacion.nodes[0];

    return (
        <Layout>
            <main css={css`
                margin: 0 auto;
                max-width: 1200px;
                width: 95%;
            `}>
                <h1 css={css`
                    text-align: center;
                    margin-top: 4rem;
                `}>{titulo}</h1>
                <p>{contenido}</p>
                <Image fluid={imagen.fluid} />
            </main>
        </Layout>
    );
}

export default HabitacionTemplate;