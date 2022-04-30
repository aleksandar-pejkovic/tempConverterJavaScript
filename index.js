
document.getElementById("submitButton").onclick = function(){

    let temp = document.getElementById("textBox").value
    temp = Number(temp)

    if(document.getElementById("cButton").checked){
        document.getElementById("tempLabel").innerHTML = toCelsius(temp)
    }
    else if(document.getElementById("fButton").checked){
        document.getElementById("tempLabel").innerHTML = toFahrenheit(temp)
    }
    else {
        document.getElementById("tempLabel").innerHTML = "Please select a unit"
    }

}

function toCelsius(temp){
    return Math.round((temp - 32) * (5/9))
}

function toFahrenheit(temp){
    return Math.round(temp * 9 / 5 + 32)
}