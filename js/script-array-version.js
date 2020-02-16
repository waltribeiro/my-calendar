// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbolsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];


function myButton() {
  var passwordLength = parseInt(prompt("How long should the password be?"));
  
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Password does not meet the length requirements");
  } else {
//     console.log(passwordLength);
//     var possibleCharacters = "";

    var uppercaseConfirm = confirm("Click OK to include uppercase characters.");
    if (uppercaseConfirm == true) {
        var catchUppercase = Math.floor(Math.random() * uppercaseArray.length);
    var finalUppercase = uppercaseArray[catchUppercase]
    console.log(finalUppercase)
    }

    var lowercaseConfirm = confirm("Click OK to include lowercase characters.");
    if (lowercaseConfirm == true) {
        var catchLowercase = Math.floor(Math.random() * lowercaseArray.length);
        var finalLowercase = lowercaseArray[catchLowercase]
        console.log(finalLowercase)
    }

    var numbersConfirm = confirm("Click OK to include numbers.");
    if (numbersConfirm == true) {
        var catchNumbers = Math.floor(Math.random() * numbersArray.length);
    var finalNumbers = numbersArray[catchNumbers]
    console.log(finalNumbers)
    }

    var symbolsConfirm = confirm("Click OK to include symbols.");
    if (symbolsConfirm == true) {
        var catchSymbols = Math.floor(Math.random() * symbolsArray.length);
        var finalSymbols = symbolsArray[catchSymbols]
        console.log(finalSymbols)
    }


    var password = "";

//     for (var i = 0; i < passwordLength; i++) {
//       password += finalUppercase[Math.floor(Math.random() * Math.floor(Math.random()))];
//     }

        for (var i = 0; i < passwordLength; i++) {
            password += uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]
            password += lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]
            password += numbersArray[Math.floor(Math.random() * numbersArray.length)]
            password += symbolsArray[Math.floor(Math.random() * symbolsArray.length)]

        } 

    }


passwordText.value = password;
  }

generateBtn.addEventListener("click", myButton)



// finalUppercase[Math.floor(Math.random() * Math.floor(Math.random()))];
// finalLowercase[Math.floor(Math.random() * Math.floor(Math.random()))];
// finalNumbers[Math.floor(Math.random() * Math.floor(Math.random()))];
// finalSymbols[Math.floor(Math.random() * Math.floor(Math.random()))];
//     }
// password += 









//     var password = "";
//     for (var i = 0; i < passwordLength; i++) {
//       password += finalUppercase[Math.floor(Math.random() * Math.floor(Math.random()))];
//     }
// passwordText.value = password;
// console.log(password);
//   }
// }

// generateBtn.addEventListener("click", myButton)
