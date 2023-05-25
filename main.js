const botoes = document.querySelectorAll('.botao');
var visor = document.getElementById('visor');
var cima = document.getElementById('cima');

var v1;
var v2;

botoes.forEach(function(botao) {
    const bot = botao.innerHTML;
    botao.addEventListener('click', function(){
        if (bot == 'Enter') {
            if (v1 != undefined && visor.innerHTML != '') {
                v2 = parseInt(visor.innerHTML);
                cima.innerHTML = calcular(cima.innerHTML, v1, v2);
                v1 = undefined;
                v2 = undefined;
                visor.innerHTML = '';
            }
            
        } else if (bot == '/' || bot == '*' || bot == '-' || bot == '+') {
            if (v1 == undefined) {
                cima.innerHTML = visor.innerHTML + bot;
                v1 = parseInt(visor.innerHTML);
                visor.innerHTML = '';
            }
        }
        else {
            visor.innerHTML = visor.innerHTML + bot;
            console.log(bot);
        }
    });
});

function calcular(visor, v1, v2) {
    var result;

    switch (true) {
        case visor.includes('+'):
            result = v1 + '+' + v2 + '=' + (v1 + v2);
          break;
        case visor.includes('-'):
            result = v1 + '-' + v2 + '=' + (v1 - v2);
          break;
        case visor.includes('/'):
            result = v1 + '/' + v2 + '=' + (v1 / v2);
          break;
        case visor.includes('*'):
            result = v1 + '*' + v2 + '=' + (v1 * v2);;
          break;
    }

    return result;
}