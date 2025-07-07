const images = [
    "url('images/cycle1.jpg')",
    "url('images/cycle2.jpg')",
    "url('images/cycle3.jpg')"
  ];

  let index = 0;
  const slider = document.getElementById('imagehead3');

  function cycleImages() {
    slider.style.backgroundImage = images[index];
    index = (index + 1) % images.length;
  }

  cycleImages(); 
  setInterval(cycleImages, 4000); 