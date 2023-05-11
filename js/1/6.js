let a = prompt("Introduce el valor de a: ");
let b = prompt("Introduce el valor de b: ");
let c = prompt("Introduce el valor de c: ");

let discriminante = b*b - 4*a*c;
let x1 = (-b + Math.sqrt(discriminante)) / (2*a);
let x2 = (-b - Math.sqrt(discriminante)) / (2*a);

document.write(`Las soluciones de la ecuación ${a}x^2 + ${b}x + ${c} = 0 son x1 = ${x1} y x2 = ${x2}.`);
