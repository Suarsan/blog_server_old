'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        let postTypes;
        let htmlTags;
        let author;
        let analysis;
        let post;
        let paragraphs;

        // ****************************************************************************************
        // Post types
        postTypes = await queryInterface.bulkInsert('type', [{
                createdAt: new Date(),
                updatedAt: new Date(),
                content: 'REVIEW'
            },
            {
                createdAt: new Date(),
                updatedAt: new Date(),
                content: 'SPONSORED'
            },
            {
                createdAt: new Date(),
                updatedAt: new Date(),
                content: 'GLOSARY'
            }
        ], { returning: true });
        // ****************************************************************************************
        // Html tags
        htmlTags = await queryInterface.bulkInsert('html-tag', [{
                createdAt: new Date(),
                updatedAt: new Date(),
                content: 'p'
            },
            {
                createdAt: new Date(),
                updatedAt: new Date(),
                content: 'h3'
            },
            {
                createdAt: new Date(),
                updatedAt: new Date(),
                content: 'h4'
            },
            {
                createdAt: new Date(),
                updatedAt: new Date(),
                content: 'strong'
            },
            {
                createdAt: new Date(),
                updatedAt: new Date(),
                content: 'span'
            },
            {
                createdAt: new Date(),
                updatedAt: new Date(),
                content: 'img'
            }
        ], { returning: true });

        // ****************************************************************************************
        // León XIII
        author = await queryInterface.bulkInsert('author', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            email: 'javiersuarsan@gmail.com',
            password: 'javiersuarsan',
            firstname: 'León',
            lastname: 'XIII'
        }], { returning: true });

        // ****************************************************************************************
        // Post Lacoste
        analysis = await queryInterface.bulkInsert('analysis', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            score: 8
        }], { returning: true });

        post = await queryInterface.bulkInsert('post', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            slug: encodeURI('Camiseta blanca básica interior 100% algodón Lacoste'),
            title: 'Camiseta blanca básica interior 100% algodón Lacoste',
            image: 'https://i1.wp.com/www.adobomagazine.com/wp-content/uploads/2019/05/heroimage-lacoste.jpg',
            read_time: 3,
            author_id: author[0].id,
            analysis_id: analysis[0].id,
            type_id: 1
        }], { returning: true });

        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'Hoy toca analizar una de esas camisetas que no se ven mucho por la calle y que pocas veces nos encontraremos en las principales estanterías de las tiendas. Se trata de una camiseta básica interior marca Lacoste corte largo, slim fit, cuello redondo y logotipo situado en la parte inferior. Está fabricada en Bangladesh con un tejido 100% algodón Supima y diseñada en Francia. En este caso se trata de una pieza importada de Estados Unidos, muy vendida en grandes superficies americanas como Macys o Sears.',
            classes: '',
            htmltag_id: 1,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'Si tuviésemos que definir esta prenda en pocas palabras diría que se trata de una camiseta muy ligera, con un blanco duradero pero con poco cuerpo.',
            classes: '',
            htmltag_id: 4,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'Análisis a fondo',
            classes: '',
            htmltag_id: 2,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'La camiseta tiene un corte bastante alargado y ajustado, está levemente orientada a ser utilizada bajo prendas y el logotipo como veremos más adelante se ha desplazado a la parte delantera inferior derecha (así evitamos que se marque nada si la estamos usando bajo una camisa blanca por ejemplo). Se siente muy suave al tacto, fina y muy ligera, se transparenta demasiado quizás para usar como única prenda superior. Tiene poco cuerpo, por lo que si eres delgado y buscas una camiseta que te vista o te ayude a dar forma no es la más adecuada.',
            classes: '',
            htmltag_id: 1,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'El unboxing',
            classes: '',
            htmltag_id: 3,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'Este tipo de camisetas siempre se venden en pack, en este caso un Pack de 3. El envoltorio es correcto, cartón exterior fino pero resistente y envoltorio exterior de plástico transparente. Las camisetas vienen enrolladas y no dobladas y solo hace falta desenrollarlas para darse cuenta de que este formato es sin duda el que mejor resultado da ante deformaciones y arrugas. Además cuentan con otro fino carton en el interior de cada camiseta enrollada que permite que el enrollado sea todavía más sólido en el interior.',
            classes: '',
            htmltag_id: 1,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'https://www.underu.com/images/lacoste-3-pack-essentials-pure-cotton-crew-neck-t-shirts-white-p11886-62566_image.jpg',
            classes: '',
            htmltag_id: 6,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'Tejido',
            classes: '',
            htmltag_id: 3,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'Si analizamos el tejido más en profundidad nos encontramos con un gramaje más bien bajo, con un punto bastante espaciado que hace que la prenda sea realmente ligera pero que se transparente al estirar. Por la misma razón es bastante elástica aunque le cuesta recuperar su forma. Es bastante fácil desbocar el cuello y ver como no recupera su tamaño original hasta después de pasar por la lavadora.',
            classes: '',
            htmltag_id: 1,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'Forma',
            classes: '',
            htmltag_id: 3,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'El corte es alargado, ajustado en la parte superior y central. Sienta bastante bien si no tienes un cuerpo realmente delgado. En este caso puede quedar demasiado holgada. No es una camiseta diseñada para dar forma al cuerpo. Al no tener un gramaje espeso, la camiseta no aguanta bien la forma y puede producir bolsas o pliegues antiestéticos. El cuello es algo grande y puede quedar sin forma si no llenas la camiseta. Soporta muy bien el lavado a máquina, el color blanco perdura realmente bien en el tiempo haciendo que este aspecto sea quizás su punto fuerte (es una de las características de este tipo de algodón).',
            classes: '',
            htmltag_id: 1,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'Las costuras son de calidad pero sencillas. Especialmente reforzadas y rematadas en laterales y mangas. Son finas pero sólidas. No molestan. El elástico del cuello no es muy fuerte, como hemos dicho antes no se trata de una camiseta que de forma o se mantenga próxima al cuello, es más relajada lo que la hace más cómoda. En cuanto al tamaño es una camiseta que agradece pedir una talla menos. Si miramos en el interior del lateral izquierdo encontraremos la única etiqueta que lleva. Tiene un tamaño medio, es suave y no molesta. La talla y el modelo lo encontraremos vigilado en la parte posterior de la camiseta.',
            classes: '',
            htmltag_id: 1,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'Durabilidad',
            classes: '',
            htmltag_id: 3,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'Es una camiseta bastante resistente a los lavados, perderá antes la forma de los elásticos que el blanco nuclear, eso seguro.',
            classes: '',
            htmltag_id: 1,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'En resumen, podemos decir que se trata de una gran camiseta interior, con un algodón de gran calidad (Supima) que conserva muy bien el color pero no tanto la forma. Si buscas una camiseta que te de forma al cuerpo y se mantenga siempre perfecta en primera linea esta no es la mejor opción. Por el precio que tiene hay mejores opciones aunque quizás menos exclusivas.',
            classes: '',
            htmltag_id: 5,
            post_id: post[0].id
        }]);

        // ****************************************************************************************
        // Primark
        analysis = await queryInterface.bulkInsert('analysis', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            score: 8
        }], { returning: true });

        post = await queryInterface.bulkInsert('post', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            slug: encodeURI('Camiseta blanca básica barata de algodón Primark'),
            title: 'Camiseta blanca básica barata de algodón Primark',
            image: 'https://i.pinimg.com/originals/f9/c0/9c/f9c09c4037c4be7ac87ed2e7c1af74c2.png',
            read_time: 4,
            author_id: author[0].id,
            analysis_id: analysis[0].id,
            type_id: 1
        }], { returning: true });

        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'Como no todo van a ser camisetas de calidad y de marcas exclusivas hoy hablaremos sobre un básico muy asequible tanto por precio como por acceso. Se trata de una de las prendas (para nosotros) estrella de la tienda Irlandesa Primark, su camiseta básica 100% algodón. Está fabricada en Bangladesh, disponible en un sinfín de colores y es probablemente la camiseta más barata que puedes comprar por poco más de 2€.',
            classes: '',
            htmltag_id: 1,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'Por poco más de 2€ puedes hacerte con una camiseta de calidad suficiente como para durar una temporada.',
            classes: '',
            htmltag_id: 4,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'Análisis a fondo',
            classes: '',
            htmltag_id: 2,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'La camiseta que analizamos hoy es probablemente la mejor opción si quieres adquirir varias prenda para el fondo de armario dado su buena relación calidad-precio, y no por su calidad si no justamente por su precio. Tiene un corte regular que hace que funcione muy bien como única prenda para verano, como bajoprenda o incluso como ropa interior para estar por casa.',
            classes: '',
            htmltag_id: 1,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'El unboxing',
            classes: '',
            htmltag_id: 3,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'El unboxing en este caso digamos que es inexistente. Se venden por unidad y podremos encontrarlas en alguna de las islas que se encuentran normalmente en la entrada de cualquier de centro Primark. Está disponible en una gran variedad de tallas y para mantener un precio tan bajo prescinden de cualquier tipo de caja o incluso etiqueta. Como mucho una pegatina alargada que indica la talla de la prenda.',
            classes: '',
            htmltag_id: 1,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'Tejido',
            classes: '',
            htmltag_id: 3,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'Teniendo en cuenta el target de esta prenda no os sorprenderá saber que el algodón con el que se confecciona esta prenda es de una calidad, digamos, limitada. Cuenta con un gramaje bastante generoso aunque sigue siendo ligera y fresca (esto la hace ideal para verano). La trama no es del todo mala pero cuenta con bastantes imperfecciones. No es muy elástica y eso es una buena noticia en este caso porque ayuda a que la camiseta no se deforme y mantenga la presencia durante mas tiempo.',
            classes: '',
            htmltag_id: 1,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'Forma',
            classes: '',
            htmltag_id: 3,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'Como ya hemos dicho, esta camiseta es básica en todos sus aspectos, tiene un corte bastante recto esto hace que siente bien casi en cualquier tipo de cuerpo, sobretodo si eres delgado. En cuanto a tallas tiene unas medidas bastante ajustadas al tallase europeo así que da la talla justa, simplemente busca la tuya y ya. Como cuenta con un tela ligeramente gruesa mantiene bien la forma, aguanta bastante el uso diario en su parte superior (cuello y mangas) pero no tanto en la falda o parte inferior que acabará dando de sí tras el uso y los diferentes lavados. El cuello no se deforma fácilmente y como las mangas son bastante cortas hacen que sea bastante cómoda para el día a día. Sin embargo no es una camiseta que nos vayamos a poner muchas veces porque pierde bastante rápido su buen aspecto a medida que la pasemos por la lavadora.',
            classes: '',
            htmltag_id: 1,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'El color es sin duda uno de sus puntos débiles, nos costará mantener la blancura que tiene la camiseta recién comprada. Por lo que cuesta tampoco iba a ser la camiseta definitiva… Las costuras no son nada malas, quizás poco mimadas pero cumplidoras. En el cuello y las mangas, las costuras son bastante gruesas aunque no llegan a ser molestas y en la parte inferior son mas delgadas pero aún así costará ver el dobladillo roto o deshilachado. En cuanto a etiquetas interiores podemos encontrar 3 situadas en el interior inferior derecho, no son muy molestas. La talla y el logotipo de Primark vienen marcados mediante serigrafía en la parte superior de la espalda y no se transparenta. Exteriormente no consta de ningún logotipo y eso es de agradecer.',
            classes: '',
            htmltag_id: 1,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'Durabilidad',
            classes: '',
            htmltag_id: 3,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'Como ya hemos venido indicando no se trata de una camiseta resistente y caso parece un articulo de usar y tirar. Lo primero que observaremos es el típico tono amarillento de una tela que no conserva bien el color y con el tiempo perderá forma y resistencia en la parte inferior haciendo un efecto falda volante que hace que se generen pliegues y arrugas bastante antiestéticos (al menos si la usas como una prenda exterior).',
            classes: '',
            htmltag_id: 1,
            post_id: post[0].id
        }]);
        paragraphs = await queryInterface.bulkInsert('paragraph', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            content: 'Si tuviéramos que resumir en pocas palabras las características de esta prenda básica diríamos que se trata de una camiseta básica de baja calidad pero que por su ridículo precio es casi una compra obligada. Es una buena manera de disponer de golpe y de una manera económica de un fondo de armario que nos permita tener mutiles combinaciones de prendas para el día a día. ',
            classes: '',
            htmltag_id: 5,
            post_id: post[0].id
        }]);
    },

    down: (queryInterface, Sequelize) => {

    }
};