const { Exception } = require('sass');
const {Survey} = require('./Survey')
class Surveys {
  constructor(arrSurvey, build = true) {
    console.log(arrSurvey);
    this.arrSurvey = arrSurvey;
    this.jsonSurvey = [];
    build ? this.buildSurveys() : null;
    this.indiceActual = 0;
    this.IndiceMaximo = this.jsonSurvey.length - 1;
  }

  selectOption(id_pregunta,id_answer){
    try{
      this.jsonSurvey[this.incIndiceActual].searchQuestion(id_pregunta).setSelected(id_answer)
    }catch(e){
      consol.err(e)
    }
    
  }

  setArrayAndBuild(arrSurvey) {
    this.arrSurvey = arrSurvey;
    this.buildSurveys();
    this.IndiceMaximo = this.jsonSurvey.length - 1;
  }

  clone() {
    return Object.create(
      Object.getPrototypeOf(this),
      Object.getOwnPropertyDescriptors(this)
    );
  }

  nextSurvey() {
    return this.incIndiceActual()? this.clone(): this; //Si no puede avanzar más no clona el objeto.
  }

  prevSurvey() {
    return this.decIndiceActual() ? this.clone() : this; //Si no puede retroceder más no clona el objeto.
  }

  incIndiceActual(){
    //Todo: validar las respuestas de la encuesta actual antes de incrementar.
    let valorEntrante = this.indiceActual;
    this.indiceActual =  this.indiceActual + 1 <= this.IndiceMaximo? this.indiceActual+1:this.IndiceMaximo;
    return valorEntrante != this.indiceActual //Si se incrementa retorna true.
  }
  
  decIndiceActual(){
    let valorEntrante = this.indiceActual;
    this.indiceActual = this.indiceActual - 1 >= 0 ? this.indiceActual - 1 : 0;
    return valorEntrante != this.indiceActual; //Si se decrementa retorna true.
  }

  getjson() {
    return this.jsonSurvey;
  }

  pushSurvey(newSurvey){
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
      }

      if (survey.id_survey == surveyRecent.id_survey) {
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

  searchSurvey(id) {
    let search = this.jsonSurvey.filter((survey) => survey.id_survey == id);
    return search.length ? search[0] : null;
  }
}

module.exports = {Surveys}