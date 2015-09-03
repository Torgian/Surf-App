$(document).ready(function() {
  //var html = '';
  

  $('.toggle-nav').click(function(e) {
    
    $(this).toggleClass('active');
    $('.menu ul').toggleClass('active'); 

    e.preventDefault();
  });

  $('li a').click(function(event){
    $('.toggle-nav').prop('value', this.text);
    $('.menu ul').toggleClass('active');
    $('.toggle-nav').toggleClass('active');
    var beach = $('.toggle-nav').prop('value');    
    var beachHTML = $("#beach_info").html(function()  {
      var Html ='';
      Html += $("#beach_info").append($("<div id='titleBar'/>"));
      //clear the area!
      $( "#titleBar" ).empty();
      //Title bar for beach name
      Html += $('#titleBar').append(beach + " Surf Report");
      //Surf info. Divided into date, surf, swell, wind, weather         

                       
      Html += makeTable($('#titleBar'), data1);
      //Timestamp
      var myDate = new Date(resultsData.timestamp *1000); 
      $('.CSSTableGenerator').before($("<div id='dateDiv'/>"));
      $('#dateDiv').append(myDate.toGMTString());
      
          
     

        
  });



  
  



    
  })








   $('form').submit(function (evt) {
    evt.preventDefault();
    var $searchTerm = $('#search');
    var $submitButton = $('#submit');
   
   $searchTerm.prop("disabled", true);
   $submitButton.attr("disabled", true).val("searching....");
    
   
    // the AJAX part
    //surfTwAPI link: placeholder
    var surfTwAPI = "";
    
    var surfOptions = {
      
      format: "json"
    };
    function displaySurf(data) {
      var surfHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        surfHTML += '<li class="grid-25 tablet-grid-50">';
        surfHTML += surfOptions.swell.minBreakingHeight;
        surfHTML += '<img src="icons/swell"></a></li>';
      }); // end each
      surfHTML += '</ul>';
      $('#location').html(surfHTML);
      $searchTerm.prop("disabled", false);
      $submitButton.attr("disabled", false).val("Search");
    }
    $.getJSON(surfTwAPI, surfOptions, displaySurf);

  }); // end click
}); //end Json form submit

