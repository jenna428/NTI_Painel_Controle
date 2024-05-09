function abrir(op){
    const modal = document.getElementById('janela-modal')
    const conteudo = document.getElementById('modal')
    modal.classList.add('abrir')

    conteudo.innerHTML = '';

    if (op == 'pfsense') {
        conteudo.innerHTML = '<button class="fechar" id="fechar">&times</button><h1>Pfsense</h1><ul><li><a href="#">Pfsense_Alunos</a></li><li><a href="#">Pfsense_Sistema</a></li><li><a href="#">Pfsense_Laboratórios</a></li></ul>';
    }else if (op == 'radius'){
        conteudo.innerHTML = '<button class="fechar" id="fechar">&times</button><h1>DaloRADIUS</h1><ul><li><a href="#">DaloRADIUS_1</a></li><li><a href="#">DaloRADIUS_2</a></li><li><a href="#">DaloRADIUS_3</a></li><li><a href="#">DaloRADIUS_4</a></li></ul>';
    }else if (op == 'freeradius'){
        conteudo.innerHTML = '<button class="fechar" id="fechar">&times</button><h1>FreeRADIUS</h1><ul><li><a href="#">FreeRADIUS_1</a></li><li><a href="#">FreeRADIUS_2</a></li><li><a href="#">FreeRADIUS_3</a></li><li><a href="#">FreeRADIUS_4</a></li></ul>';
    }

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal'){
            modal.classList.remove('abrir')
        }
    })
}