const images = [
    'https://via.placeholder.com/200?text=Afbeelding+1',
    'https://via.placeholder.com/200?text=Afbeelding+2',
    'https://via.placeholder.com/200?text=Afbeelding+3'
  ];

  document.getElementById("loadButton").onclick = function() {
    loadImages(images);
  };

  function loadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(img);
      img.onerror = () => reject('Fout bij het laden van de afbeelding');
    });
  }

  async function loadImages(imageUrls) {
    const gallery = document.querySelector(".gallery");
    const progressBar = document.querySelector(".progress-bar");

    for (let i = 0; i < imageUrls.length; i++) {
      try {
        const img = await loadImage(imageUrls[i]);
        gallery.appendChild(img);
        const progress = ((i + 1) / imageUrls.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressBar.textContent = `${Math.round(progress)}%`;
      } catch (error) {
        console.error(error);
      }
    }
  }