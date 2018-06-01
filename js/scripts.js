$(document).ready(function() {
  $("form#track").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var industry = $("select#industry").val();
    var thrones = $("select#thrones").val();
    var drink = $("input:radio[name=drink]:checked").val();



  if (gender === 'male' && age <20) {
    $('#csharp').show();
  } else if (thrones === 'Cersei' && gender === 'female') {
    $('#cssreact').show();
  } else {
    $('#rubyrails').show();
  }








    event.preventDefault();



  });
});
