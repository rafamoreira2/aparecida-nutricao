var tabela = document.querySelector("table")  

    tabela.addEventListener("dblclick", function(event){
     
        // se o elemento clicado for uma td(dados do paciente), realize a função de apagar o pai desta td (linha do paciente)
       if(event.target.tagName == "TD"){
         //event.target seleciona quem sofreu o evento, no caso, a <td> do paciente.
       //parentNode seleciona o pai de um elemento, no caso, a <tr> do td clicado.
       event.target.parentNode.classList.add("fadeout")
       setTimeout(function() {
        event.target.parentNode.remove()
       },500);}
       
       
    })