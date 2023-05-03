var input = document.getElementById("input");
var result = document.getElementById("result");
var inputType = document.getElementById("inputType");
var resultType = document.getElementById("resultType");
var unitType = document.getElementById("unitType");

var inputTypeValue, resultTypeValue, unitTypeValue;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);
unitType.addEventListener("change", updateType);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;
unitTypeValue = unitType.value;

function  myResult(){
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if(unitTypeValue == "length"){
        if(inputTypeValue === "meter" && resultTypeValue === "kilometer"){
            result.value = Number(input.value) * 0.001;
        }else if(inputTypeValue === "meter" && resultTypeValue === "centimeter"){
            result.value = Number(input.value) * 100;
        }else if(inputTypeValue === "meter" && resultTypeValue === "meter"){
            result.value = input.value;
        }else if(inputTypeValue === "kilometer" && resultTypeValue === "kilometer"){
            result.value = input.value;
        }else if(inputTypeValue === "kilometer" && resultTypeValue === "centimeter"){
            result.value = Number(input.value) * 100000;
        }else if(inputTypeValue === "kilometer" && resultTypeValue === "meter"){
            result.value = Number(input.value) * 1000;
        }else if(inputTypeValue === "centimeter" && resultTypeValue === "kilometer"){
            result.value = Number(input.value) * 0.00001;
        }else if(inputTypeValue === "centimeter" && resultTypeValue === "centimeter"){
            result.value = input.value;
        }else if(inputTypeValue === "centimeter" && resultTypeValue === "meter"){
            result.value = Number(input.value) * 0.01;
        }
    }
    else if(unitTypeValue == "area"){
        if(inputTypeValue === "square kilometer" && resultTypeValue === "square kilometer"){
            result.value = input.value;
        }else if(inputTypeValue === "square kilometer" && resultTypeValue === "square meter"){
            result.value = Number(input.value) *  1,000,000;
        }else if(inputTypeValue === "square kilometer" && resultTypeValue === "square mile"){
            result.value = Number(input.value) * 0.3861;
        }else if(inputTypeValue === "square meter" && resultTypeValue === "square kilometer"){
            result.value = Number(input.value) * 1000;
        }else if(inputTypeValue === "square meter" && resultTypeValue === "square meter"){
            result.value = input.value;
        }else if(inputTypeValue === "square meter" && resultTypeValue === "square mile"){
            result.value = Number(input.value) * 1,000,000 *  0.3861;
        }else if(inputTypeValue === "square mile" && resultTypeValue === "square kilometer"){
            result.value = Number(input.value) / 1.61000,000;
        }else if(inputTypeValue === "square mile" && resultTypeValue === "square meter"){
            result.value = Number(input.value) / 1.61000,00000;
        }else if(inputTypeValue === "square mile" && resultTypeValue === "square mile"){
            result.value = Number(input.value) * 0.01;
        }
    }
    else if(unitTypeValue == "speed"){
        if(inputTypeValue === "mile per hour" && resultTypeValue === "meter per second"){
            result.value = Number(input.value) / 0.047;
        }else if(inputTypeValue === "mile per hour" && resultTypeValue === "foot per second"){
            result.value = (Number(input.value) * 5,280) / 3600;
        }else if(inputTypeValue === "mile per hour" && resultTypeValue === "mile per hour"){
            result.value = input.value;
        }else if(inputTypeValue === "foot per second" && resultTypeValue === "meter per second"){
            result.value = Number(input.value) / 0.3048;
        }else if(inputTypeValue === "foot per second" && resultTypeValue === "foot per second"){
            result.value = input.value;
        }else if(inputTypeValue === "foot per second" && resultTypeValue === "mile per hour"){
            result.value = Number(input.value) *  0.681818;
        }else if(inputTypeValue === "meter per second" && resultTypeValue === "meter per second"){
            result.value = input.value;
        }else if(inputTypeValue === "meter per second" && resultTypeValue === "foot per second"){
            result.value = Number(input.value) * 3.28084;
        }else if(inputTypeValue === "meter per second" && resultTypeValue === "mile per hour"){
            result.value = Number(input.value) * 0.01;
        }
    }
    else if(unitTypeValue == "temperature"){
        if(inputTypeValue === "degree celsius" && resultTypeValue === "degree celsius"){
            result.value = input.value;
        }else if(inputTypeValue === "degree celsius" && resultTypeValue === "fahrenheit"){
            result.value = (Number(input.value) * 9/5) / 32;
        }else if(inputTypeValue === "degree celsius" && resultTypeValue === "kelvin"){
            result.value = Number(input.value) + 273.15;
        }else if(inputTypeValue === "fahrenheit" && resultTypeValue === "degree celsius"){
            result.value = (Number(input.value) - 32) * 5/9;
        }else if(inputTypeValue === "fahrenheit" && resultTypeValue === "fahrenheit"){
            result.value = input.value;
        }else if(inputTypeValue === "fahrenheit" && resultTypeValue === "kelvin"){
            result.value = (Number(input.value) -32) * 5/9 + 273.15;
        }else if(inputTypeValue === "kelvin" && resultTypeValue === "degree celsius"){
            result.value = Number(input.value) + 273.15;
        }else if(inputTypeValue === "kelvin" && resultTypeValue === "fahrenheit"){
            result.value = (Number(input.value) - 273.15) * 9/5 + 32;
        }else if(inputTypeValue === "kelvin" && resultTypeValue === "kelvin"){
            result.value = input.value;
        }
    }
    else if(unitTypeValue == "time"){
        if(inputTypeValue === "nanosecond" && resultTypeValue === "nanosecond"){
            result.value = input.value;
        }else if(inputTypeValue === "nanosecond" && resultTypeValue === "microsecond"){
            result.value = Number(input.value) / 1000;
        }else if(inputTypeValue === "nanosecond" && resultTypeValue === "milisecond"){
            result.value = Number(input.value) * 1,000,000;
        }else if(inputTypeValue === "microsecond" && resultTypeValue === "nanosecond"){
            result.value =Number(input.value) / 1000;
        }else if(inputTypeValue === "microsecond" && resultTypeValue === "microsecond"){
            result.value = input.value;
        }else if(inputTypeValue === "microsecond" && resultTypeValue === "milisecond"){
            result.value = Number(input.value) / 1000;
        }else if(inputTypeValue === "milisecond" && resultTypeValue === "nanosecond"){
            result.value = Number(input.value) / 1000000;
        }else if(inputTypeValue === "milisecond" && resultTypeValue === "microsecond"){
            result.value = Number(input.value) * 1000;
        }else if(inputTypeValue === "milisecond" && resultTypeValue === "milisecond"){
            result.value = input.value;
        }
    }else{
        if(inputTypeValue === "liter" && resultTypeValue === "liter"){
            result.value = input.value;
        }else if(inputTypeValue === "liter" && resultTypeValue === "mililiter"){
            result.value = Number(input.value) * 1000;
        }else if(inputTypeValue === "liter" && resultTypeValue === "imperiorgallon"){
            result.value = Number(input.value) / 4.546091879;
        }else if(inputTypeValue === "mililiter" && resultTypeValue === "liter"){
            result.value = Number(input.value) / 1000;
        }else if(inputTypeValue === "mililiter" && resultTypeValue === "mililiter"){
            result.value = input.value;
        }else if(inputTypeValue === "mililiter" && resultTypeValue === "imperiorgallon"){
            result.value = Number(input.value) * 0.000264;
        }else if(inputTypeValue === "imperiorgallon" && resultTypeValue === "liter"){
            result.value = Number(input.value) * 4.54609;
        }else if(inputTypeValue === "imperiorgallon" && resultTypeValue === "mililiter"){
            result.value = Number(input.value) * 4546.09;
        }else if(inputTypeValue === "imperiorgallon" && resultTypeValue === "imperiorgallon"){
            result.value = input.value;
        }
    }
}

