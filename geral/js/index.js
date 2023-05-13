const nome = document.getElementById("nome");
nome.classList.add("clip-path");

//===============
const infoButton = document.querySelector('.info-button');
const infoPanel = document.querySelector('.info-panel');

infoButton.addEventListener("click", function() {
  infoButton.classList.toggle("active");
  infoPanel.classList.toggle("active");
});

window.addEventListener("click", function(event) {
  if (!event.target.matches(".info-button") && !event.target.matches(".info-panel") && panelButton.classList.contains("active")) {
    infoButton.classList.remove("active");
    infoPanel.classList.remove("active");
  }
});

  //============
  const panelButton = document.querySelector(".panel-button");
  const linkPanel = document.querySelector(".link-panel");
  
  panelButton.addEventListener("click", function() {
    panelButton.classList.toggle("active");
    linkPanel.classList.toggle("active");
  });
  
  window.addEventListener("click", function(event) {
    if (!event.target.matches(".panel-button") && !event.target.matches(".link-panel") && panelButton.classList.contains("active")) {
      panelButton.classList.remove("active");
      linkPanel.classList.remove("active");
    }
  });
  