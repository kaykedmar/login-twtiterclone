function inputElemento() { 
  const inputValor = document.querySelector('.js-input'); 
  let valor = Number(inputValor.value); 



  if(inputValor.value === 123) { 
    window.location.href = 'twitter.html';
  }

  inputValor.value = '';
  console.log(valor)
}

function event() { 
  
}

