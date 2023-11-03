const inputWeight = 66
const inputHeight = 177

const calculateBMI = (weight, height) => {
    let result = (weight/(height*height))*10000
    return result.toFixed(1)
}

let bmi = calculateBMI(inputWeight, inputHeight)

const whichCategory = (number) => {
    let result = "Failed to calculate. Check your input!"
    if(bmi < 18.5) {
       return result = "Underweight"
    } 
    if (bmi >= 18.5 & bmi < 25){
        return result = "Normal"
    }
    if (bmi <= 25 & bmi < 40) {
        return result = "Overweight"
    }
    if (bmi >= 40){
        return result = "Obese"
    }
    return result
}

console.log(`Based on your weight(${inputWeight} kg) and height(${inputHeight} cm), your Body Index Measurement is ${bmi} and you're belong to ${whichCategory(bmi)} category`)