const playerNameInput = document.getElementById("nombre");

const nombreForm = document.getElementById("nombreForm");

function setPlayerNameAndPlay() {
    const playerName = document.getElementById("nombre").value;
    sessionStorage.setItem("playerName", playerName);
   
    if (typeof playerName === "string" && playerName.length <= 7) {
        const jugarButton = document.getElementById("jugarButton");
        jugarButton.removeAttribute("disabled");


    } else {
        alert("El nombre no es válido");

        playerNameInput.value = "";

    }

}

document.addEventListener("DOMContentLoaded", function () {
    const playerName = sessionStorage.getItem("playerName");
    const saludo = document.getElementById("saludo");

    if (playerName) {
        saludo.textContent = "BIENVENIDO, DISFRUTA DEL JUEGO" + " " + playerName + "!";
    }
});


