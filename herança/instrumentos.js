
class Instrumentomusical{
    #nome;
    #categoria;
    #preco;
    constructor(){}
    get nome(){
        return this.#nome;
    }
    set nome(nomeInstrumento)
    {
        if(nomeInstrumento==="")
        {
            console.error("Digite um nome")
        }
        else
        {
            this.#nome=nomeInstrumento;
        }
       
    }
    ReprocucaoMusical(){
        console.log("Tocando melogia geral")
    }
    get categoria(){
        return this.#categoria;
    }
    set categoria(nomeCategoria)
    {
        if(nomeCategoria==="")

        {
            console.error("Digite uma categoria")
        }
        else (nomeCategoria=="cordas")||(nomeCategoria!=="eletronico")
        {
            this.#categoria=nomeCategoria;
        }
       
    }
    get preco(){
        return this.#preco;
    }
    set preco(valor){
        if(valor> 0.0){
            this.#preco=valor;
        }
        else{
            console.log("Digite um preço")
        }
    }
    ReproducaoMusical(){
        console.log("Tocando melogia geral")
    }
}
class Guitarra extends Instrumentomusical{
    #numCordas
    get cordas(){return this.#numCordas}
    set cordas(num){this.#numCordas=num}
    ReproducaoMusical(){
        console.log("Tocandon Guitarra")
    }

}
class Teclado extends Instrumentomusical{
    #numTeclas
    get teclas(){return this.#numTeclas}
    set teclas(num){this.#numTeclas=num}
    ReprocucaoMusical(){
        console.log("Tocandon Teclado")
    }

}

const guitarra1 = new Guitarra();
const teclado1 = new Teclado();
guitarra1.nome= "Fender";
console.log(guitarra1.nome);
guitarra1.preco=900.50;
console.log(guitarra1.preco);
guitarra1.categoria="Cordas";
console.log(guitarra1.categoria);

guitarra1.cordas=12;
console.log(guitarra1.cordas);