const playerNameInput = document.getElementById("nombre");
const jugarButton = document.getElementById("jugarButton");
const nombreForm = document.getElementById("nombreForm");
const playerName = sessionStorage.getItem("playerName");
const saludo = document.getElementById("saludo");

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

//no lo toques que lo cagas...



const guardarColorSessionStorage = (key, data) => {
    sessionStorage.setItem(key, JSON.stringify(data));
};

const guardarColor = () => {
    const colorPicker1 = document.getElementById("colorPicker1").value;
    const colorPicker2 = document.getElementById("colorPicker2").value;
    const colorPicker3 = document.getElementById("colorPicker3").value;
    const colorPicker4 = document.getElementById("colorPicker4").value;
    

    if (
        colorPicker1 === "#000000" ||
        colorPicker2 === "#000000" ||
        colorPicker3 === "#000000" ||
        colorPicker4 === "#000000" 

    ) {
        // alert("Por favor, elige 4 colores.");
        return false;
    }



    colorPicker.push(colorPicker1, colorPicker2, colorPicker3, colorPicker4);
    guardarColorSessionStorage("colorPicker", colorPicker);
    return true;
};
guardarColor()


const getColorPicker = () => {
    document.querySelector(".btn1").addEventListener("click", guardarColor);
    document.querySelector(".btn2").addEventListener("click", guardarColor);
    document.querySelector(".btn3").addEventListener("click", guardarColor);
    document.querySelector(".btn4").addEventListener("click", guardarColor);


    const selectedColor = JSON.parse(sessionStorage.getItem("colorPicker"));
    if (selectedColor) {
        
        const inputColorPicker1 = document.getElementById("colorPicker1");
        inputColorPicker1.style.backgroundColor = selectedColor[0];
        const inputColorPicker2 = document.getElementById("colorPicker2");
        inputColorPicker2.style.backgroundColor = selectedColor[1];
        const inputColorPicker3 = document.getElementById("colorPicker3");
        inputColorPicker3.style.backgroundColor = selectedColor[2];
        const inputColorPicker4 = document.getElementById("colorPicker4");
        inputColorPicker4.style.backgroundColor = selectedColor[3];
    }
};

getColorPicker();









