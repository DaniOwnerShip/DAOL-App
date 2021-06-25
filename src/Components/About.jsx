

import React, { useEffect, useRef } from 'react';
import MainControler from '../Classes/mainControler';


function About() {

    let refAbout = useRef();
    let refComponent = useRef();
    let refLine = useRef();


    useEffect(() => {
        const animatorLineAb = new MainControler(refAbout, refComponent, refLine, "lineAbout");
        animatorLineAb.init();
    });


    return (

        <div ref={refAbout} aria-label="container" aria-expanded="false" className="container animations">

            <div ref={refLine} aria-hidden="false" ref={refLine} className="lineAnim"></div>

            <div className="container--txtHead">
                Sobre mi
            </div>

            <div ref={refComponent} aria-hidden="true" className="container--about flex hide" >

                <img src="../resources/portfolio/meb.jpg" className="ImageAbout" alt="err" />

                <div className="BrownBox about">

                    <h3>Hola, mi nombre es Daniel. Me apasiona la ciencia y la tecnología desde pequeño.

                        <br /><br />Mis conocimientos de programación abarcan desde la electrónica digital,
                        registros de bits y "Bitwise", a la programación orientada a objetos y bases de datos.

                        <br /><br />He programado como profesional en la industria para sistemas DCS. Y como freelance, webs, drivers para sensores, tokens Ethereum ERC20 y videojuegos 2D/3D.
                        Actualmente desarrollo webs en React.

                        <br /><br />Puedo adaptarme a cualquier tecnología y lenguaje de programación en función de las necesidades.
                    </h3>

                </div>

                <h5>Amante de los retos y la innovación. Comprometido con la excelencia. Siempre aprendiendo.</h5>

            </div>

        </div>
    );
}

export default About;