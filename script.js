function inputElemento() { 
  const inputValor = document.querySelector('.js-input'); 
  let valor = Number(inputValor.value); 
  const passwordMessage = document.getElementById('passwordMessage')


  if(inputValor.value === '123') { 
    window.location.href = 'twiiter.html';
  } else {
    // Mostrar o P do esquecir a senha
    passwordMessage.style.display = 'block';
  }

  inputValor.value = '';
  console.log(valor)
}

function eventEnter(event) {
  if(event.key === 'Enter') { 
    inputElemento()
  } 

}

