function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const unit = document.getElementById("unitSelector").value;
    let resultUnit;
    let resultValue;

    if (unit === "celsius") {
        resultValue = (inputTemperature * 9/5) + 32;
        resultUnit = "Fahrenheit";
    } else {
        resultValue = (inputTemperature - 32) * 5/9;
        resultUnit = "Celsius";
    }

    document.getElementById("result").innerHTML = `Result: <span class="unit">${resultValue.toFixed(2)}</span> <span id="convertedUnit">${resultUnit}</span>`;
}
