const testimonialsList = document.getElementById("testimonials-list");
let clients = [];

const fetchClients = async () => {
  try {
    const response = await fetch("clients.json");
    const clients = await response.json();
    return clients;
  } catch (error) {
    console.error("error:", error);
  }
};

function displayClients(clients) {
  testimonialsList.innerHTML = "";
  clients.forEach((client) => {
    const element = document.createElement("div");
    element.classList.add("quotes");
    element.dataset.name = client.name;

    element.innerHTML = `
    <img class="round" src=${client.photo} alt="${client.photo}">
    <p class="comment">${client.comment}</p>
    <div class="bottom-text">
    <h3 class="name">${client.name}</h3>
    <span class="profession">${client.profession}</span>
    </div>
    </div>`;

    testimonialsList.appendChild(element);
  });
}

fetchClients().then((clients) => {
  if (clients) {
    element = clients;
    displayClients(element);
  }
});

// ----- Responsive sidebar ----- //

const sidebar = document.getElementById("responsive-icon");
const sideMenu = document.getElementsByClassName("boutons");
