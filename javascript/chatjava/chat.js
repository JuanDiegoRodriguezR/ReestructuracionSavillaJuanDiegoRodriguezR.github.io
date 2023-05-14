// Desplegable
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "¡Bienvenido!, en este chat te ofrecemos respuestas para:"
    let secondmsg ="1.Contacto"
    let thirdmsg ="2.Quienes somos"
    let fourmsg ="3.Que hacemos"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>' + '<p class="botText"><span>' + 
    secondmsg + '</span></p>' + '<p class="botText"><span>' + thirdmsg +  '</span></p>' + '<p class="botText"><span>'+ fourmsg + '</span></p>' ;

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Recibe la respuesta
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Toma el texto del input box y lo procesa
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "Repiteme que opciones tiene";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Maneja enviar mensajes
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Respuesta
     setTimeout(() => {
         getHardResponse(sampleText);
     }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Me gusta la respuesta")
}

// Oprime enter para enviar mensajes
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});