function alterarlayout(){
    const largura = document.documentElement.clientWidth;//pega a largura da tela
    const nav = document.querySelector('nav')//pega o elemento nav
    if (largura < 769) {//se a largura for menor que 769px
        nav.style.fontSize = '0.7rem';//altera o tamanho da fonte
        nav.style.flexDirection = 'column';//altera a direção do flexbox
        nav.style.height = 'auto';//altera a altura do nav
        nav.style.alignItems = 'left'; //altera o alinhamento dos itens
        nav.style.justifyContent = 'left';//altera a justificação dos itens
    }
    else if(largura < 1025) {//telas de tablet
        nav.style.fontSize = '0.8rem';//altera o tamanho da fonte
        nav.style.alignItems = 'center';
        nav.style.flexDirection = 'row';
        nav.style.height = '8vh';//altera a altura do nav
        nav.style.justifyContent = 'space-evenly';//altera a justificação dos itens
    }
    else{//telas de notebook e desktop
        nav.style.fontSize = '1rem';//altera o tamanho da fonte
        nav.style.alignItems = 'space-between';//altera o alinhamento dos itens
        nav.style.flexDirection = 'row';//altera a direção do flexbox
        nav.style.height = '9vh';//altera a altura do nav
        nav.style.justifyContent = 'space-evenly';//altera a justificação dos itens
    }
    const paragrafos = document.querySelectorAll('section .conteudo');//pega todos os elementos com a classe paragrafo dentro de section
    if (largura < 769) {//769px
        paragrafos.forEach(p => {
            p.style.flexDirection = 'column';//altera a direção do flexbox
        });
    }
    else{
        paragrafos.forEach(p => {
            p.style.flexDirection = 'row';
        });
    }
    const sobre = document.getElementById('sobre');
    if (largura < 769) {
        sobre.style.marginTop = '40vw';
    }
    else{
        sobre.style.marginTop = '5%';
    }
    
};

window.addEventListener('resize', alterarlayout);
window.addEventListener('load', alterarlayout);
