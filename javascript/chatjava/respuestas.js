function getBotResponse(input) {
  
    if (input == "1") {
        return "Nuestro numero de contacto es: 3508382046. Tambien puedes enviarnos correos a reciclajesavilla@hotmail.com";
    } else if (input == "2") {
        return "R Savilla SAS es una sociedad por acciones simplificadas matriculada el martes 15 de marzo de 2016 en la cámara de comercio de Bogotá.";
    } else if (input == "3") {
        return "Nos dedicamos al reciclaje de materiales y con estos conventirlos en nuevas cosas, sea muebles o manualidades";
    }

    if (input == "Me gusta la respuesta") {
        return "Esperamos haberlo ayudado";
    }

    
    if (input == "Repiteme que opciones tiene") {
        return "1.Contacto,2.Quienes somos,3.Que hacemos";
    }

    if (input == "Hola" || input == "hola") {
        return "¡Hola!";
    } else if (input == "Adios") {
        return "¡Nos vemos!";
    } else {
        return "Intenta preguntar otra cosa";
    }
}