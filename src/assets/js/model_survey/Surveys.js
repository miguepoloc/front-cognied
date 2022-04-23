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