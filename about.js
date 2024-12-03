function restrictInput(event) {
  // Get the current value of the text field
  let value = event.target.value;

  // Restrict input to valid characters (numbers, operators, parentheses, ×, ÷, and spaces)
  const validChars = /^[0-9+\-*/×÷().\s]*$/;

  if (!validChars.test(value)) {
    // If invalid, remove the last character
    event.target.value = value.slice(0, -1);
  }

  // if (
  //   /[+\-*/×÷]/.test(value[value.length - 1]) &&
  //   /[+\-*/×÷]/.test(value[value.length - 2])
  // ) {
  //   // Check if the last character is an operator
  //   if (value.slice(-2) != "×-" && value.slice(-2) != "÷-") {
  //     event.target.value = value.slice(0, -2) + value.slice(-1);
  //   }
  //   // Append the operator
  //   // } else {
  //   //     // Handle cases like consecutive operators or invalid operator placement
  //   //     if (value[value.length - 2] === "-" && /[+\-*/×÷.]/.test(value[value.length - 3])) {
  //   //       document.getElementById("text-field").value = value.slice(0, -2) ; // Replace the previous operator with the new one
  //   //     } else {
  //   //       document.getElementById("text-field").value = value.slice(0, -1); // Remove the last invalid operator
  //   //     }
  //   // }
  // }
}
function validator(newText) {
  value = document.getElementById("text-field").value;

  // if (/[+\-*/×÷]/.test(value[value.length - 1])) {
  //   // Check if the last character is an operator
  //   if (/[+\-*/×÷]/.test(value[value.length - 2])) {
  //     if (value.slice(-2) != "×-" && value.slice(-2) != "÷-") {
  //       document.getElementById("text-field").value =
  //         value.slice(0, -2) + value.slice(-1);
  //     }
  //     // Append the operator
  //     // } else {
  //     //     // Handle cases like consecutive operators or invalid operator placement
  //     //     if (value[value.length - 2] === "-" && /[+\-*/×÷.]/.test(value[value.length - 3])) {
  //     //       document.getElementById("text-field").value = value.slice(0, -2) ; // Replace the previous operator with the new one
  //     //     } else {
  //     //       document.getElementById("text-field").value = value.slice(0, -1); // Remove the last invalid operator
  //     //     }
  //     // }
  //   }
  // }
  // console.log(newText);
  // if (/[+\-*/×÷]/.test(newText)) {
  //   if (/[+\-*/×÷]/.test(value[value.length - 2])) {
  //     document.getElementById("text-field").value =
  //       value.slice(0, -2) + value.slice(-1);
  //   }
  // }
  if(/[+\-*/×÷]/.test(value[value.length - 3])  ){
      
     if (
    /[+\-*/×÷]/.test(value[value.length - 1]) &&
    /[+\-*/×÷]/.test(value[value.length - 2])
  ) {  value = value.slice(0, -3) + value.slice(-2);
  }
  }
  if (
    /[+\-*/×÷]/.test(value[value.length - 1]) &&
    /[+\-*/×÷]/.test(value[value.length - 2])
  ) {
    
    console.log("i had reached");
    // Check if the last character is an operator
    if (value.slice(-2) != "×-" && value.slice(-2) != "÷-") {
          console.log("i had reached too");
          value = value.slice(0, -2) + value.slice(-1);
          //console.log(value);
      //document.getElementById("text-field2").value = value.slice(0, -2) + value.slice(-1);
    }
    
    // Append the operator
    // } else {
    //     // Handle cases like consecutive operators or invalid operator placement
    //     if (value[value.length - 2] === "-" && /[+\-*/×÷.]/.test(value[value.length - 3])) {
    //       document.getElementById("text-field").value = value.slice(0, -2) ; // Replace the previous operator with the new one
    //     } else {
    //       document.getElementById("text-field").value = value.slice(0, -1); // Remove the last invalid operator
    //     }
    // }
  }
  if (value[value.length - 1] === ".") {
    // Handle decimal point
    if (value === ".") {
      document.getElementById("text-field").value = "0" + value;
    } else if (/[+\-*/×÷]/.test(value[value.length - 2])) {
      document.getElementById("text-field").value =
        value.slice(0, -1) + "0" + ".";
    } else if (
      value
        .slice(0, -1)
        .split(/[+\-*/×÷]/)
        .pop()
        .includes(".")
    ) {
      // If the last number already contains a decimal, don't add another
      console.log(value);
      document.getElementById("text-field").value = value.slice(0, -1);
    } else {
      document.getElementById("text-field").value = value;
    }
  } else {
    // Otherwise just append the expression
    document.getElementById("text-field").value = value;
  }
}
function calculateExpression(expression) {
  if (expression === "") {
    return "";
  }
  expression = expression.replace(/×/g, "*").replace(/÷/g, "/");
  try {
    const result = eval(expression);
    return result;
  } catch (error) {
    console.log("Error evaluating expression:", error);
    return "Error";
  }
}
function validator1(newText){
  value = document.getElementById("text-field").value;

  if(/[+\-*/×÷]/.test(newText)){
    if(/[+\-*/×÷]/.test(value[value.length - 1] )){
      if(/[+\-*/×÷]/.test(value[value.length - 2] )){
        value = value.slice(0, -2)+ newText;
      }
      else if(/[×÷*/]$/.test(value[value.length -1])){
          if(newText == '-'){
            value = value + newText;
          }
          else{
            value = value.slice(0, -1)+ newText;
          }
        }
       else
      {
        value = value.slice(0, -1) + newText;
      } 
    }
    else
      {
        value = value + newText;
      }
  }
  else if(newText == '.')
    {
      if(value == ''){
        value = '0' + '.' ;
      }
      else if(/[+\-*/×÷]/.test(value[value.length - 1] )){
        value = value + '0.';
      }
      else if(
        value
        .split(/[+\-*/×÷]/)
        .pop()
        .includes(".")
      ){
        value = value;
      }
      else {
        value = value + '.';
      }
    }
    else {
      console.log("num");
      value = value + newText;
    }
    document.getElementById("text-field").value = value;
}
function changeText(newText) {
  //document.getElementById("text-field").value += newText;
  validator1(newText);
  document.getElementById("text-field").scrollLeft =
    document.getElementById("text-field").scrollWidth;
  document.getElementById("text-field2").value = calculateExpression(
    document.getElementById("text-field").value.replace(/[+\-*/×÷]+$/, '')
  );
  document.querySelector('#text-field2').style.fontSize = '20px';
  document.querySelector('#text-field').style.fontSize = '40px';


}
function clearText() {
  document.getElementById("text-field").value = "";
  document.getElementById("text-field2").value = calculateExpression(
    document.getElementById("text-field").value
  );
  document.querySelector('#text-field2').style.fontSize = '20px';
  document.querySelector('#text-field').style.fontSize = '40px';

}
function clearLastInput() {
  document.getElementById("text-field").value = document
    .getElementById("text-field")
    .value.slice(0, -1);
    document.querySelector('#text-field2').style.fontSize = '20px';
    document.querySelector('#text-field').style.fontSize = '40px';

  document.getElementById("text-field2").value = calculateExpression(
    document.getElementById("text-field").value.replace(/[+\-*/×÷]+$/, '')
  );
}
function EqualPressed() {
  
  document.querySelector('#text-field2').style.fontSize = '40px';
  document.querySelector('#text-field').style.fontSize = '20px';

  document.getElementById("text-field2").value = calculateExpression(
    document.getElementById("text-field").value.replace(/[+\-*/×÷]+$/, '')
  );
}
// Select the buttons and the body element
const lightModeButton = document.getElementById('light-mode');
const darkModeButton = document.getElementById('dark-mode');
const cloudModeButton = document.getElementById('cloud-mode');
const body = document.body;

// Add event listeners to the buttons
lightModeButton.addEventListener('click', () => {
  body.classList.remove('dark-mode'); // Remove dark mode class
  body.classList.remove('cloud-mode');
});

cloudModeButton.addEventListener('click', () => {
  body.classList.add('cloud-mode');
  body.classList.remove('dark-mode'); // Add dark mode class
});

darkModeButton.addEventListener('click', () => {
  body.classList.add('dark-mode'); // Add dark mode class
});
