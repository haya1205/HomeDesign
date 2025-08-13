document.getElementById('feedbackForm').addEventListener('submit', function(e){
  e.preventDefault(); // prevent actual submission
  alert("Thank you for your feedback!");
  this.reset(); // optional: clear form fields
});