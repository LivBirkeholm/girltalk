// Lyt efter scrollbegivenheder
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  // Find højden på vinduet og dokumentet
  var windowHeight = window.innerHeight;
  var docHeight = document.body.clientHeight;
  // Find scrollpositionen
  var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

  // Hvis brugeren har scrollet til sektionen
  if (scrollPosition > (docHeight - windowHeight) / 2) {
    // Tilføj klassen til tekstelementet for at udløse animationen
    document.getElementById("tekstElement").classList.add("animateElement");
    // Tilføj klassen til billedet for at udløse animationen
    document.getElementById("billedeElement").classList.add("animateElement");
  }
});
