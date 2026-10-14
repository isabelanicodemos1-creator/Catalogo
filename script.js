const formulario = document.getElementById('formulario')
const midiasCatalogadas = document.querySelector('.container-midias')


const selectTipo = document.getElementById('tipo')
const blocoTemporadas = document.getElementById('bloco-temporadas')

formulario.addEventListener('submit', function(event){
    event.preventDefault()

    const dados = new FormData(formulario)

    const midia = document.createElement('div')
    midia.classList.add('card-midia')

    if(foto.files.length > 0) {
        const imagem = document.createElement('img')
        imagem.src = URL.createObjectURL(foto.files[0])
        midia.appendChild(imagem)
    }
    
    const nome = document.createElement('h2')
    nome.textContent = dados.get('nome')
    midia.appendChild(nome)

    const genero = document.createElement('p')
    genero.textContent = 'Gênero: ' + dados.get('genero')
    midia.appendChild(genero)

    const direcao = document.createElement('p')
    direcao.textContent = 'Direção: ' + dados.get('direcao')
    midia.appendChild(direcao)

    const ano = document.createElement('p')
    ano.textContent = 'Ano: ' + dados.get('ano')
    midia.appendChild(ano)

    const tipo = document.createElement('p')
    tipo.textContent = 'Tipo: ' + dados.get('tipo')
    midia.appendChild(tipo)


    if(dados.get('tipo') === 'Série') {
        const temporadas = document.createElement('p')
        temporadas.textContent = 'Temporadas: ' + dados.get('temporadas')
        midia.appendChild(temporadas)
    }

    const remover = document.createElement('button')
    remover.textContent = 'remover'
    remover.classList.add('remover')

    remover.addEventListener('click', function(){
        midia.remove()
    })
    midia.appendChild(remover)

    midiasCatalogadas.appendChild(midia)

    formulario.reset()
    
    blocoTemporadas.style.display = "none"
})



selectTipo.addEventListener('change', function() {
    if (selectTipo.value === 'Série') {
        blocoTemporadas.style.display = 'block' 
    } else {
        blocoTemporadas.style.display = 'none'  
    }
})



const stars = document.querySelectorAll('.star');
const notaValor = document.getElementById('nota-valor');


stars.forEach(star => {
  star.addEventListener('click', () => {
    const valorSelecionado = star.getAttribute('data-value');
    

    notaValor.textContent = valorSelecionado;

   
    stars.forEach(s => {
      const valorEstrela = s.getAttribute('data-value');
      
      if (valorEstrela <= valorSelecionado) {
        s.classList.add('active'); 
      } else {
        s.classList.remove('active'); 
      }
    });
  });
});