var div_jogo = document.querySelector(".quiz");

chamaJogo();

function chamaJogo(){
    //carregando os dados do json
    fetch('./assets/json/quiz.json') 
    .then(resposta => resposta.json())
    .then(json => jogo(json));
}

//numero aleatorio
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


function isEquivalent(a, b) {

    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);


    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    return true;
}

function shuffleArray(arr) {
    // Loop em todos os elementos
for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
    const j = Math.floor(Math.random() * (i + 1));
    // Reposicionando elemento
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
// Retornando array com aleatoriedade
return arr;
}

function jogo(json) 
{   
    //pega a palavra do json
    const pos = getRandomInt(0, 2);
    const palavra = json[pos].pokemon;
    const palavra2 = json[pos].errada;
    const palavra3 = json[pos].errada2;
    const palavra4 = json[pos].errada3;
    const imagem = json[pos].img;
    const ordembotoes = [];

    ordembotoes.push(palavra);
    ordembotoes.push(palavra2);
    ordembotoes.push(palavra3);
    ordembotoes.push(palavra4);

    shuffleArray(ordembotoes);

    //pokemon
    const h11 = document.createElement('h1');
    h11.classList.add("titulo");
    h11.innerHTML = 'Qual é esse pokemon?';

    //div imagem
    const div_img = document.createElement('div');
    div_img.classList.add("imgs1");

    const img1 = document.createElement('img');
    img1.classList.add("img");
    img1.src = imagem;
    div_img.appendChild(img1);

    //div botoes
    const div_btn = document.createElement('div');
    div_btn.classList.add("botoes");


    //palavra1
    const btn1 = document.createElement('button');
    btn1.classList.add("resposta1");
    btn1.value = ordembotoes[0];
    btn1.innerHTML = ordembotoes[0];
    div_btn.appendChild(btn1);
    

    //palavra2
    const btn2 = document.createElement('button');
    btn2.classList.add("resposta2");
    btn2.value = ordembotoes[1];
    btn2.innerHTML = ordembotoes[1];
    div_btn.appendChild(btn2);
    

    //palavra3
    const btn3 = document.createElement('button');
    btn3.classList.add("resposta3");
    btn3.value = ordembotoes[2];
    btn3.innerHTML = ordembotoes[2];
    div_btn.appendChild(btn3);

    //palavra4
    const btn4 = document.createElement('button');
    btn4.classList.add("resposta4");
    btn4.innerHTML = ordembotoes[3];
    btn4.value = ordembotoes[3];
    div_btn.appendChild(btn4);
    


    div_jogo.appendChild(h11);
    div_jogo.appendChild(div_img);
    div_jogo.appendChild(div_btn);
    
    
    var escolha;

    btn1.addEventListener("click", function () {
        escolha = this.value;
        verificarResposta(palavra,escolha);
        /* btn.style.display = "none"; */
    });

    btn2.addEventListener("click", function () {
        escolha = this.value;
        verificarResposta(palavra,escolha);
        /* btn.style.display = "none"; */
    });

    btn3.addEventListener("click", function () {
        escolha = this.value;
        verificarResposta(palavra,escolha);
        /* btn.style.display = "none"; */
    });

    btn4.addEventListener("click", function () {
        escolha = this.value;
        verificarResposta(palavra,escolha);
        /* btn.style.display = "none"; */
    });

};


function verificarResposta(certa, escolha){
    const imagempokemon = document.querySelector('.imgs1');
    const imagempokemon2 = document.querySelector('.img');
    const titulo = document.querySelector('.titulo');
    const botoes = document.querySelector('.botoes');

    
    botoes.parentNode.removeChild(botoes);

    if(isEquivalent(certa, escolha)){
        titulo.innerHTML = 'Correto';
        imagempokemon2.src = './assets/img/bongo-cat.gif';

        const btn_prosseguir = document.createElement('button');
        btn_prosseguir.classList.add("resposta2");
        btn_prosseguir.innerHTML = 'Próximo';
        div_jogo.appendChild(btn_prosseguir);

        btn_prosseguir.addEventListener("click", function () {
            imagempokemon.parentNode.removeChild(imagempokemon);
            titulo.parentNode.removeChild(titulo);


            btn_prosseguir.parentNode.removeChild(btn_prosseguir);
            chamaJogo();
        });

    }

    if(!isEquivalent(certa, escolha)){
        titulo.innerHTML = 'Resposta incorreta';
        imagempokemon2.src = './assets/img/erro.gif';

        const btn_prosseguir = document.createElement('button');
        btn_prosseguir.classList.add("resposta2");
        btn_prosseguir.innerHTML = 'Próximo';
        div_jogo.appendChild(btn_prosseguir);

        btn_prosseguir.addEventListener("click", function () {
            imagempokemon.parentNode.removeChild(imagempokemon);
            titulo.parentNode.removeChild(titulo);


            btn_prosseguir.parentNode.removeChild(btn_prosseguir);
            chamaJogo();
        });

    }

    
}


