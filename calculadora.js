var somar = require("./modulos/somar");
var media = require("./modulos/media");
var multiplicar = require("./modulos/multiplicar");
var divisao = require("./modulos/divisao");
var mensagem = require("./modulos/mensagem");

console.log("A soma dos valores X e Y é de:" + somar(20,90));
console.log("A média dos valores X e Y e de: " + media(20,90));
console.log("A multiplicação de X por Y é de: " + multiplicar(20,90));
console.log("A divisão de X por Y é de: " + divisao(20,90));
console.log(mensagem("Gustavo"));