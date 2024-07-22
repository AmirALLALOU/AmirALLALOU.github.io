let i = 0;
let text1 = "COUCOU MA SILYOUUU!";
let text2 = "Aujourd'hui c'est ton jour.";
let speed = 100;


function typeWriter(text, para) {
    if (i < text.length) {
        document.getElementById(para).innerHTML += text.charAt(i);
        i++;
        speed = Math.random() * 50 + 100;
    } else {
        ok += 1;
        i = 0; // Reset i for the next text
        clearInterval(typeInterval); // Stop the current interval
        if (ok < 2) {
            typeInterval = setInterval(typeNextText, 100);
        }
    }
}

function typeNextText() {
    if (ok == 0) {
        typeWriter(text1, "txt1");
    } else if (ok == 1) {
        typeWriter(text2, "txt2");
    } else {
        clearInterval(typeInterval); // Ensure interval is cleared if ok is greater than 2
    }
}

var typeInterval = setInterval(typeNextText, 100);
