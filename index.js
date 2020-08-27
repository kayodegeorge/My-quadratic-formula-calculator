//  program to solve quadratic equation
// let root1, root2;




// // take input from the user
// let a = document.querySelector('a'); //prompt("Enter the first number: ");
// let b = document.querySelector('b'); //prompt("Enter the second number: ");
// let c = document.querySelector('c'); //prompt("Enter the third number: ");
// let btn = document.querySelector('btn');  
// // ax^2 + bx + c = 0 
// let discriminant = b * b - 4 * a * c;


// btn.addEventListener('click', function(){

// })


// // condition for real and different roots
// if (discriminant > 0) {
//     root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

//     // result
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// // condition for real and equal roots
// else if (discriminant == 0) {
//     root1 = root2 = -b / (2 * a);

//     // result
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// // if roots are not real
// else {
//     let realPart = (-b / (2 * a)).toFixed(2);
//     let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

//     // result
//     console.log(
//     `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
//   );
// }


// let a = document.querySelector('numa');
// let b = document.querySelector('numb');
// let c = document.querySelector('numc');
// let signone = document.querySelector('signone');
// let signtwo = document.querySelector('signtwo');
// let signthree = document.querySelector('signthree');

// function getValues() {
//     if (signone == '+'){
        
//     }
// }

let a, b, c, xone, xtwo;

function getValues() {
  if (document.getElementById('signone').value == "+") {
    a = document.getElementById('numa').value;
  } else {
    a = document.getElementById('numa').value * (-1);
  }
  if (document.getElementById('signtwo').value == "+") {
    b = document.getElementById('numb').value;
  } else {
    b = document.getElementById('numb').value * (-1);
  }
  if (document.getElementById('signthree').value == "+") {
    c = document.getElementById('numc').value;
  } else {
    c = document.getElementById('numc').value * (-1);
  }
}

function getSolution() {
  xone = ((-1 * b) + Math.sqrt((b * b) - 4 * a * c)) / (2 * a);
  xtwo = ((-1 * b) - Math.sqrt((b * b) - 4 * a * c)) / (2 * a);
}

function showSolution() {
  document.getElementById('showone').innerHTML = "x1 = " + xone;
  document.getElementById('showtwo').innerHTML = "x2 = " + xtwo;
}

// FIRST

// let a = document.querySelector('numa');
// let b = document.querySelector('numb');
// let c = document.querySelector('numc');
// let signone = document.querySelector('signone');
// let signtwo = document.querySelector('signtwo');
// let signthree = document.querySelector('signthree');
// let btn = document.querySelector('btn');


// btn.addEventListener('click', function getValues(){
//     if(signone.value == "+"){
//         a = a.value;
//     } else{
//         a = a.value * (-1);
//     }
//     if(signtwo.value == "+"){
//         b = b.value;
//     } else{
//         b = b.value * (-1);
//     }
//     if(signthree.value == "+"){
//         c = c.value;
//     } else{
//         c = c.value * (-1);
//     }

//     function getSolution() {
//         xone = ((-1 * b) + Math.sqrt((b * b) - 4 * a * c)) / (2 * a);
//         xtwo = ((-1 * b) - Math.sqrt((b * b) - 4 * a * c)) / (2 * a);
//       }

//       function showSolution() {
//         document.querySelector('showone').innerHTML = "x1 = " + xone;
//         document.querySelector('showtwo').innerHTML = "x2 = " + xtwo;
//       }
    
// })



// SECOND

// function calc(){
//     let a = parseInt(document.querySelector("numa").value);
//     let b = parseInt(document.querySelector("numb").value);
//     let c = parseInt(document.querySelector("numc").value);
// }




  
