document.getElementById("clickButton").onclick = async function() {
    let counter = 0;
    const counterElement = document.querySelector(".counter");
    const messageElement = document.querySelector(".message");

    const waitForClick = () => new Promise(resolve => {
      document.getElementById("clickButton").onclick = () => resolve();
    });

    while (counter < 5) {
      await waitForClick();  
      counter++;
      counterElement.textContent = counter;  
    }

    messageElement.textContent = "Gefeliciteerd, je hebt 5 keer geklikt!";
  };