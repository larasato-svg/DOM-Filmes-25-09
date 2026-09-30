document.addEventListener('DOMContentLoaded', () => {
  const opcoesGrid = document.getElementById('opcoesGrid');
  const minhaListaGrid = document.getElementById('minhaListaGrid');
  const mensagemVazia = document.getElementById('mensagemVazia');


  opcoesGrid.addEventListener('click', (event) => {

    const btnAdd = event.target.closest('.btn-adicionar');
    if (!btnAdd) return;

    const cardOriginal = btnAdd.closest('.card');
    const filmeId = cardOriginal.getAttribute('data-id');

  
    const jaExiste = minhaListaGrid.querySelector(`.card[data-id="${filmeId}"]`);
    if (jaExiste) {
      alert('Este filme já foi adicionado à sua lista!');
      return;
    }

 
    mensagemVazia.style.display = 'none';


    const novoCard = cardOriginal.cloneNode(true);
    const novoBotao = novoCard.querySelector('button');

    novoBotao.id = `btn-remove-${filmeId}`;
    novoBotao.className = 'btn btn-remover';
    novoBotao.textContent = '- Remover da Lista';


    minhaListaGrid.appendChild(novoCard);
  });


  minhaListaGrid.addEventListener('click', (event) => {
  
    const btnRemove = event.target.closest('.btn-remover');
    if (!btnRemove) return;

   
    const cardParaRemover = btnRemove.closest('.card');
    cardParaRemover.remove();


    const totalCardsNaLista = minhaListaGrid.querySelectorAll('.card').length;
    if (totalCardsNaLista === 0) {
      mensagemVazia.style.display = 'block';
    }
  });
});