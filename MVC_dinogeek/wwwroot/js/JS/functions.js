var userName = "Temporal";
var userPass = "123456789";

(function(){
    emailjs.init("uuNIovmC9fSJuKLom");
})();

function autoResize(textarea) {
    textarea.style.height = "auto"; 
    textarea.style.height = textarea.scrollHeight + "px";
}

function sendMessage() {
    let asunto = document.getElementsByClassName('Asunto')[0].value;
    let mensaje = document.getElementsByClassName('Mensaje')[0].value;

    let templateParams = {
        asunto: asunto,
        Mensaje: mensaje
    };

    emailjs.send("service_0l3wyhd", "template_8a53i0w", templateParams)
        .then(response => {
            alert("Correo enviado exitosamente");
        })
        .catch(error => {
            alert("Error al enviar el correo: " + error);
        });
}

function sendSuscription() {
    let email = document.getElementsByClassName('CorreoSuscripcion')[0].value;

    let templateParams = {
        email: email
    };

    emailjs.send("service_0l3wyhd", "template_3lyub93", templateParams)
       .then(response => {
            alert("Te has Suscrito Correctamente!");
        })
       .catch(error => {
            alert("Error al realizar la suscripción" + error);
        });
}

function createNewUser(){

    NewName = document.getElementsByClassName('newName')[0].value;
    NewPass = document.getElementsByClassName('newPass')[0].value;

    if(NewName == "" || NewPass == ""){
        alert("No se puede crear un usuario con campos vacíos");
        return;
    }else{
        window.userName = NewName; // Modificando la variable global
        window.userPass = NewPass; // Modificando la variable global
        console.log("Después de la actualización:", userName, userPass);

        localStorage.setItem("userName", NewName);
        localStorage.setItem("userPass", NewPass);
        window.location.href = "/Home/Login";
    
    }
}

function validateUser(){

    var userName = localStorage.getItem("userName");
    var userPass = localStorage.getItem("userPass");

    let name = document.getElementsByClassName('userName')[0].value;
    let pass = document.getElementsByClassName('userPass')[0].value;
    if(name == userName && pass == userPass){
        window.location.href = "/Home/Index";

    }else{
        alert("Usuario o Contraseña incorrectos");
        console.log(userName);
        console.log(userPass);
        console.log(name)
        console.log(pass)
    }
}

function goTo(page) {
    window.location.href = page;
}