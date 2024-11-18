const display = document.querySelector(".display");


function handleDigitClick(event) {
    const clickedButton = event.target;
    const digit = clickedButton.textContent;

    
    if (display.textContent === "0") {
        display.textContent = digit;
    } else if (display.textContent.length < 9) {
        
        display.textContent += digit;
    }
}


const buttons = document.querySelectorAll(".btn-num");
buttons.forEach(button => {
    button.addEventListener("click", handleDigitClick);
});