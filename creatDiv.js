function createDiv(name,color, entry) {
    let element = document.createElement("div");
    element.classList.add(name);
    element.style.background = color;
    entry.appendChild(element);
}

module.exports = createDiv;