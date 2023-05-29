// Get the poll form and result elements
const pollForm = document.querySelector('#poll form');
const javascriptCount = document.querySelector('#javascript-count');
const pythonCount = document.querySelector('#python-count');
const javaCount = document.querySelector('#java-count');

// Check if the user has already voted
const hasVoted = localStorage.getItem('hasVoted');

// Disable the form if the user has already voted
if (hasVoted) {
  disableForm();
}

// Event listener for form submission
pollForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Check if the user has already voted
  if (hasVoted) {
    alert('You have already voted!');
    return;
  }

  // Get the selected language
  const selectedLanguage = document.querySelector('input[name="language"]:checked').value;

  // Update the vote count based on the selected language
  if (selectedLanguage === 'javascript') {
    javascriptVotes++;
    javascriptCount.textContent = javascriptVotes;
  } else if (selectedLanguage === 'python') {
    pythonVotes++;
    pythonCount.textContent = pythonVotes;
  } else if (selectedLanguage === 'java') {
    javaVotes++;
    javaCount.textContent = javaVotes;
  }

  // Set the flag indicating the user has voted
  localStorage.setItem('hasVoted', true);

  // Disable the form
  disableForm();
});

// Function to disable the form
function disableForm() {
  const inputs = pollForm.elements;
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  }
}
