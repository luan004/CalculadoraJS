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



//TABUADA

const tbotoes = document.querySelectorAll('.tbotao');
var tvisor = document.getElementById('tvisor');

tbotoes.forEach(function (botao) {
    const bot = botao.innerHTML;
    botao.addEventListener('click', function () {
        if (bot == 'Enter') {
            if (tvisor.innerHTML != '') {
                var val = parseFloat(tvisor.innerHTML);

                tvisor.innerHTML =
                `
                1*${val} = ${val*1}<br>
                2*${val} = ${val * 2}<br>
                3*${val} = ${val * 3}<br>
                4*${val} = ${val * 4}<br>
                5*${val} = ${val * 5}<br>
                6*${val} = ${val * 6}<br>
                7*${val} = ${val * 7}<br>
                8*${val} = ${val * 8}<br>
                9*${val} = ${val * 9}<br>
                10*${val} = ${val * 10}
                `;
            }
        }
        else {
            tvisor.innerHTML = tvisor.innerHTML + bot;
            console.log(bot);
        }
    });
});