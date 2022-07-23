class Forca {
  
    constructor(palavraSecreta) {
        this.vidas = 6;
        this.estado = "Aguardando chute";
        this.letrasChutadas = [];
        this.palavra = [];
        this.palavraSecreta = palavraSecreta;
      
        for (let index in this.palavraSecreta) {
          this.palavra.push('_');
        }
      }
    
      chutar(letra) {
        
        if (letra.length > 1) {
          console.log("POR FAVOR, INSIRA APENAS UMA LETRA!!!");
          return;
        }
    
        if (this.letrasChutadas.find(letraChutada => letra === letraChutada)) {
          console.log("VOCÊ JÁ CHUTOU ESTA LETRA!!!");
          return;
        }
    
        this.letrasChutadas.push(letra);
    
        if (this.palavraSecreta.indexOf(letra) < 0) {
          console.log('Errou');
          this.vidas--;
        }
    
        if (this.vidas === 0) {
          return this.estado = "perdeu";
        }
    
        let i = 0
        for (let index in this.palavraSecreta) {
          if (this.palavraSecreta[index] === letra) {
            this.palavra[i] = letra;
          }
          i++;
        }
    
        if (!this.palavra.find(element => element === "_")) {
          return this.estado = "ganhou";
        }
    
      }
    
      buscarEstado() {
        return this.estado;
      } 

      buscarDadosDoJogo() {
        return {
          letrasChutadas: this.letrasChutadas, 
          vidas: this.vidas,
          palavra: this.palavra
        }
      }
    }
    

module.exports = Forca;
