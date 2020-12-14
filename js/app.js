/* EMAIL FORM HANDLING */

$('.form-button input').click(function(e){
  // do not submit form
  e.preventDefault();
  // save value if the form field is not blank or the default
  if( $('#email').val() !== '' && $('#email').val() !== 'Email' ){
    var val = $('#email').val();
    // add email address to message
    $('.form-message span').text(val);
    // show message (initially hidden in CSS)
    $('.form-message').fadeIn();
  }
})

// hide all tab content initially
$('.tab-content').hide();

// show kiwi content by default
$('#kiwi-jump').show();

// handle tab clicks
$('nav a').click(function(e){
  // don't jump down the page
  e.preventDefault();
  // remove "currr" class from all
  $('nav a').removeClass('currr');
  // save the user selection
  var currr = $(this).attr('href');
  // hide all tab content
  $('.tab-content').hide();
  // show selected tab content
  $(currr).show();
  $(this).addClass('currr');
});

$('h4').click(function(){
  if( $(this).hasClass('curr') ){
    // if current selection is open, close accordion
    $(this).next().removeClass('more');
    // and then remove current status
    $(this).removeClass('curr');
  } else {
    // if current selection is not open
    // remove current class from all headings
    $('h4').removeClass('curr');
    // add class to the current selection
    $(this).addClass('curr');
    // remove class from all accordion content
    $('.accordion-content').removeClass('more');
    // add class to the current accordion content
    $(this).next().addClass('more');
  }
})