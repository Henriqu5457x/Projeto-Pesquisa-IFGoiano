//Classe sempre começa com letra maiscula
class Mesa{
//Parametros para configurar variaveis internas
  constructor (material,altura,largura,profundidade,pernas,cor)
  {
    //this sgnifica variavel interna da classe
     this.material=material;
     this.altura=altura;
     this.largura=largura;
     this.profundidade=profundidade;
     //this.pernas=pernas;
     this.cor=cor;
  }
  //Estes dois metodos são o comportamento da classe
   regularAltura(novaAltura){
    this.altura=novaAltura;
   
   }
   verificarAltura(){
    console.log(`Nova altura ${this.altura}`)
   }
}
//abaixo estamos definindo 3 mesas
const mesa1 = new Mesa("madeira",1.0,1.7,0.5,4,"Mogan")
    mesa1.regularAltura(1.3)
    mesa1.verificarAltura();

const mesa2 = new Mesa("ferro",1.0,1.7,0.5,4,"marron")
    mesa2.regularAltura(1.5)
    mesa2.verificarAltura();
const mesa3 = new Mesa("aço",1.0,1.7,0.5,4,"preto")
    mesa2.regularAltura(1.9)
    mesa2.verificarAltura();
