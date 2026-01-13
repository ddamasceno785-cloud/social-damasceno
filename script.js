function login() {
  const name = document.getElementById("username").value.trim();
  const key = document.getElementById("key").value.trim();

  if (name === "") {
    alert("Digite seu nome ❗");
    return;
  }

  if (key !== "453") {
    alert("Chave incorreta ❗");
    return;
  }

  // SALVA USUÁRIO
  localStorage.setItem("social_damasceno_user", name);

  // TROCA TELAS
  document.getElementById("login").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
}

function like() {
  alert("Você curtiu ❤️");
}

function comment() {
  const texto = prompt("Digite seu comentário:");
  if (texto) {
    alert("Comentário enviado 💬");
  }
}

function share() {
  alert("Compartilhamento simulado 🔗");
}

function showFeed() {
  // já está no feed
}

function createVideo() {
  alert(
    "❗ Não é possível criar vídeos pelo site.\n\nCrie o vídeo no seu celular e depois envie."
  );
}

function profile() {
  const user = localStorage.getItem("social_damasceno_user");
  alert(
    "Canal: " + user +
    "\n\nPerfil em construção 👤"
  );
}
