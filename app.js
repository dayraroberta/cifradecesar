var toCipher = prompt("Digite a palavra ou frase a ser criptografada");
 var cypheredMessage = '';
 var decypheredMessage = '';

function verify(){
 for(var i = 0; i < toCipher.length;){
   if(toCipher === '' || toCipher === ' '){
     alert('Você deve informar apenas frases ou palavaras sem acento.');
     toCipher = prompt("Digite a palavra ou frase a ser criptografada");
   } else if(toCipher.charCodeAt(i) >= 65 && toCipher.charCodeAt(i)<= 90 || toCipher.charCodeAt(i) == 32){
     i++;
   } else if(toCipher.charCodeAt(i) >= 97 && toCipher.charCodeAt(i) <= 122 || toCipher.charCodeAt(i) == 32){
     i++;
   } else{
     alert('Você deve informar apenas frases ou palavras sem acento.');
     toCipher = prompt("Digite a palavra ou frase a ser criptografada");
   }
}
}
function cipher(){
for(i = 0; i < toCipher.length; i++){
 if(toCipher.charCodeAt(i) >= 65 && toCipher.charCodeAt(i) < 90){
   cypheredMessage = cypheredMessage + String.fromCharCode((toCipher.charCodeAt(i) - 65 + 7) % 26 + 65);
 } else if(toCipher.charCodeAt(i) >= 97 && toCipher.charCodeAt(i) <= 122){
   cypheredMessage = cypheredMessage + String.fromCharCode((toCipher.charCodeAt(i) - 97 + 7) % 26 + 97);
 } else if(toCipher.charCodeAt(i) === 32){
   cypheredMessage = cypheredMessage + " ";
 } else{
   alert("Você pode informar apenas espaços e letras sem acento");
 }
}
alert("A palavra ou frase criptografada é: " + cypheredMessage);
}

function decipher(){
for(i = 0; i < cypheredMessage.length; i++){
 decypheredMessage = decypheredMessage + String.fromCharCode(cypheredMessage.charCodeAt(i) - 7);
}
alert("A palavra ou frase descriptografada é: " + decypheredMessage);
}

verify();
cipher();
decipher();
