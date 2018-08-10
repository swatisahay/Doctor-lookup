export class Doctor{
  constructor(){
    // this.image = image;
    // this.quote = quote;
  }
  static getData(issue, name, hi, error){
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=wa-seattle&skip=2&limit=10&query=${issue}&name=${name}&user_key=${process.env.exports.apiKey}`)
      .then(function(response){
          console.log(response);
        hi(response);
      }).fail(function(){
        error();
      });
    };
}
