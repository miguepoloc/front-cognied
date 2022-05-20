const { Question } = require('./Question');
const {Survey} = require('./Survey')
class Surveys {
  constructor(arrSurvey, build = true) {
    this.arrSurvey = arrSurvey;
    this.jsonSurvey = [];
    build ? this.buildSurveys() : null;
    this.indiceActual = 0;
    this.IndiceMaximo = this.jsonSurvey.length - 1;
  }

  /**
   * Asigna una respuesta a una pregunta.
   * @param {number} id_pregunta
   * @param {number} id_answer
   */
  selectOption(id_pregunta, id_answer) {
    try {
      this.jsonSurvey[this.indiceActual]
        .searchQuestion(id_pregunta)
        .setSelected(id_answer);
    } catch (e) {
      console.log(e);
    }
  }

  selectAllOptionRandom() {
    try {
      this.jsonSurvey.map((survey) => {
          survey.questions.map((question) => {
            let repuestaAleatorea = Math.floor(
              Math.random() * question.answer.length
            );
            question.setSelected(question.answer[repuestaAleatorea].id_answer);
          });
      });
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * Cuando se crea una instancia con build = false esto permite agregarle un json
   * y contruir el json de encuestas (jsonArray)
   * @param {Array<json>} arrSurvey
   */

  setArrayAndBuild(arrSurvey) {
    this.arrSurvey = arrSurvey;
    this.buildSurveys();
    this.IndiceMaximo = this.jsonSurvey.length - 1;
  }

  /**
   * Retorna un clon del objeto.
   * @returns {Survey}
   */
  clone() {
    return Object.create(
      Object.getPrototypeOf(this),
      Object.getOwnPropertyDescriptors(this)
    );
  }

  /**
   * Verifica si todas las preguntas de la encuesta actual han sido respondidas.
   * @returns {boolean}
   */

  isAllQuestionsSelected() {
    return this.jsonSurvey[this.indiceActual].questions.every(
      (objQuestion) => objQuestion.getSelected() != null
    );
  }

  isAllSurveysAnswered(){
    return this.jsonSurvey.every(survey=>{
     return survey.questions.every(
      (objQuestion) => objQuestion.getSelected() != null
    ) 
    });
  }

  restultsAnsiedadTest(ansiedadTestId)
  {
    let objJson = {"result" : "", "points":0};
    const ansiedadTest = this.searchSurvey(ansiedadTestId);
    const points = this.sumAllQuestions(ansiedadTest);

    if(points >= 15 && points <= 30)
    {
      objJson.result = "Ansiedad baja"
    }else if(points >= 31 && points <= 45){
      objJson.result = "Ansiedad media"
    }else if(points >= 46 && points <= 60){
      objJson.result = "Ansiedad alta"
    }else{
      objJson.result = "Disculpa,Algo ha salido mal. Si ves este mensaje, escribenos."
    }

    objJson.points = points

    return objJson
  }

  restultsDepresionTest(depresionTestId)
  {
    let objJson = {"result" : "", "points":0};
    const depresionTest = this.searchSurvey(depresionTestId);
    const points = this.sumAllQuestions(depresionTest);

    if(points >= 0 && points <= 14)
    {
      objJson.result = "Sin síntoma depresivo"
    }else if(points >= 15 && points <= 30){
      objJson.result = "Síntomas depresivos moderados"
    }else if(points >= 31){
      objJson.result = "Síntomas depresivos graves"
    }
    else{
      objJson.result = "Disculpa,Algo ha salido mal. Si ves este mensaje, escribenos."
    }

    objJson.points = points

    return objJson
  }


  restultsEscalaDeEstresPercibidoTest(EscalaDeEstresPercibidoId)
  {
    let objJson = {"result" : "", "points":0};
    const EscalaDeEstresPercibidoIdTest = this.searchSurvey(EscalaDeEstresPercibidoId);
    const points = this.sumAllQuestions(EscalaDeEstresPercibidoIdTest);

    if(points >= 0 && points <= 19)
    {
      objJson.result = "Bajo"
    }else if(points >= 20 && points <= 38){
      objJson.result = "Medio"
    }else if(points >= 39){
      objJson.result = "Alto"
    }
    else{
      objJson.result = "Disculpa, Algo ha salido mal. Si ves este mensaje, escribenos."
    }

    objJson.points = points

    return objJson
  }


  restultsInteligenciaEmocionalTest(inteligenciaEmocionalId,sexo)
  {
    let objJson = {"result" : {"atencion":{text:"",points:0},"claridad":{text:"",points:0},"reparacion":{text:"",points:0}}};
    const depresionTest = this.searchSurvey(inteligenciaEmocionalId);
    
    const pointsAtencion  = this.sumAnyQuestions(depresionTest,[1,2,3,4,5,6,7,8]);
    const pointsClaridad = this.sumAnyQuestions(depresionTest,[9,10,11,12,13,14,15,16]);
    const pointsReparacion =  this.sumAnyQuestions(depresionTest,[17,18,19,20,21,22,23,24]);
    
    if(sexo.toLowerCase() == "m"){
      if(pointsAtencion <= 21){
        objJson.result.atencion.text = "Debe mejorar su atención: presta poca atención"
      }
      else if(pointsAtencion >= 22 && pointsAtencion <= 32){
        objJson.result.atencion.text = "Adecuada atención"
      }
      else{
        objJson.result.atencion.text = "Debe mejorar su atención: presta demasiada atención. Una atención excesiva sin una comprensión profunda de las emociones podría resultar perjudicial. ¡Conoce más en los módulos!"
      }

      if(pointsClaridad <= 25){
        objJson.result.claridad.text = "Debe mejorar su comprensión"
      }else if(pointsClaridad >= 26 && pointsClaridad <= 35){
        objJson.result.claridad.text = "Adecuada comprensión"
      }else{
        objJson.result.claridad.text= "Excelente comprensión"
      }

      if(pointsReparacion <= 23){
        objJson.result.reparacion.text = "Debe mejorar su regulación"
      }else if(pointsReparacion >= 24 && pointsReparacion <= 35){
        objJson.result.reparacion.text = "Adecuada regulación"
      }else{
        objJson.result.reparacion.text = "Excelente regulación"
      }
    }
    else if(sexo.toLowerCase() == "f"){
      if(pointsAtencion <= 24){
        objJson.result.atencion.text = "Debe mejorar su atención: presta poca atención"
      }
      else if(pointsAtencion >= 25 && pointsAtencion <= 35){
        objJson.result.atencion.text = "Adecuada atención"
      }
      else{
        objJson.result.atencion.text = "Debe mejorar su atención: presta demasiada atención. Una atención excesiva sin una comprensión profunda de las emociones podría resultar perjudicial. ¡Conoce más en los módulos!"
      }

      if(pointsClaridad <= 23){
        objJson.result.claridad.text = "Debe mejorar su comprensión"
      }else if(pointsClaridad >= 24 && pointsClaridad <= 34){
        objJson.result.claridad.text = "Adecuada comprensión"
      }else{
        objJson.result.claridad.text= "Excelente comprensión"
      }

      if(pointsReparacion <= 23){
        objJson.result.reparacion.text = "Debe mejorar su regulación"
      }else if(pointsReparacion >= 24 && pointsReparacion <= 34){
        objJson.result.reparacion.text = "Adecuada regulación"
      }else{
        objJson.result.reparacion.text = "Excelente regulación"
      }
    }

    objJson.result.atencion.points = pointsAtencion;
    objJson.result.claridad.points = pointsClaridad;
    objJson.result.reparacion.points = pointsReparacion;

    return objJson
  }

  sumAllQuestions(encuesta){
    console.log(encuesta)
    return encuesta.questions.reduce((accumulator,question)=>  accumulator + question.getObjSelected().value,0)
  }

  sumAnyQuestions(encuesta,ArrIdQuestionsToSum){
    console.log(encuesta)
    return encuesta.questions
            .filter((question)=>  ArrIdQuestionsToSum.includes(question.getItemId()))
            .reduce((accumulator,question)=>  accumulator + question.getObjSelected().value, 0)
  }

  results() {
    let objJson = {}
    const ansiedadTestId = 3;
    const depresionTestId = 4;
    const inteligenciaEmocionalId = 5; const sexo = "m"
    const escalaDeEstresPercibidoId = 6;
    objJson["ansiedad"] = this.restultsAnsiedadTest(ansiedadTestId);
    objJson["depresion"] = this.restultsDepresionTest(depresionTestId);
    objJson["inteligenciaEmocional"] = this.restultsInteligenciaEmocionalTest(inteligenciaEmocionalId,sexo);
    objJson["escalaDeEstresPercibido"] = this.restultsEscalaDeEstresPercibidoTest(escalaDeEstresPercibidoId)
    console.log(objJson)
  }

  /**
   * @returns {Survey | null} Retorna un clon del objeto si puede pasar a la siguien encuesta, de lo contrario retorna null.
   */
  nextSurvey() {
    return this.incIndiceActual() ? this.clone() : null; //Si no puede avanzar más no clona el objeto.
  }

  /**
   * Marca las respuestas que hayan sido respondidas en la encuesta actual.
   */
  markAllQuestionSelected() {
    this.jsonSurvey[this.indiceActual].questions.map((objQuestion) => {
      if (objQuestion.getSelected())
        document.getElementById(`answer_${objQuestion.getSelected()}`).click();
    });
  }

  /**
   * @returns {Survey | null} Retorna un clon del objeto si puede ir a la encuesta anterior, de lo contrario retorna null.
   */
  prevSurvey() {
    return this.decIndiceActual() ? this.clone() : null; //Si no puede retroceder más no clona el objeto.
  }

  /**
   * valida si puede incrementar el indice actual
   * @returns {boolean}
   */
  incIndiceActual() {
    //Todo: validar las respuestas de la encuesta actual antes de incrementar.
    if (this.isAllQuestionsSelected()) {
      let valorEntrante = this.indiceActual;
      this.indiceActual =
        this.indiceActual + 1 <= this.IndiceMaximo
          ? this.indiceActual + 1
          : this.IndiceMaximo;
      return valorEntrante != this.indiceActual; //Si se incrementa retorna true.
    }
    return false;
  }

  /**
   * valida si puede decrementar el indice actual
   * @returns {boolean}
   */
  decIndiceActual() {
    let valorEntrante = this.indiceActual;
    this.indiceActual = this.indiceActual - 1 >= 0 ? this.indiceActual - 1 : 0;
    return valorEntrante != this.indiceActual; //Si se decrementa retorna true.
  }

  getjson() {
    return this.jsonSurvey;
  }

  /**
   * La funcion ordena las encuestas a medida que las agrega.
   * @param {Survey} newSurvey
   */
  pushSurvey(newSurvey) {
    this.jsonSurvey.push(newSurvey); //Las agrego en orden...
    this.jsonSurvey.sort(function (a, b) {
      return a.id_survey - b.id_survey;
    });
  }

  buildSurveys() {
    let surveyRecent = null;
    this.arrSurvey.forEach((survey) => {
      //si surveyRecent es null entonces agrego una nueva encuesta.
      if (!surveyRecent) {
        surveyRecent = new Survey(survey);
        console.count("Cree una nueva por primera vez.");
        //debugger
        this.pushSurvey(surveyRecent);
      } else if (survey.id_survey == surveyRecent.id_survey) {
        surveyRecent.addQuestion(survey);
      } else {
        let objSurvey = this.searchSurvey(survey.id_survey);

        if (objSurvey) {
          objSurvey.addQuestion(survey);
        } else {
          objSurvey = new Survey(survey);
          this.pushSurvey(objSurvey);
        }
        //actualizo la encuesta reciente (surveyRecent)
        surveyRecent = objSurvey;
      }
    });
    console.log(this.jsonSurvey);
  }

  /**
   * Busca una encuesta por su id.
   * @param {number} id
   * @returns {Survey}
   */
  searchSurvey(id) {
    let search = this.jsonSurvey.filter((survey) => survey.id_survey == id);
    return search.length ? search[0] : null;
  }

  generateJsonToSend(id_usuario) {
    //Una vez todo se haya respondido
    //Id usuario
    let json = {};
    json["id_usuario"] = id_usuario;
    this.jsonSurvey.map((survey) => {
      json[survey.id_survey] = [];
      survey.questions.map((question) => {
        json[survey.id_survey].push(question.getSelected());
      });
    });
    return json;
  }
}

module.exports = {Surveys}