//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("button").addEventListener("click", function() {
        let inputEmail = document.getElementById("inputEmail");
        let inputPassword = document.getElementById("inputPassword");
        let camposCompletos = true;

        if (inputEmail.value === '') {
            inputEmail.classList.add("invalid");
            camposCompletos = false;
            alert("Debe escribir su Email");
        } else {
            inputEmail.classList.remove("invalid")
        }
        if (inputPassword.value === '') {
            inputPassword.classList.add("invalid");
            camposCompletos = false;
            alert("Debe escribir una contraseña");
        } else {
            inputPassword.classList.remove("invalid")
        }
        if (camposCompletos) {
            window.location = "inicio.html";
        }
    }
    )

});
