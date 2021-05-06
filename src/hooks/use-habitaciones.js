import { graphql, useStaticQuery } from 'gatsby';

const useHabitaciones = () => {

    const data = useStaticQuery(graphql`
    query {
        allDatoCmsHabitacion {
            nodes {
                id
                titulo
                contenido
                slug
                imagen {
                    fluid (maxWidth: 1200) {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }`);

    return data.allDatoCmsHabitacion.nodes.map(habitacion => ({
        id: habitacion.id,
        titulo: habitacion.titulo,
        contenido: habitacion.contenido,
        imagen: habitacion.imagen,
        slug: habitacion.slug
    }));
}

export default useHabitaciones;