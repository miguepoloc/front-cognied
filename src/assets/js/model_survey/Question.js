class Question{
  constructor(json){
    this.id_question = json.id_question;
    this.question = json.question;
    this.answer = [];
    this.addAnswer(json); //Cuando crean una pregunta el json trae una posible respuesta. entonces la creamos.
    this.selected = null; // aquí guardaré la respuesta para esta pregunta
  }
  
  setSelected(id_answer){
    this.selected = id_answer
  }
  getSelected(){
    return this.selected
  }
  addAnswer(json){
    this.answer.push({
      "id_answer":json.id_answer,
      "answer":json.answer,
    })
  }

}

module.exports = { Question }