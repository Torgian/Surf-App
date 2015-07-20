$(document).ready(function() {
  $('.toggle-nav').click(function(e) {
    
    $(this).toggleClass('active');
    $('.menu ul').toggleClass('active');

   $('.arrow').toggleClass('rotate'); 

    e.preventDefault();
  });


 $('form').submit(function (evt) {
    evt.preventDefault();
    var $searchTerm = $('#search');
    var $submitButton = $('#submit');
   
   $searchTerm.prop("disabled", true);
   $submitButton.attr("disabled", true).val("searching....");
    
   
    // the AJAX part
    //surfTwAPI link: placeholder
    var surfTwAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var search = $searchTerm.val();
    var surfOptions = {
      tags: search,
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

