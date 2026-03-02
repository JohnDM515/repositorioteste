function calcularTotal() {
  // Seleciona todos os checkboxes e inputs de quantidade
  const checkboxes = document.querySelectorAll('.item-produto');
  const quantidades = document.querySelectorAll('.qtd-produto');

  // Total começa em 0
  let total = 0;

  // Percorre todos os produtos
  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      const preco = parseFloat(checkbox.value);
      const quantidade = parseInt(quantidades[index].value);

      total += preco * quantidade;
    }
  });

  // Atualiza o valor na tela
  const elementoTotal = document.getElementById('valor-total');

  elementoTotal.textContent = total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

/* ============================
   EVENT LISTENERS
============================ */

// Quando marcar/desmarcar produto
document.querySelectorAll('.item-produto').forEach(checkbox => {
  checkbox.addEventListener('change', calcularTotal);
});

// Quando alterar quantidade
document.querySelectorAll('.qtd-produto').forEach(input => {
  input.addEventListener('change', calcularTotal);
});