const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal("h3", {
    ...scrollRevealOption,
  });
  ScrollReveal().reveal("h1", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
  });
  ScrollReveal().reveal(" h2", {
    ...scrollRevealOption,
    origin: "right",
    delay: 1000,
  });
  ScrollReveal().reveal("button", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  ScrollReveal().reveal("li", {
    ...scrollRevealOption,
    origin: "top",
    interval: 300,
    delay: 2000,
  });
  
  ScrollReveal().reveal("a", {
    duration: 500,
    interval: 500,
    delay: 2000,
  });

  ScrollReveal().reveal(".contact", {
    duration: 500,
    interval: 500,
    delay: 2000,
  });

  
  ScrollReveal().reveal(".scroll", {
    duration: 500,
    interval: 500,
    delay: 2000,
  });

  ScrollReveal().reveal(".offer", {
    duration: 500,
    interval: 500,
    delay: 2000,
  });