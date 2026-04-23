const textArea = document.getElementById("textArea");
const preview = document.getElementById("preview");

const fontFamily = document.getElementById("fontFamily");
const fontSize = document.getElementById("fontSize");
const colorPicker = document.getElementById("colorPicker");

const boldBtn = document.getElementById("boldBtn");
const italicBtn = document.getElementById("italicBtn");
const resetBtn = document.getElementById("resetBtn");

// Update preview text
textArea.addEventListener("input", function () {
    preview.textContent = textArea.value;
});

// Change font family
fontFamily.addEventListener("change", function () {
    preview.style.fontFamily = fontFamily.value;
});

// Change font size
fontSize.addEventListener("input", function () {
    preview.style.fontSize = fontSize.value + "px";
});

// Change color
colorPicker.addEventListener("input", function () {
    preview.style.color = colorPicker.value;
});

// Bold toggle
boldBtn.addEventListener("click", function () {
    if (preview.style.fontWeight === "bold") {
        preview.style.fontWeight = "normal";
    } else {
        preview.style.fontWeight = "bold";
    }
});

// Italic toggle
italicBtn.addEventListener("click", function () {
    if (preview.style.fontStyle === "italic") {
        preview.style.fontStyle = "normal";
    } else {
        preview.style.fontStyle = "italic";
    }
});

// Reset all styles
resetBtn.addEventListener("click", function () {
    preview.style = "";
    textArea.value = "";
    preview.textContent = "";
    fontSize.value = "";
    fontFamily.value = "Arial";
    colorPicker.value = "#000000";
});