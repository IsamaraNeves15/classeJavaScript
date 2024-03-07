class Funcionario{
  constructor(nome,idade,cargo){
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar(){
  console.log("Olá, sou  " + this.nome + ", tenho " + this.idade + " anos " + "e sou " + this.cargo)
  }

  trabalhar(){
    console.log(this.nome + ", " + this.cargo)
}
}

class Gerente extends Funcionario{
  constructor(nome,idade,cargo,departamento){
    super(nome,idade,cargo);
    this.departamento = departamento;
  }

    gerenciar(){
      console.log("Sou " + this.cargo + " de " + this.departamento)
    }
}

class Desenvolvedor extends Funcionario{
  constructor(nome,idade,cargo,linguagem){
    super(nome,idade,cargo);
    this.linguagem = linguagem;
  }

  get programar(){
    console.log("Eu programo em " + this.linguagem)
  }
}


d1 = new Funcionario("André",27,"desenvolvedor","Phyton")
d1.trabalhar()
d1.programar()

g1 = new Gerente("João",44, "gerente", "projetos")
g1.seApresentar()
g1.gerenciar()