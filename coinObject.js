const coin = {
    state: 0,
  
    flip: function () {
      
      return this.state = Math.round(Math.random())
      
    },
  
    toString: function () {
        if(this.state === 0){
            return 'Heads'
        }else{
            return 'Tails'
        }
      // Se o valor de "state" for 0, retorne "Heads"
      // Se o valor de "state" for 1, retorne "Tails"
    },
  
    toHTML: function () {
      const image = document.createElement("img");
      if(this.state === 0){
        image.src = "./_images_/heads.png"
      }else{
        image.src = "./_images_/tails.png"
      }
      // Colocar uma imagem correspondente a essa valor.
      image.alt = "Heads/Tails"
      image.style.width = '80px'
      image.style.height = '80px'
      return image
    },
  }

  function display20Flips() {
    const results = [];

    for(let i = 0; i < 20; i ++){
      results.push(coin.flip())
      const resultado = document.createElement('p')
      resultado.innerText = coin.toString()
      resultado.style.fontSize = '1.2rem'  
      resultado.style.fontWeight = 'bold' 
      resultado.style.fontFamily = 'Arial' 
      document.body.appendChild(resultado)
      
    }    

    return results
    // Use um loop para arremessar a moeda 20 vezes.
    // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
  }
  
  function display20Images() {
    const results = [];

    for(let i = 0; i < 20; i ++){
      results.push(coin.flip())
      document.body.appendChild(coin.toHTML())
      
    }  
    return results
    // Use um loop para arremessar a moeda 20 vezes.
    // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
  }