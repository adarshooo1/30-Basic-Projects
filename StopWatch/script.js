// JavaScript code for stopwatch functionality
window.addEventListener('load', function() {
    var display = document.getElementById('display');
    var startButton = document.getElementById('start');
    var stopButton = document.getElementById('stop');
    var resetButton = document.getElementById('reset');
    
    var startTime, currentTime, elapsedTime = 0;
    var timerInterval;
  
    function formatTime(time) {
      var hours = Math.floor(time / 3600);
      var minutes = Math.floor((time % 3600) / 60);
      var seconds = time % 60;
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  
    function startTimer() {
      startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(function() {
        currentTime = Date.now();
        elapsedTime = Math.floor((currentTime - startTime) / 1000);
        display.textContent = formatTime(elapsedTime);
      }, 1000);
      startButton.disabled = true;
    }
  
    function stopTimer() {
      clearInterval(timerInterval);
      startButton.disabled = false;
    }
  
    function resetTimer() {
      clearInterval(timerInterval);
      elapsedTime = 0;
      display.textContent = '00:00:00';
      startButton.disabled = false;
    }
  
    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
  });
  