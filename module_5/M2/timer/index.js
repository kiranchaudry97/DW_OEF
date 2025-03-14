let timer;
  let isCancelled = false;

  document.getElementById("startButton").onclick = function() {
    const seconds = parseInt(document.getElementById("seconds").value);
    startTimer(seconds);
  };

  document.getElementById("cancelButton").onclick = function() {
    cancelTimer();
  };

  function startTimer(seconds) {
    document.getElementById("startButton").disabled = true;
    document.getElementById("cancelButton").disabled = false;

    isCancelled = false;

    const promise = new Promise((resolve, reject) => {
      let remainingTime = seconds;
      const interval = setInterval(() => {
        if (isCancelled) {
          clearInterval(interval);
          reject("Timer geannuleerd.");
        } else if (remainingTime <= 0) {
          clearInterval(interval);
          resolve("Timer voltooid.");
        } else {
          document.getElementById("timerDisplay").textContent = remainingTime;
          remainingTime--;
        }
      }, 1000);
    });

    promise
      .then((message) => {
        document.getElementById("message").style.display = 'block';
        document.getElementById("message").textContent = message;
      })
      .catch((message) => {
        document.getElementById("message").style.display = 'block';
        document.getElementById("message").textContent = message;
      })
      .finally(() => {
        document.getElementById("startButton").disabled = false;
        document.getElementById("cancelButton").disabled = true;
      });
  }

  function cancelTimer() {
    isCancelled = true;
  }