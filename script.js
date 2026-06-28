var botao_i = document.getElementById("st")
var botao_e = document.getElementById("e")
var res = document.getElementById("res")
var menu_b = document.getElementById("b")
var parag = document.getElementById('config')

var inputh = document.createElement('input')
var inputm = document.createElement('input')
var inputs = document.createElement('input')

var button = document.createElement('input')

inputh.type = 'number'
inputh.id = 'ih'

inputm.type = 'number'
inputm.id = 'im'

inputs.type = 'number'
inputs.id = 'is'

button.value = 'Confirmar'
button.type = 'button'
button.onclick = verificar
button.id = 'bc'
// tudo de cima /\ esta criando e citando elementos do site
var h = 0
var min = 0
var sec = 0
// criando a variavel horas, minutos e segundos
var check = true
var edit_finish = true
var timer
// cria passes e o contados mas n define ele
function init(){ // o init() server para quando comecar a axecucao da web, n comecar o contador
    clearInterval(timer)
}

function start() { // comeca e para o contador
    if (res.innerText == '00:00:00'  && check == true) { 
        // condicao se o timer esta a 0 e um passe esta True alertar mensagem para o usuario
        alert("defina um tempo")
        return
    }else if (check) {
        //condicao se o passe estiver true comecar a rodar o cronometro e muda o estilo
        timer = setInterval(contar, 1000)
        botao_i.value = "Stop"
        botao_i.style.color = '#ff0000'
        check = false
    }else {
        // condicao se a segundo condicao estiver falsa para o cronometro e reseta o estilo
        clearInterval(timer)
        botao_i.value = 'Start'
        botao_i.style.color = 'rgb(0, 0, 255)'
        check = true
    }
}
function edit(){
    if (edit_finish == false) {
        //condicao se o passe estiver false aletar mensagem
        alert("termine de editar!")
        return
    }else { // se nao
        // adiciona filho de texto e cixa de textos a pagina
        parag.appendChild(document.createTextNode('Hours: ')) // o createTextNode serve para adicionar o texto pelo HTML
        parag.appendChild(inputh)// adiciona as caixas de texto
        parag.appendChild(document.createTextNode('Minute: '))
        parag.appendChild(inputm)
        parag.appendChild(document.createTextNode('Second: '))
        parag.appendChild(inputs)   

        parag.style.background = 'rgb(10, 10, 20)'
        parag.appendChild(button)

        botao_e.style.color = 'rgb(255,0,0)'
        edit_finish = false
    }
}
function verificar(){
    // seta os valores das caixas de textos
    let vh = Number(inputh.value)
    let vm = Number(inputm.value)
    let vs = Number(inputs.value)
    if (vh == 0 && vm == 0 && vs == 0){
        //condicao se alguma caixa de texto esta vazia
        alert("Termine de editar!")
        return
    }
    if (vh >= 0 && vm >= 0 && vs >= 0) {
        //condicao se os valores sao maiores ou iguais a 0
        if (vh <= 24 && vm < 60 && vs < 60) {
            //condicao se os valores sao menores que 24 ou 60
            if(vh < 10) {
                //condicao para o formato de texto
                hh = '0' + vh
            }else {
                hh = vh
            }if(vm < 10) {
                mm = '0' + vm
            }else {
                mm = vm
            }if(vs < 10) {
                ss = '0' + vs
            }else {
                ss = vs
            }
            //definicao das variaveis h, min, sec
            h = vh
            min = vm
            sec = vs
            // define todos os elementos
            res.innerText = String(h).padStart(2,'0') + ':' + String(min).padStart(2,'0') + ':' + String(sec).padStart(2,'0')
            parag.innerHTML = ''
            parag.style.background = 'rgb(0, 0, 0)'
            botao_e.style.color = 'rgb(0, 0, 255)'
            edit_finish = true
        }
    }else {
        //condicao se nao para se os valores estao menores que 0
        alert("verifique as informacoes para que estejam corretas")
        return
    }
   
}

function contar() {// contador
    if (sec > 0) {
        sec--
    } else if (min > 0) {
        min--
        sec = 59
    } else if (h > 0) {
        h--
        min = 59
        sec = 59
    } else {
        // condicao se o timer chegar a 00. parar a contagem
        clearInterval(timer)
        alert("acabou")
    }
    res.innerText = String(h).padStart(2,'0') + ':' + String(min).padStart(2,'0') + ':' + String(sec).padStart(2,'0')
}