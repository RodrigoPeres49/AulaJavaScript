function obterValor(valor){
    const numero = document.getElementById('valor');
    numero.value = numero.value + valor;
}

function apagarValor(){
    const numero = document.getElementById('valor');
    numero.value = numero.value.slice(0,-1);

}

function limpar(){
    const numero = document.getElementById('valor');
    numero.value = ' '; 
    numero.value = numero.value.slice(0,-1);
}

function calcular() {
    const input = document.getElementById('valor');
    let expressao = input.value;
    expressao = expressao.replace(/x/g, '*'); // Substitui 'x' por '*'
    try {
        const resultado = eval(expressao);
        input.value = resultado;
    } catch (e) {
        input.value = "Erro";
    }
}