const colorPicker = document.getElementById('colorPicker');
const selectedColor = document.getElementById('selectedColor');


colorPicker.addEventListener('input', function () {
    const color = colorPicker.value;
    selectedColor.textContent = color;
    selectedColor.style.backgroundColor = color;
});

const setPlayerName=(playerNumber)=> {
    const nameInput = document.getElementById(`player${playerNumber}Name`);
    const displayName = document.getElementById(`player${playerNumber}DisplayName`);
    displayName.textContent = nameInput.value;
}

const playGame=()=> {
    // Lógica del juego (piedra, papel, tijeras) puede ir aquí
    const player1Name = document.getElementById("player1DisplayName").textContent;
    const player2Name = document.getElementById("player2DisplayName").textContent;

    // Muestra el resultado del juego
    const result = document.getElementById("result");
    result.textContent = "Resultado del juego aquí";
}