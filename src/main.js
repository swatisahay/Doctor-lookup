import { Doctor } from './doctor-lookup';
import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



$(document).ready(function() {
  $('#doctor').click(function() {
    let medicalIssue= $('#issue').val();
    let name= $('#name').val();
    let city= $('#city').val();
    $('#issue').val("");
    $('#name').val("");
    $('#city').val("");

    function showResults(response){
      if (response.data.length==0) {
        $(".showDetails").text("There is no doctor matching your search");
      }
      // let detail = JSON.parse(response);
      // console.log(detail);
      for (let i = 0; i < response.data.length; i++) {

        $('.showDetails').append(`<li>Doctor:${response.data[i].profile.first_name} ${response.data[i].profile.last_name}<br>Address:${response.data[i].practices[0].visit_address.street} <br>Phone:${response.data[i].practices[0].phones[0].number}<br>Websites:${response.data[i].practices[0].website}<br>Accepts new patients:${response.data[i].practices[0].accepts_new_patients}</li>`);
      }

    }
    function error(){
      $('#errors').text("There was an error processing your request. Please try again.");
    }

    Doctor.getData(medicalIssue, name, city, showResults, error);
  });
});
