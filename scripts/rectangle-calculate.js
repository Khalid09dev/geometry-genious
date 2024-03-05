function calculateRectangleArea() {
    const rectangleWidthInput = document.getElementById('rectangle-width')
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);

    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText)

    const area = width * length;

    const rectangleAreaSpan = document.getElementById('rectangle-area')
    rectangleAreaSpan.innerText = area;
}