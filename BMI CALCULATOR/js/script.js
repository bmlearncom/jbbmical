document.addEventListener('DOMContentLoaded', function () {
    const weightRange = document.getElementById('weightRange');
    const heightRange = document.getElementById('heightRange');
    const weightValue = document.getElementById('weightValue');
    const heightValue = document.getElementById('heightValue');
    
    function updateWeight() {
        weightValue.textContent = weightRange.value;
    }

    function updateHeight() {
        heightValue.textContent = heightRange.value;
    }

    // Initialize display
    updateWeight();
    updateHeight();

    // Update display on input
    weightRange.addEventListener('input', updateWeight);
    heightRange.addEventListener('input', updateHeight);
});

function Myresult() {
    let w = document.getElementById('weightRange').value;
    let h = document.getElementById('heightRange').value;

    let bmi = (w / Math.pow(h / 100, 2)).toFixed(2);

    document.getElementById("results").textContent = bmi;

    let status = "";
    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = "Healthy weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        status = "Overweight";
    } else {
        status = "Obese";
    }

    document.getElementById("bmiStatus").textContent = status;
}
