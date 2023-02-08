import React from 'react'
import { TimeLine } from '../components/TimeLine'

const tecnologies = [ 
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "React Native",
    "Node.js",
    "Express",
    "GraphQL",
    "Vtex",
    "API REST",
    "SQL",
    "NoSQL",
    "Metodologias Agiles",
    "GIT"
]

export const AboutMe = () => {
    return (
        <div className='row cont-center'>
            <div className="col-12 col-md-12">
                <div>
                    <p className='title-md'>About</p>
                    <p>
                        ¡Hola! Mi nombre es <b>David Ledezma</b> y disfruto creando cosas que viven en Internet. 
                        Mi interés en la progrmacion comenzó en 2016 cuando decidí estudiar la ingenieria en ciencias computacionales en UDG.
                        Despues descubri el desarrollo web especializandome en fronend y en el backend. 
                    </p>
                    <p>
                        Avance rápido hasta hoy, y tuve la oportunidad de trabajar en algunas empresas con lo cual he podido crear cosas interesantes. 
                        Mi enfoque principal en estos días es crear productos que faciliten la vida de los usuarios.
                    </p>
                </div>

                <div>
                    <p className='title-md'>Habilidades</p>
                    <p>
                        {tecnologies.map( (item => 
                            <span className="badge rounded-pill text-bg-secondary mx-1">{item}</span>
                        ))}
                    </p>
                </div>
                <div>
                    <p className='title-md'>Experiencia</p>
                    <TimeLine />
                </div>
            </div>
        </div>
    )
}