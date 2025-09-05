AOS.init();
/* <================= Wallpaper Animation Start ===================> */
// Typing animation
const textArray = ["⚡ Fast", "🔋 Reliable", "🚙 Affordable"];
let index = 0;
let charIndex = 0;
let currentText = "";
let typingElement = document.getElementById("typing-text");

function type() {
    if (charIndex < textArray[index].length) {
        currentText += textArray[index].charAt(charIndex);
        typingElement.innerHTML = currentText;
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        currentText = currentText.substring(0, charIndex - 1);
        typingElement.innerHTML = currentText;
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(type, 200);
    }
}

document.addEventListener("DOMContentLoaded", type);
/* <================= Wallpaper Animation End ===================> */
