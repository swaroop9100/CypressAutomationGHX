//let a=10;
//let b=20;
let a=prompt("Enter First Number:")
let b=prompt("Enter Second Number:")

//create a temporary variable
let temp;

temp=a
a=b;
b=temp;

document.write(a,'<br>')
document.write(b)