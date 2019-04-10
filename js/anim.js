function animations() {
  const searchBtn = document.getElementById("search-btn");
  const search = document.getElementById("search");

  var i = 0;
  var message = "Matrix, Julien Doré...";
  var speed = 100;

  searchBtn.addEventListener("click", () => {
    search.style.width = "80%";
    search.style.paddingLeft = "60px";
    search.focus();
    search.style.cursor = "text";
    typeWriter();
  });

  function typeWriter() {
    if (i < message.length) {
      msg = search.getAttribute("placeholder") + message.charAt(i);
      search.setAttribute("placeholder", msg);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  function smoothArriving() {
    TweenMax.from(".line1", 1, {
      opacity: 0,
      y: -50,
      ease: Power2.easeInOut
    });

    TweenMax.from(".line2", 1, {
      delay: 0.5,
      opacity: 0,
      y: -50,
      ease: Power2.easeInOut
    });

    TweenMax.from(".line3", 1, {
      opacity: 0,
      y: -50,
      ease: Power2.easeInOut
    });

    TweenMax.from(".title", 1, {
      opacity: 0,
      y: -70,
      ease: Power2.easeInOut
    });

    TweenMax.from(".form", 1, {
      delay: 0.5,
      opacity: 0,
      y: -60,
      ease: Power2.easeInOut
    });
  }
  smoothArriving();
}

animations();
