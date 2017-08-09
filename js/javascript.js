$(document).ready(function(){
  $('#name-address').submit(function(){
    event.preventDefault();
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var itemInput = $("input:radio[name=item]:checked").val();

    $("#display2").append(itemInput);
    $("#display").text(nameInput);
    $("#display1").text(addressInput);

    $('#name-address input[type="radio"]').each(function(){
      $(this).prop('checked', false);
    });

    $("#receipt").show();


  });
});
