import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import paso1 from '../img/paso1.png'
import paso2 from '../img/paso2.png'
import paso3 from '../img/paso3.png'
import paso4 from '../img/paso4.png'
import paso5 from '../img/paso5.png'
import paso6 from '../img/paso6.png'
import paso7 from '../img/paso7.png'
import paso10 from '../img/paso10.png'
import paso8 from '../img/paso8.png'
import paso9 from '../img/paso9.png'
import Scrum from '../img/Scrum.jpeg'
import Po from '../img/po.jpg'
import AbueloMax from '../img/Leo.jpeg'
import Mary from '../img/Mary.jpeg'
import Wilton from '../img/WiltonH.jpeg'
import FerQ from '../img/FerQ.jpeg'
import FerH from '../img/FerH.jpeg'
import Esteban from '../img/Esteban.jpeg'
import Jose from '../img/Jose.jpeg'
import fondo from '../img/fondo.jpg'
import svg1 from '../svg/1.svg'
import svg2 from '../svg/2.svg'
import svg3 from '../svg/3.svg'
import svg4 from '../svg/planes.svg'
import svg5 from '../svg/vision.svg'
import sofka from '../ico/sofka.ico'
import sofkaU from '../ico/sofkaU.ico'
window.onload = ()=>{

    responsitiveCuerpo();
    responsitiveGaleria();
   
}


window.onresize = responsitive;
function responsitive() {
    //console.log("#");
    responsitiveCuerpo();
    responsitiveGaleria();
}

function responsitiveCuerpo() {
    let altoHeader = document.getElementById('header').getBoundingClientRect().height;
    let altoPresentacion = document.getElementById('presentacion').getBoundingClientRect().height;
    document.getElementById('presentacion').style.top = altoHeader + "px";
    document.getElementById('infoP').style.top = altoHeader + "px";
    document.getElementById('infoP').style.height = altoPresentacion + "px";
    document.getElementById('infoP').getElementsByTagName('h1')[0].style.lineHeight = (altoPresentacion - 70) + "px";
    document.getElementById('infoP').getElementsByTagName('h1')[0].style.fontSize = (altoPresentacion * .1) + "px";
    document.getElementById('infoP').getElementsByTagName('h2')[0].style.fontSize = (altoPresentacion * .1) + "px";
    document.getElementById('cuerpo').style.top = (altoHeader + altoPresentacion) + "px";

}

function responsitiveGaleria() {
    let altoVisualizacion = document.getElementById('visualizacion').getBoundingClientRect().height;
    document.getElementById('left').style.height = altoVisualizacion + "px";
    document.getElementById('right').style.height = altoVisualizacion + "px";
    let altoDevelopers = document.getElementById('Developers').getBoundingClientRect().height;
    let devs = document.getElementsByClassName('dev');
    for (let i = 0; i < devs.length; i++) {
        let nombre = devs[i].getElementsByTagName('h6')[0];
        
        nombre.style.margin="5px";
        nombre.style.marginBottom= "20px";
        devs[i].style.height = altoDevelopers + "px";
        let img = devs[i].getElementsByTagName('img')[0];
       
       
        img.style.height = devs[i].getBoundingClientRect().width + "px";
        devs[i].style.height = (nombre.getBoundingClientRect().height + img.getBoundingClientRect().height + 35) + "px";
        nombre.style.fontSize = (devs[i].getBoundingClientRect().width * .1) + "px";
    }

}

