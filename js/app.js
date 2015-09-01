//change height of backgorund pics to the height of the window
$(".background-pic").css("min-height", $(window).height());

//add css class to navbar buttons when hovered over
$(".navbar-right button").hover(function() {
	$(this).addClass("btn-primary");
}, function() {
	$(this).removeClass("btn-primary");
});

//change css and html of project divs when hovered over
var currentHTML = "no hover";
$(".project").hover(function() {
	currentHTML = $(this).html();
	$(this).css("background-color", "rgba(75, 75, 75, 0.25)");
	$(this).html("<h1>Coming Soon!</h1>")
}, function() {
	$(this).css("background-color", "");
	$(this).html(currentHTML);
});