window.addEventListener('load', function() {
    const loadingDiv = document.getElementById('loadingMessage');
    
    loadingDiv.textContent = 'Welcome!';
    
    setTimeout(function() {
      loadingDiv.style.display = 'none';
    }, 2000);
  });