function highlightStars(selectedStar) {
    var stars = document.querySelectorAll('.stars input[type="radio"]');
    
    for (var i = 0; i < stars.length; i++) {
      var star = stars[i];
      var label = star.nextElementSibling;
      
      if (parseInt(star.value) <= selectedStar) {
        label.style.color = "#ccc";
      } else {
        label.style.color = "yellow";
      }
      
      if (parseInt(star.value) === selectedStar) {
        star.checked = true;
        break;
      }
    }
  }

  const counterElement = document.querySelector('.counter');

  function updateCounter() {
    const randomTime = Math.floor(Math.random() * 5000) + 3000; // Random time between 3000 and 8000 milliseconds (3-8 seconds)
    setTimeout(() => {
      const count = Math.floor(Math.random() * 2001) + 1000; // Random number between 1000 and 3000
      counterElement.textContent = count;
      setTimeout(updateCounter, ); // Change duration (2000 milliseconds)
    }, randomTime);
  }
  
  updateCounter();

  const serverTrafficElement = document.getElementById('serverTraffic');
  let currentOffset = 0;
  
  function updateGradientPosition() {
    serverTrafficElement.style.backgroundPosition = `${currentOffset}% 50%`;
    currentOffset = (currentOffset + 1) % 100;
  }
  
  setInterval(updateGradientPosition, 50);
  

  
  document.addEventListener('DOMContentLoaded', function() {
    var newsletterPrompt = document.getElementById('newsletter-prompt');
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
  
    // Show the prompt after 10 seconds
    setTimeout(function() {
      document.body.appendChild(overlay);
      newsletterPrompt.style.display = 'block';
    }, 10000); // 10 seconds
  
    // Exit button click event to hide the prompt and remove overlay
    var exitButton = newsletterPrompt.querySelector('.exit-button');
    exitButton.addEventListener('click', function() {
      document.body.removeChild(overlay);
      newsletterPrompt.style.display = 'none';
    });
  });
  