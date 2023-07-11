
const personagens = document.querySelectorAll('.personagem');



personagens.forEach((persona) => {
    persona.addEventListener('mouseenter', () => {


        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado')

        persona.classList.add("selecionado");

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        const idPersonagem = persona.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        const nomePersonagem = document.getElementById("nome-personagem");

        nomePersonagem.innerText = persona.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = persona.getAttribute('data-description');

    })

})


