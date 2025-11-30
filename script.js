function alterarlayout(){
    const largura = document.documentElement.clientWidth;//pega a largura da tela
    const nav = document.querySelector('nav')//pega o elemento nav
    if (largura < 790) {//se a largura for menor que 769px
        nav.style.fontSize = '0.7rem';//altera o tamanho da fonte
        nav.style.flexDirection = 'column';//altera a direção do flexbox
        nav.style.height = 'auto';//altera a altura do nav
        nav.style.alignItems = 'left'; //altera o alinhamento dos itens
        nav.style.justifyContent = 'left';//altera a justificação dos itens
    }
    else{
        nav.style.fontSize = '1rem';
        nav.style.alignItems = 'space-between';
        nav.style.flexDirection = 'row';
        nav.style.height = '10vh';
        nav.style.justifyContent = 'space-evenly';
    }
    const paragrafos = document.querySelectorAll('.conteudo');
    if (largura < 790) {//769px
        paragrafos.forEach(p => {
            p.style.flexDirection = 'column';
        });
    }
    else{
        paragrafos.forEach(p => {
            p.style.flexDirection = 'row';
        });
    }
    const sobre = document.getElementById('sobre');
    if (largura < 790) {
        sobre.style.marginTop = '40vw';
    }
    else{
        sobre.style.marginTop = '5%';
    }
};

window.addEventListener('resize', alterarlayout);
window.addEventListener('load', alterarlayout);
