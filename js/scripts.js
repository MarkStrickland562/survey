

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();

  $("#output").append("Your name is " + $("#name").val() + "<br>");
  $("#output").append("Your birthday is " + $("#date").val() + "<br>");
  $("#output").append("Your favorite food is " + $("#food").val() + "<br>");
	$("#output").append("Your favorite music " + $("input:radio[name=music]:checked").val() + "<br>");
	$("#output").append("Your favorite color (in hex) is " + $("#color").val() + "<br>");

	});
});
