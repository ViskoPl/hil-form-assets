function checkIfToManyIndustries() {
  if($('.industry[type="checkbox"]:checked').length > 5) {
      $('.industry_error_message').addClass('show');
      $('#submit_button').addClass("industry-disabled")
  } else {
      $('#submit_button').removeClass("industry-disabled")
      $('.industry_error_message').removeClass('show');
  }
}

jQuery(function() {
  checkIfToManyIndustries();

  $(document).on('change', '.industry', function(event){
      console.log("test");
      checkIfToManyIndustries();
  })
});