const LandingPage = () => {

    useEffect(() => {

        document.getElementById('galeria').style.right = "0%";
    }, []);


    const moverDerecha = () => {
        let p = parseInt(document.getElementById('galeria').style.right, 10);
        if (p < 800) {
            p += 100;
        }
        document.getElementById('galeria').style.right = p + "%";
    }

    const moverIzquierda = () => {
        let p = parseInt(document.getElementById('galeria').style.right, 10);
        if (p > 0) {
            p -= 100;

        }
        document.getElementById('galeria').style.right = p + "%";

    }

    return (
        <>
            <header id='header'>
                <Navbar />
            </header>
            <section id="presentacion">
                <img id="fonoP" src={fondo}></img>

            </section>
            <div id="infoP">
                <h1><font FACE="times new roman">DigiMed</font></h1>
                <h2>Te ayudamos a cuidar</h2>
            </div>
            <section id="cuerpo">
                <section className='contenedor' id="scrollspyHeading1">

                    <h4 className='titulo'>??Qu?? es DigiMed?</h4>
                    <img src={svg1} alt="" />
                    <p>
                        DigiMed es una plataforma web de software que le permite a los diferentes centros de salud,
                        tener una mejor gesti??n de la informaci??n en la atenci??n a los pacientes por parte del m??dico
                        y las enfermeras, agregando valor en la gesti??n de la comunicaci??n entre ellos y enfocando los
                        esfuerzos a mejorar la atenci??n y el cuidado de los pacientes.
                    </p>

                </section>
                <section className='contenedor' id="scrollspyHeading2">

                    <h4 className='titulo'>??C??mo lo hacemos?</h4>
                    <img src={svg2} alt="" />
                    <p>
                        Nos enfocamos en ser el soporte principal para que el m??dico pueda gestionar la atenci??n de sus pacientes.
                        Siendo este un proceso que abarca el momento desde que el paciente ingresa a urgencias para su atenci??n.
                    </p>

                </section>
                <section className='contenedor' id="scrollspyHeading3">
                    <h4 className='titulo'>??C??mo funciona el software?</h4>
                    <section className='contenedorVisualizacion'>
                        <button id='left' onClick={() => { moverIzquierda() }} type="button" class="btn btn-outline-light"> {"<"} </button>
                        <section id='visualizacion'>

                            <section className='galeria' id='galeria'>
                                <section className='foto'>
                                    <h6>
                                        Paso 1: Un paciente asiste al hospital.
                                    </h6>
                                    <img src={paso1} />
                                </section>
                                <section className='foto'>
                                    <h6>
                                        Paso 2: El m??dico recibe al paciente y le pregunta sus datos b??sicos de identificaci??n.
                                    </h6>
                                    <img src={paso2} />
                                </section>
                                <section className='foto'>
                                    <h6>
                                        Paso 3: El m??dico ingresa los s??ntomas del paciente.
                                    </h6>
                                    <img src={paso3} />
                                </section>
                                <section className='foto'>
                                    <h6>
                                        Paso 4: El paciente es ingresado a consulta con el m??dico.
                                    </h6>
                                    <img src={paso4} />
                                </section>
                                <section className='foto'>
                                    <h6>
                                        Paso 5: El m??dico realiza un diagn??stico del paciente para entender su situaci??n actual.
                                    </h6>
                                    <img src={paso5} />
                                </section>
                                <section className='foto'>
                                    <h6>
                                        Paso 6: El m??dico decide el tratamiento del paciente y este puede ser ingresado, remitido o dado de alta.
                                    </h6>
                                    <img src={paso6} />
                                </section>
                                <section className='foto'>
                                    <h6>
                                        Paso 7: Si el paciente es ingresado al hospital, el m??dico le asigna a las enfermeras a su cargo las funciones que debe seguir con el paciente.
                                    </h6>
                                    <img src={paso7} />
                                </section>
                                <section className='foto'>
                                    <h6>
                                        Paso 8: El m??dico puede continuar atendiendo a los nuevos pacientes.
                                    </h6>
                                    <img src={paso8} />
                                </section>
                                <section className='foto'>
                                    <h6>
                                        Paso 9: El m??dico puede recibir feedback de la atenci??n prestada al paciente.
                                    </h6>
                                    <img src={paso9} />
                                </section>
                                <section className='foto'>
                                    <h6>
                                        Paso 10: El software tambi??n permite otras funcionalidades al m??dico que le permiten automatizar partes de su trabajo. Tales como el registro de personal de enfermer??a y sus respectivas funciones con los pacientes.
                                    </h6>
                                    <img src={paso10} />
                                </section>
                            </section>

                        </section>
                        <button id='right' onClick={() => { moverDerecha() }} type="button" class="btn btn-outline-light">{">"}</button>
                    </section>
                </section>

                <section className='contenedor'>
                    <div className='contenido' id="scrollspyHeading4">
                        <h4 className='titulo'>??A quienes impactamos con DigiMed?</h4>
                        <img src={svg3} alt="" />
                        <p>
                            <ul> Actores principales:
                                <li>Pacientes: Nuestro objetivo con ellos es mejorar la atenci??n de los pacientes a trav??s del uso de herramientas de software que permitan mejorar los procesos internos del centro de salud.</li>
                                <li> M??dicos: Sabemos que los m??dicos son personas ocupadas, por lo que un software que le ayuda a gestionar la informaci??n de sus nuevos pacientes, puede llegar a ser clave para la reducci??n de los tiempos de atenci??n y gesti??n de los pacientes.</li>
                                <li>Personal de enfermer??a: es importante que la informaci??n sobre las funciones en relaci??n al cuidado de un paciente sea clara y eficiente, por lo que un software que le permita gestionar mejor la comunicaci??n entre el m??dico y el personal de enfermer??a puede ser clave para optimizar los tiempos en la atenci??n de los pacientes.</li>
                                <li> Hospitales: Gestionar la informaci??n de los pacientes en una base de datos siempre ser?? un desaf??o.</li>
                            </ul>
                        </p>
                    </div>
                </section>
                <section className='contenedor' id="scrollspyHeading5">
                    <h1 className='titulo'>Scrum Team</h1>
                    <br />
                    <br />
                    <div>
                        <h4>Scrum Master</h4>
                        <br />
                        <img src={Scrum} alt="foto1-equipo" className="imgBorde" />
                        <h6>Bel??n Rold??n</h6>
                    </div>
                    <div>
                        <br />
                        <h3>Produc Owner</h3>
                        <br />
                        <img src={Po} alt="foto2-equipo" className="imgBorde" />
                        <h6>Leandro Valencia Buitrago</h6>
                    </div>
                    <div id='ContDevelopers'>
                        <br />
                        <h2>Developers</h2>
                        <br />
                        <div id='Developers'>
                            <div className='dev' >
                                <h6>Leonardo Odriozola</h6>
                                <img src={AbueloMax} alt="foto3-equipo" />
                            </div>
                            <div className='dev' >
                                <h6>Mary Evelyn Rojas Roa</h6>
                                <img src={Mary} alt="foto4-equipo" />
                            </div>
                            <div className='dev'>
                                <h6>Wilton Armando Henao Mazo</h6>
                                <img src={Wilton} alt="foto5-equipo" />
                            </div>
                            <div className='dev'>
                                <h6>Fernando Quiceno Gomez</h6>
                                <img src={FerQ} alt="foto6-equipo" />
                            </div>
                            <div className='dev'>
                                <h6>Fernando Hern??ndez Clivio</h6>
                                <img src={FerH} alt="foto7-equipo" />
                            </div>
                        </div>
                    </div>
                    <div id='ContDevelopers'>
                        <br />
                        <h2>QA</h2>
                        <br />
                        <div id='Developers'>
                            <div className='dev'>
                                <h6>Jos?? Vicente Velasco L??pez</h6>
                                <img src={Jose} alt="foto7-equipo" />
                            </div>
                            <div className='dev'>
                                <h6>Juan Esteban Londo??o Ruiz</h6>
                                <img src={Esteban} alt="foto7-equipo" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='contenedor' id="scrollspyHeading6">
                    <h4 className='titulo'>Planes</h4>
                    <img src={svg4} alt="" />
                    <h3><span id="contenido-texto">1</span> Paquete Base ($2.000 USD Mensuales):</h3>

                    <ul> <h4>Incluye:</h4>
                        <li> Adaptaci??n del software al branding de la cl??nica o el hospital.</li>
                        <li>Arquitectura 100% en la nube (No requiere servidores f??sicos).</li>
                        <li>Pago del servidor y ciberseguridad mensualmente. </li>
                    </ul>
                    <h3><span id="contenido-texto">2</span> Paquete Premium: ( Precio a convenir de acuerdo con las necesidades del cliente ):</h3>
                    <ul><h4>Incluye:</h4>
                        <li>Adaptaci??n del software al branding de la cl??nica o el hospital.</li>
                        <li>Arquitectura 100% en la nube (No requiere servidores f??sicos).</li>
                        <li>Pago del servidor y ciberseguridad mensualmente. </li>
                        <li>Desarrollo de nuevas funcionalidades y herramientas de acuerdo al contexto de trabajo del cliente. </li>
                    </ul>
                </section>
                <section className='contenedor' id="scrollspyHeading7">
                    <h4 className='titulo'>Vision</h4>
                    <img src={svg5} alt="" />
                    <p>
                        Optimizar y mejorar los procesos de gesti??n del sistema de servicio de salud para aprovechar las herramientas
                        tecnol??gicas en la democratizaci??n de la salud para todas las personas.
                    </p>
                </section>
                <footer>
                    <p>
                        Esta plataforma fue hecha en el Reto T??cnico del Training de Sofka U de la mano del equipo de desarrollo compuesto
                        por los desarrolladores y los QAs (Quality Assurance), y de la mano del equipo de Agilismo compuesto por el Scrum
                        Master y el Product Owner. Este proyecto tiene como nombre DigiMed y es la base para proyectar esta visi??n a futuros
                        equipos que retomen este proyecto en un futuro. Agradecimientos a los coach y a los mentores que hicieron esto
                        posible, y a todos los compa??eros de Sofka, gracias a los que ayudaron en hacer este proyecto posible.
                    </p>
                    <h4 className="titulo-Final">&copy; DigiMed | <span><img src={sofka} /></span>|<span><img src={sofkaU}/></span> </h4>
                </footer>
            </section>

        </>
    );
}

export default LandingPage;