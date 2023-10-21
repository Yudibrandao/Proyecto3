const colorPicker = document.getElementById('colorPicker');
const selectedColor = document.getElementById('selectedColor');
const playGame = docume


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
    
    const playerName = document.getElementById("playerDisplayName").textContent;
 
    const result = document.getElementById("result");
    result.textContent = "Resultado del juego aquí";
}