const emailPattern = {
	value:
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	message: "Email no válido",
};

const namePattern = {
	value: /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g,
	message: "Nombre no válido",
};

const floorPatternMin = {
	value: 1,
	message: "Piso no válido",
};

const floorPatternMax = {
	value: 50,
	message: "Piso no válido",
};

const pricePatternMin = {
	value: 200000,
	message: "Precio no válido",
};

const pricePatternMax = {
	value: 20000000,
	message: "Precio no válido",
};

export const routes = [
    {
        component: {
            path: "/datos",
            index: 1,
            nextStep: "/email",
            title: "Sobre ti",
            description: "Queremos saber tus datos, o bien, de la persona que solícita la oferta."
        },
        fields: {
            label: "Ingresa tu nombre(s) y apellidos",
            placeholder: "Franco Zárate García",
            input: {
                type: "text",
                name: "fullName",
                pattern: namePattern,
                required: true,
            }
        }
    },
    {
        component: {
            path: "/email",
            index: 2,
            prevStep: "/datos",
            nextStep: "/direccion",
            title: "Email",
            description: "Queremos saber tus datos, o bien, de la persona que solícita la oferta."
        },
        fields: {
            label: "Ingresa tu email",
            placeholder: "usuario@gmail.com",
            input: {
                type: "email",
                name: "email",
                pattern: emailPattern,
                required: true,
            }
        }
    },
    {
        component: {
            path: "/direccion",
            index: 3,
            prevStep: "/email",
            nextStep: "/pisos",
            title: "Dirección",
            description: "Queremos saber tus datos, o bien, de la persona que solícita la oferta."
        },
        fields: {
            label: "Ingresa la dirección completa del inmueble",
            placeholder: "Av. López Mateos",
            input: {
                type: "text",
                name: "address",
                pattern: "",
                required: true,
            }
        }
    },
    {
        component: {
            path: "/pisos",
            index: 4,
            prevStep: "/direccion",
            nextStep: "/amenidades",
            title: "Piso",
            description: "Queremos saber tus datos, o bien, de la persona que solícita la oferta."
        },
        fields: {
            label: "Ingresa el número del piso del inmueble",
            placeholder: "5",
            input: {
                type: "number",
                name: "floor",
                pattern: floorPatternMax,
                min: floorPatternMin,
                max: floorPatternMax,
                required: true,
            }
        }
    },
    {
        component: {
            path: "/amenidades",
            index: 5,
            prevStep: "/pisos",
            nextStep: "/parqueadero",
            title: "Amenidades",
            description: "Queremos saber tus datos, o bien, de la persona que solícita la oferta."
        },
        fields: {
            label: "Selecciona las amenidades que contiene el inmueble",
            placeholder: "Franco Zárate García",
            input: {
                type: "radio",
                name: "amenidades",
                pattern: "",
                required: false,
                options: ["Zona BBQ", "Sala comunal", "Parque de juegos"]
            }
        }
    },
    {
        component: {
            path: "/parqueadero",
            index: 6,
            prevStep: "/amenidades",
            nextStep: "/monto-venta",
            title: "Estacionamiento",
            description: "Queremos saber tus datos, o bien, de la persona que solícita la oferta."
        },
        fields: {
            label: "El inmueble cuenta con estacionamiento?",
            placeholder: "Franco Zárate García",
            input: {
                type: "radio",
                name: "parking",
                pattern: "",
                required: true,
                options: ["Sí", "No"],
                subOptions: {
                    label: "El estacionamiento está cubierto?",
                    type: "radio",
                    name: "parkingCover",
                    options: ["Sí", "No"],
                    required: true
                },
            },
        }
    },
    {
        component: {
            path: "/monto-venta",
            index: 7,
            prevStep: "/parqueadero",
            nextStep: "/elevador",
            title: "Precio",
            description: "Queremos saber tus datos, o bien, de la persona que solícita la oferta."
        },
        fields: {
            label: "Precio del apartamento",
            placeholder: "$1,000,000",
            input: {
                type: "currency",
                name: "monto",
                pattern: pricePatternMin,
                min: pricePatternMin,
                max: pricePatternMax,
                required: true,
            }
        }
    },
    /*{
        component: {
            path: "/inmueble",
            index: 8,
            prevStep: "/monto-venta",
            nextStep: "/elevador",
            title: "Foto",
            description: "Queremos saber tus datos, o bien, de la persona que solícita la oferta."
        },
        fields: {
            label: "Selecciona una foto de tu inmueble",
            placeholder: "Franco Zárate García",
            input: {
                type: "image",
                name: "inmueble",
                pattern: "",
                required: false,
            }
        }
    },*/
    {
        component: {
            path: "/elevador",
            index: 8,
            prevStep: "/monto-venta",
            nextStep: "/resultados",
            title: "Elevador",
            description: "Queremos saber tus datos, o bien, de la persona que solícita la oferta."
        },
        fields: {
            label: "El inmueble cuenta con elevador?",
            placeholder: "Franco Zárate García",
            input: {
                type: "radio",
                name: "elevator",
                pattern: "",
                required: true,
                options: ["Sí", "No"],
            }
        }
    }
]