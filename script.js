const form = document.getElementById('formulario');
const arrayName = [];
const arraytele = [];
var noteCompleta = '';

form.addEventListener('submit', function(evento){
   evento.preventDefault();
   addNumero();
   atualizaAgenda();
});

function addNumero(){
   const nome = document.getElementById('nome');
   const telefone = document.getElementById('telefone');
   
   if(arraytele.includes(telefone.value)){
      alert(`Número ${telefone.value} já foi cadastrado`)
   }else{
      arrayName.push(nome.value)
      arraytele.push(telefone.value);

      let note = '<tr>';
         note += `<td> ${nome.value}</td>`;
         note += `<td> ${telefone.value}</td>`;
         note += '</tr>';

      noteCompleta += note;
   }
      nome.value= '';
      telefone.value='';
}

function atualizaAgenda(){
   const addNaAgenda = document.querySelector('tbody');
   addNaAgenda.innerHTML = noteCompleta
}