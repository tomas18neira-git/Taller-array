let estudiantes = [
    { nombre: "Ana Torres", edad: 14, curso: "9A" },
    { nombre: "Mateo Ruiz", edad: 15, curso: "10B" },
    { nombre: "Lucía Gómez", edad: 13, curso: "8A" },
    { nombre: "Samuel Díaz", edad: 16, curso: "11A" },
    { nombre: "Valentina Cruz", edad: 14, curso: "9B" }
];


function buscarEstudiante() {

    let nombreIngresado = document.getElementById("nombre").value;

    nombreIngresado = nombreIngresado.trim().toLowerCase();


    if (nombreIngresado === "") {

        document.getElementById("resultado").innerHTML =
            "Por favor, escribe un nombre.";

        return;
    }


    let encontrado = false;


    for (let i = 0; i < estudiantes.length; i++) {

        let nombreEstudiante = estudiantes[i].nombre.toLowerCase();


        if (nombreIngresado === nombreEstudiante) {

            document.getElementById("resultado").innerHTML =
                "Nombre: " + estudiantes[i].nombre +
                "<br>Edad: " + estudiantes[i].edad +
                "<br>Curso: " + estudiantes[i].curso;

            encontrado = true;

        }

    }


    if (encontrado === false) {

        document.getElementById("resultado").innerHTML =
            "No se encontró ningún estudiante.";

    }

}