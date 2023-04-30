const nome = document.getElementById("nome");
nome.classList.add("clip-path");

//===============
const infoButton = document.querySelector('.info-button');
const infoPanel = document.querySelector('.info-panel');

infoButton.addEventListener('click', function() {
    if (infoPanel.style.display === 'block') {
      infoPanel.style.display = 'none';
    } else {
      infoPanel.style.display = 'block';
    }
  });