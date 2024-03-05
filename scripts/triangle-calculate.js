/**
 * objective: get base, height of a triangle. Calculate the area by using the provided formula. and then display the area.
 * step -1: get base value
 * step -2: added id in the base input field
 * step -3: use get ElementById to access the input field
 * step -4: get value from the input field (value is string now)
 * step -5: covert the value to a number. use parseFloat()
 */

function calculateTriangleArea() {
    // get triangle base value 
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // console.log(typeof base);

    // get triangle height value 
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    // console.log(height);

    // calculate triangle area
    const area = 0.5 * base * height;
    // console.log(area);

    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}