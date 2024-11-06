
const button = document.querySelector("button");
const caixaResultado = document.getElementById("resultado");


button.addEventListener("click", () => {
const valor1 = Number (document.getElementById("valor1").value);
const valor2 = Number (document.getElementById("valor2").value);
const operacao = document.getElementById("operacao").value;



switch ( operacao) {
    case "+": 
    resultado = valor1 + valor2;
    break;
    
    case "-": 
    resultado = valor1 - valor2;
    break;

    default:
    resultado = valor1 * valor2;

}
    



caixaResultado.innerText = resultado


});


   