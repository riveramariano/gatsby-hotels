exports.createPages = async ({ actions, graphql, reporter }) => {
    
    const resultado = await graphql(`
        query {
            allDatoCmsHabitacion {
                nodes {
                    slug
                }
            }
        }
    `);

    // console.log(resultado.data.allDatoCmsHabitacion.nodes);

    if (resultado.errors) {
        reporter.panic('No Hubo Resultados', resultado.errors);
    }

    // SI HAY PAGINAS, CREAR LOS ARCHIVOS
    const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;
    habitaciones.forEach(habitacion => {
        actions.createPage({
            path: habitacion.slug,
            component: require.resolve('./src/components/habitaciones.js'),
            context: {
                slug: habitacion.slug
            }
        });
    });

}