// prompt the usser to enter their full name. Generat a username for them to base on the input. start username with @ followed by their name and ending with fullname length. 
// eg; user name ="zuniverse" , username should be"@zunivers09
let fullName= prompt("enter your fullname without spaces");
let username = "@" + fullName + fullName.length;
console.log(username);