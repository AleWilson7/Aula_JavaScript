/*
var frutas = [{nome:"Laranja", cor:"Amarela"}, {nome:"Limão", cor:"Verde"}]
console.log(frutas);
alert(frutas[1].nome);
*/
//var fruta = {nome:"Laranja", cor:"Amarela"}
//console.log(fruta.cor);
//alert(fruta.nome);

//var nome = "Ale Wilson";
//var idade = 32;
//var idade2 = 7;

//alert (idade - idade2 + " anos ");
//alert(nome + " tem: " + idade + " anos ");

//var lista = ["Maçã", "Pêra", "Uva", "Melão"];
//console.log(lista);
//lista.push("Limão");
//lista.pop();
//console.log(lista.reverse());
//var idade = prompt("Qual seu ano de nascimento com 4 digitos");
//alert(2021 - idade);
/*if (idade >= 18){
    alert("Maior de idade!");
}
else { alert("Menor de idade! Keep Out");};
*/
/*
//var Tab = 9;
var Tab = prompt("Digite a tabuada desejada");
var count = 0;
while (count <= 10) {
    console.log(Tab + " x " +  count + " = ", Tab * count);
    count++;
   // count = count + 1;
}*/
//var d = new Date();
//alert(d.getFullYear());
//alert(d.getDay());
//alert(d.getMonth() + 1);
//alert(d.getHours());

function clicou(){
document.getElementById("agradecimento").innerHTML= "Obrigado por clicar";
}
function Redirecionar(){
    window.open("https://digitalinnovation.one/");
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("Página carregada");
}
function funcaochange(elemento){
    console.log(elemento.value)
}