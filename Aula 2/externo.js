/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function () {
  carrega_nome();

  document.getElementById('um').onclick = function () {
    informacao();
  };
  document.getElementById('dois').ondblclick = function () {
    informacao();
  };
};

function informacao() {
  var nome = prompt('Digite o seu nome:');
  var idade = prompt('Digite o sua idade:');
  alert(nome + '  ' + idade);
}
function carrega_nome() {
  document.getElementById('nome').value = 'Alexandre';
}
