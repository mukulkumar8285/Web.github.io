let changeColor = document.querySelector('.radius');
const color_button = document.getElementById("button1");
color    = ['red', 'green', 'blue' , "black"];
    let colorIndex  = 0;

color_button.addEventListener('click', () => {
  changeColor.style.backgroundColor = color[colorIndex];      
  colorIndex = (colorIndex + 1) % color.length
});

let currentShape = 0;

function changeShape() {
    const shapeBox = document.getElementById('shapeBox');

    currentShape = (currentShape + 1) % 3;
    switch (currentShape) {
        case 0:
            shapeBox.className = 'rectangle';
            break;
        case 1:
            shapeBox.className = 'rounded';
            break;
        case 2:
            shapeBox.className = 'circle';
            break;
        default:
            break;
    }
}
let changeColors = document.querySelector('.rectangle');
const color_buttons = document.getElementById("button2");
colors    = ['orange', 'pink', 'lightgreen' , "white"];
    let colorIndexs  = 0;

color_buttons.addEventListener('click', () => {
  changeColors.style.backgroundColor = colors[colorIndexs];      
  colorIndexs = (colorIndexs + 1) % colors.length
});
