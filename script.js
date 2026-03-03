
function calcularTotal() {

  const checkboxes = document.querySelectorAll('.item-produto');
  const quantidades = document.querySelectorAll('.qtd-produto');

  let total = 0;

  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {

      const preco = parseFloat(checkbox.value);
      const quantidade = parseInt(quantidades[index].value) || 1;

      total += preco * quantidade;
    }
  });

  const elementoTotal = document.getElementById('valor-total');

  // Atualiza somente o número (sem repetir R$)
  elementoTotal.textContent = total.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}


/* ============================
   EVENT LISTENERS
============================ */

document.querySelectorAll('.item-produto').forEach(checkbox => {
  checkbox.addEventListener('change', calcularTotal);
});

document.querySelectorAll('.qtd-produto').forEach(input => {
  input.addEventListener('input', calcularTotal);
});
