var userName = "Temporal";
var userPass = "123456789";


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

    //OBTENEMOS STRINGS DE LOS INPUTS

    NewName = document.getElementsByClassName('newName')[0].value;
    NewPass = document.getElementsByClassName('newPass')[0].value;


    //VALIDAMOS QUE NO ESTEN VACIOS
    if(NewName == "" || NewPass == ""){
        alert("No se puede crear un usuario con campos vacíos");
        return;
    }else{

        //MODIFICAMOS VARIABLE GLOBAL
        window.userName = NewName; // Modificando la variable global
        window.userPass = NewPass; // Modificando la variable global
        console.log("Después de la actualización:", userName, userPass);

        //GUARDAMOS EN EL LOCAL STORAGE PARA QUE LA VARIABLE PERSISTA AUN DESPUES DE CERRAR

        localStorage.setItem("userName", NewName);
        localStorage.setItem("userPass", NewPass);

        //VAMOS PA CASITA

        window.location.href = "/Home/Login";
    
    }
}

function validateUser(){

    //OBTENEMOS VALORES DEL LOCAL STORAGE

    var userName = localStorage.getItem("userName");
    var userPass = localStorage.getItem("userPass");

    //OBTENEMOS VALORES DEL INPUT

    let name = document.getElementsByClassName('userName')[0].value;
    let pass = document.getElementsByClassName('userPass')[0].value;
    if(name == userName && pass == userPass){
        //SI SI VAMO A CASITA
        window.location.href = "/Home/Index";

    }else{

        //SI NO PAILAS, USUARIO INCORRECTO

        alert("Usuario o Contraseña incorrectos");
    }
}

function goTo(page) {
    window.location.href = page;
}

// FILTRADO EN SECCION DE NOTICIAS & GUIAS

function filtrarNoticias(categoria) {
    console.log(`🟢 Filtrando por: ${categoria}`);
    
    const cards = document.querySelectorAll(".Card");
    const mainContent = document.querySelector(".main-content");

    let visibleCards = 0;

    cards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        
        if (categoria === "Todo" || cardCategory === categoria) {
            card.style.display = "flex"; // Mostrar
            visibleCards++;
        } else {
            card.style.display = "none"; // Ocultar
        }
    });
}

