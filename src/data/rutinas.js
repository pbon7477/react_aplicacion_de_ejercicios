import puente from '../assets/images/puente.png';
import sentadillas from '../assets/images/sentadillas.png';
import laterales from '../assets/images/laterales.png';

import curlBicep from '../assets/images/curl-bicep.png';
import elevacionDeTalon from '../assets/images/elevacion-de-talon.png';
import extencionTricep from '../assets/images/extencion-tricep.png';

import pesoMuerto from '../assets/images/peso-muerto.png';
import pressBanca from '../assets/images/press-banca.png';
import pressMilitar from '../assets/images/press-militar.png';

import remo from '../assets/images/remo.png';
import sentadillaMancuerna from '../assets/images/sentadilla-mancuerna.png';
import zancadas from '../assets/images/zancadas.png';




export default [
    {
        "titulo" : "Trabajo 1",
        "rutina" : [
                    {
                        "ejercicio": "Puente",
                        "img" : puente,
                        "reps" : 20
                    },
                    {
                        "ejercicio": "Sentadillas",
                        "img" : sentadillas,
                        "reps" : 12
                    },
                    {
                        "ejercicio": "Laterales",
                        "img" : laterales,
                        "reps" : 30
                    }
                   ],

    },{
        "titulo" : "Trabajo 2",
        "rutina": [
            {
                "ejercicio":"Curl Bicep",
                "img" : curlBicep,
                "reps" : 15
            },           
            {
                "ejercicio":"Extencion de Tricep",
                "img" : extencionTricep,
                "reps" : 15
            },
            {
                "ejercicio":"Peso Muerto",
                "img" : pesoMuerto,
                "reps" : 20
            }
        ]
    },{
        "titulo" : "Trabajo 3",
        "rutina" : [
            {
                "ejercicio":"Elevacion de Talon",
                "img" : elevacionDeTalon,
                "reps" : 25
            },
            {
                "ejercicio":"Zancadas",
                "img" : zancadas,
                "reps" : 20
            },
            {
                "ejercicio":"Sentadilla con Mancuerna",
                "img" : sentadillaMancuerna,
                "reps" : 15
            }
        ]

    },{
        "titulo":"Trabajo 4",
        "rutina" : [            
            {
                "ejercicio":"Press Banca",
                "img" : pressBanca,
                "reps" : 30
            },
            {
                "ejercicio":"Press militar",
                "img" : pressMilitar,
                "reps" : 30
            },
            {
                "ejercicio":"Remo",
                "img" : remo,
                "reps" : 30
            }
        ]
    }
];