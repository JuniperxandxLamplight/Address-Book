$(function(){
  $(".modal-footer button").click(function(){
    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var phoneType = $("#phone-type").val();
    var phoneNumber = $("#phone-number").val();
    var birthday = $("#birthday").val();
    var email = $("#email").val();
    var address = $("#address").val();

    $("ul").append("<li class='col-md-4'><img src='imgs/person.jpg'><h3>" + firstName + " " + lastName + "<h3></li>");
    $("ul").children('li').last().click(function(){
      $(".contact-window").slideDown('slow');
      $('.contact-name').text(firstName + ' ' + lastName);
      $('.contact-phone-number').text(phoneType + ": " + phoneNumber);
      $('.contact-birthday').text(birthday);
      $('.contact-email').text(email);
      $('.contact-address').text(address);
    });


  });
  $(".close").click(function(){
    $(".contact-window").slideUp('slow');
  });
});
