const campaignList = document.getElementById("campaignList");
const defaultCampaigns = ["Sushiitto", "Alsea", "PRB", "Domino's", "Ceneval", "Start TV"];
const subtasks = ["Corte", "Análisis", "Entregable", "Kardex"];

// Crear campañas al cargar
window.onload = () => {
  defaultCampaigns.forEach(name => createCampaign(name));
};

// Función para crear campaña
function createCampaign(name) {
  const li = document.createElement("li");
  li.innerHTML = `
    <div class="campaign-title"><input type="checkbox"> ${name}</div>
    <ul class="subtasks">
      ${subtasks.map(task => `<li><label><input type="checkbox"> ${task}</label></li>`).join('')}
    </ul>
  `;
  campaignList.appendChild(li);
}

// Agregar una nueva campaña
function addCampaign() {
  const input = document.getElementById("newCampaignInput");
  const value = input.value.trim();
  if (value !== "") {
    createCampaign(value);
    input.value = "";
  }
}

// Limpiar campañas completadas
function clearCompleted() {
  const items = campaignList.querySelectorAll("li");
  items.forEach(item => {
    const mainCheckbox = item.querySelector(".campaign-title input[type='checkbox']");
    if (mainCheckbox && mainCheckbox.checked) {
      item.remove();
    }
  });
}
