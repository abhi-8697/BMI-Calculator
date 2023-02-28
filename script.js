let calculate = document.querySelector("button");
calculate.addEventListener("click", () => {
    
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    let bmi = (weight / (height * height)).toFixed(2);
    let status = "";

    let T = document.getElementById("result");
    T.style.display = "flex";
    
    if (bmi >= 16 && bmi < 18.5) {
        status = "According to your BMI results, You are Underweight and you need to put on some weight to have a good BMI and Healthy Body.";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        status = "According to your BMI results, You are Moderate and your BMI is absolutely perfect, Stay healthy and fit!";
    }
    else if (bmi >= 25 && bmi < 30) {
        status = "According to your BMI results, You are Overweight and you need to loose your weight as too much weight leads to many body problems and also breathing issues too.Start doing regular exercises and have a healthy diet.";
    }
    else if (bmi >= 30 && bmi < 35) {
        status = "According to your BMI results, You are Obeese! You need to focus on your diet and need to loose weight as early as possible as being Obeese is an open invitation to many diseases and healt issues.";
    }
    else if (bmi >= 35) {
        status = "Red Flag for you ! Your BMI exceeds the Obeese limit and your are Extremely Obbese. Your need to follow a strict diet and avoid eatiung junk food,processed food and start a healthy diet as early as possible";
    }
    else if (height == '' || weight == '') {
        status = "Please enter Correct Information ! "
        bmi = 0
    }
    let bmi_result = document.getElementById("bmi");
    bmi_result.innerHTML = "Body Mass Index : " + bmi;
    
    let desc = document.getElementById("desc");
    desc.innerHTML = status


})