class ParImparGame {
  constructor(flag) {
    this.flag = flag;
  }

  nomeJogador(flag) {
    console.log("entrei no metodo nomeJogador");
    if (flag === 1) {
      //console.log("flag 1");
      const Jogador1 = document.getElementById("inputName1").value;
      return Jogador1;
    } else {
      //console.log("flag 2");
      const Jogador2 = document.getElementById("inputName2").value;
      return Jogador2;
    }
  }
}
