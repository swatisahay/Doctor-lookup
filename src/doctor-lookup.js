export class Doctor{
  constructor(){
    // this.image = image;
    // this.quote = quote;
  }
  static getData(issue, name, city, hi, error){
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=${city}&skip=2&limit=40&query=${issue}&name=${name}&user_key=${process.env.exports.apiKey}`)
      .then(function(response){
          console.log(response);
        hi(response);
      }).fail(function(){
        error();
      });
    };
}
