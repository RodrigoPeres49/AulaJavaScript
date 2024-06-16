

function obterValor(valor){
    const numero = document.getElementById('valor');
    numero.value = numero.value + valor;

}

function calcular(valor){
    valor = getElementById('valor');
    const valor1 = '';
    const valor2 = '';
    const operador = '';
    for(v in valor){
        if(valor[v] == '1'){
            valor1 =+ '1';
        }
        if(valor[v] == '2'){
            valor1 =+ '2';
        }
        if(valor[v] == '3'){
            valor1 =+ '3';
        }
        if(valor[v] == '4'){
            valor1 =+ '4';
        }
        if(valor[v] == '5'){
            valor1 =+ '5';
        }
        if(valor[v] == '6'){
            valor1 =+ '6';
        }
        if(valor[v] == '7'){
            valor1 =+ '7';
        }
        if(valor[v] == '8'){
            valor1 =+ '8';
        }
        if(valor[v] == '9'){
            valor1 =+ '9';
        }
        if(valor[v] == '0'){
            valor1 =+ '0';
        }
        if(valor[v] == '+' || valor[v] == '-' || valor[v] == '*' || valor[v] == '/' ){
            valor1 = valor in Range(0,v)
            if (valor[v] == '+'){
                operador = '+'
            }    
            if (valor[v] == '-'){
                operador = '-'
            }  
            if (valor[v] == '*'){
                operador = '*'
            }  
            if (valor[v] == '/'){
                operador = '/'
            } 
        }
        if(valor[v] == '1'){
            valor2 =+ '1';
        }
        if(valor[v] == '2'){
            valor2 =+ '2';
        }
        if(valor[v] == '3'){
            valor2 =+ '3';
        }
        if(valor[v] == '4'){
            valor2 =+ '4';
        }
        if(valor[v] == '5'){
            valor2 =+ '5';
        }
        if(valor[v] == '6'){
            valor2 =+ '6';
        }
        if(valor[v] == '7'){
            valor2 =+ '7';
        }
        if(valor[v] == '8'){
            valor2 =+ '8';
        }
        if(valor[v] == '9'){
            valor2 =+ '9';
        }
        if(valor[v] == '0'){
            valor2 =+ '0';
        }
    }
    if (operador == '+'){
        valor = parseFloat(valor1) + parseFloat(valor2)
    }
    if (operador == '-'){
        valor = parseFloat(valor1) - parseFloat(valor2)
    }
    if (operador == '*'){
        valor = parseFloat(valor1) * parseFloat(valor2)
    }
    if (operador == '/'){
        valor = parseFloat(valor1) / parseFloat(valor2)
    }
}
