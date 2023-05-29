function verifyCode() {
    var codeInput = document.getElementById("codeInput");
    var message = document.getElementById("message");
    var redirectButton = document.getElementById("redirectButton");
    var redirectLink = document.getElementById("redirectLink");
  
    var enteredCode = codeInput.value;
  
    // Clear the input field after reading the entered value
    codeInput.value = "";
  
    if (enteredCode === "702403") {
      message.style.color = "green";
      message.textContent = "Code Verified Successfully!";
      redirectButton.style.display = "block"; // Show the redirect button
      redirectLink.href = "newpage.html"; // Set the URL for redirection
    } else {
      message.style.color = "red";
      message.textContent = "Invalid Code. Please try again.";
      redirectButton.style.display = "none"; // Hide the redirect button if the code is invalid
    }
  }
  var failedAttempts = 0;

  function disableElements() {
    var codeInput = document.getElementById("codeInput");
    var verifyButton = document.getElementById("verifyButton");
    var redirectButton = document.getElementById("redirectButton");
    var message = document.getElementById("message");
  
    codeInput.disabled = true;
    verifyButton.disabled = true;
    redirectButton.style.display = "none"; // Hide the redirect button
    message.textContent = "Try again later";
  }
  
  function verifyCode() {
    var codeInput = document.getElementById("codeInput");
    var message = document.getElementById("message");
    var redirectButton = document.getElementById("redirectButton");
    var redirectLink = document.getElementById("redirectLink");
  
    var enteredCode = codeInput.value;
  
    // Clear the input field after reading the entered value
    codeInput.value = "";
  
    if (enteredCode === "702403") {
      message.style.color = "green";
      message.textContent = "Code Verified Successfully!";
      redirectButton.style.display = "block"; // Show the redirect button
      redirectLink.href = "newpage.html"; // Set the URL for redirection
    } else {
      failedAttempts++;
      message.style.color = "red";
      message.textContent = "Invalid Code. Please try again. Failed attempts: " + failedAttempts;
  
      // Disable everything and show "Try again later" message after 3 failed attempts
      if (failedAttempts >= 3) {
        disableElements();
      }
    }
  }
  window.onload = function() {
    createShapes();
    startBackgroundAnimation();
  };
  
  function createShapes() {
    const container = document.getElementById('shape-container');
  
    setInterval(function() {
      const shape = document.createElement('div');
      shape.className = 'shape';
      container.appendChild(shape);
  
      const initialX = getRandomNumber(-100, window.innerWidth + 100);
      const initialY = getRandomNumber(-100, window.innerHeight + 100);
      shape.style.left = `${initialX}px`;
      shape.style.top = `${initialY}px`;
  
      animateShape(shape);
    }, 500); // Generate bubbles every 500 milliseconds
  }
  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function animateShape(shape) {
    const colors = [
      '#0000FF', // Blue
      '#ADD8E6', // Light Blue
      '#008000', // Green
      '#90EE90', // Light Green
      '#FFFF00', // Yellow
      '#DAA520', // Dark Yellow
      '#FFA500', // Orange
      '#FF8C00', // Dark Orange
      '#FF0000', // Red
      '#FFC0CB', // Pink
      '#800080', // Purple
      '#00008B'  // Dark Blue
    ];
  
    const duration = getRandomNumber(13000, 12000);
    const transitionDuration = 500; // Duration for each color transition
    const size = getRandomNumber(20, 60); // Adjust the minimum and maximum size values as desired
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    shape.style.filter = 'blur(2px)'; // Adjust the blur intensity as desired



    let currentColorIndex = 0;
    let nextColorIndex = 1;
  
    shape.style.backgroundColor = colors[currentColorIndex];
  
    setInterval(function() {
      shape.style.transition = `background-color ${transitionDuration}ms linear`;
      shape.style.backgroundColor = colors[nextColorIndex];
  
      currentColorIndex = nextColorIndex;
      nextColorIndex = (currentColorIndex + 1) % colors.length;
    }, transitionDuration);
  
    const targetX = getRandomNumber(-1000, window.innerWidth + 1000);
    const targetY = getRandomNumber(-1000, window.innerHeight + 1000);
  
    shape.style.backgroundColor = colors[currentColorIndex] + '80'; // Add alpha value, e.g., '80' for 50% opacity
    shape.style.borderRadius = '50%'; // Make the shape circular

    shape.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.4)'; // Add a subtle shadow effect
  
    shape.style.transform = 'translateZ(0)'; // Enable hardware acceleration for smoother animation
    shape.style.transition = `transform ${duration}ms linear`;
  
    setTimeout(() => {
      shape.remove();
    }, duration);
  }
  
  

function startBackgroundAnimation() {
  const background = document.querySelector('.background');

  setInterval(function() {
    const randomColor = generateRandomColor();
    background.style.backgroundColor = randomColor;
  }, 5000); // Change color every 5 seconds
}

function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

var emailButton = document.getElementById("emailButton");
    var emailModal = document.getElementById("emailModal");
    var closeButton = document.getElementsByClassName("close")[0];
    var submitButton = document.getElementById("submitEmail");
    var codeSpan = document.getElementById("code");
    

    emailButton.onclick = function () {
      emailModal.style.display = "block";
    }

    closeButton.onclick = function () {
        closeEmailModal();
    }
    submitButton.onclick = function () {
      submitEmail();
    }

   
    


   

    function closeEmailModal() {
      emailModal.style.display = "none"; document.getElementById("emailInput").value = "";
    }

    function submitEmail() {
      var emailInput = document.getElementById("emailInput");
      var email = emailInput.value;

      if (validateEmail(email)) {
        confirmationModal.style.display = "block";
        closeEmailModal();
      } else {
        alert("Please enter a valid email address.");
      }
    }

    function validateEmail(email) {
      // A simple email validation using regular expression
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }

    document.addEventListener('DOMContentLoaded', function() {
      var scrollArrow = document.querySelector('.scroll-down-arrow');
      var nextPage = document.getElementById('next-page');
      
      var isScrollingDown = true;
      
      scrollArrow.addEventListener('click', function(e) {
          e.preventDefault();
          
          if (isScrollingDown) {
              nextPage.scrollIntoView({ behavior: 'smooth' });
              scrollArrow.innerHTML = '&#9650;'; // Unicode character for upward arrow
              isScrollingDown = false;
          } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              scrollArrow.innerHTML = '&#9660;'; // Unicode character for downward arrow
              isScrollingDown = true;
          }
      });
  });
  

  hello there. This is an easter egg