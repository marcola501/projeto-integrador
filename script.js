function alterarlayout(){
    const largura = window.innerWidth;
    const nav = document.querySelector('nav');
    if (largura < 769) {
        nav.style.fontSize = '0.6rem';
        nav.style.flexDirection = 'column';
        nav.style.height = 'auto';
        nav.style.alignItems = 'left'; 
        nav.style.justifyContent = 'left';
    }
    else{
        nav.style.fontSize = '1rem';
        nav.style.alignItems = 'space-between';
        nav.style.flexDirection = 'row';
        nav.style.height = '10vh';
        nav.style.justifyContent = 'space-between';
    }
    const paragrafos = document.querySelectorAll('.conteudo');
    if (largura < 769) {
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
    if (largura < 769) {
        sobre.style.marginTop = '40vw';
    }
    else{
        sobre.style.marginTop = '5%';
    }
};

window.addEventListener('resize', alterarlayout);
window.addEventListener('load', alterarlayout);
