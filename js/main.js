// get the current year for the copyright
$("#year").text(new Date().getFullYear());

// init sroll spy
$("body").scrollspy({ target: "#main-nav" });

// enable smooth scrolling
$("#main-nav a").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});
