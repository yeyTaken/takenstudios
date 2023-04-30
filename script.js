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

  //============
  function aceitarCookies() {
    // define o cookie com uma validade de 30 dias
    var data = new Date();
    data.setTime(data.getTime() + (30 * 24 * 60 * 60 * 1000));
    var expires = "expires="+ data.toUTCString();
    document.cookie = "cookiesAceitos=true;" + expires + ";path=/";
    // remove o aviso de cookies
    document.getElementById("aviso-de-cookies").style.display = "none";
  }
  
