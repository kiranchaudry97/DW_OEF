

  document.getElementById("startButton").onclick = function() {
    let colors = ["red", "green", "blue"];
    let i = 0;

    function changeColor() {
      if (i < colors.length) {
        document.body.style.backgroundColor = colors[i];
        i++;
        setTimeout(changeColor, 1000);
      }
    }

    changeColor();
  };

