class Funcionario{
  constructor(nome,idade,cargo){
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar(){
  console.log("Olá, sou  " + this.nome + ", tenho " + this.idade + " anos, " + "e sou " + this.cargo)
  }

  trabalhar(){

}

f1 = new Funcionario("André",27,"desenvolvedor")
f1.seApresentar()
