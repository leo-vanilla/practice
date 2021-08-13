const HEX_COLOR = document.getElementById('hex-color');
const GENERATE_BUTTON = document.getElementById('generate-hex-number');
let BODY = document.body;

function generateRandomHexNumber() {
  const hexNumberList = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
  ];

  let randomHexNumber = "#";

  for (var i = 0; i < 6; i++) {
	const randomIndex = Math.floor(Math.random() * hexNumberList.length);
	randomHexNumber += hexNumberList[randomIndex];
  }
	return randomHexNumber;
};

function generateButtonHandler() {
	HEX_COLOR.innerText = "Hex Color: " + generateRandomHexNumber();
	BODY.style.backgroundColor = generateRandomHexNumber();
}

function generateRandomHexNumberButton() {
	GENERATE_BUTTON.addEventListener("click", generateButtonHandler);
};

function init() {
generateRandomHexNumberButton();
};

init();