function updateType() {
  
  unitTypeValue = unitType.value;

  if (unitTypeValue == "length") {
    var optionArray = [
      "meter|Meter",
      "kilometer|Kilometer",
      "centimeter|Centimeter",
    ];
  } else if (unitTypeValue == "area") {
    var optionArray = [
      "square kilometer|Square kilometer",
      "square meter|Square meter",
      "square mile|Square mile",
    ];
  } else if (unitTypeValue == "speed") {
    var optionArray = [
      "mile per hour|Mile per hour",
      "foot per second|Foot per second",
      "meter per second|Meter per second",
    ];
  } else if (unitTypeValue == "temperature") {
    var optionArray = [
      "degree celsius|Degree Celsius",
      "fahrenheit|Fahrenheit",
      "kelvin|Kelvin",
    ];
  } else if (unitTypeValue == "time") {
    var optionArray = [
      "nanosecond|Nanosecond",
      "microsecond|milisecond",
      "milisecond|Milisecond",
    ];
  } else {
    var optionArray = [
      "liter|Liter",
      "mililiter|Mililiter",
      "imperiorgallon|Imperiorgallon",
    ];
  }

  inputType.options.length = 0;
  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var new_option = document.createElement("option");

    new_option.value = pair[0];
    new_option.innerHTML = pair[1];

    inputType.options.add(new_option);
  }

  resultType.options.length = 0;
  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var new_option = document.createElement("option");

    new_option.value = pair[0];
    new_option.innerHTML = pair[1];

    resultType.options.add(new_option);
  }
}
