function submitForm() {
  var name = document.getElementById("nameInput").value;
  var email = document.getElementById("emailInput").value;

  if (validateName(name)) {
    saveData(name, email);
  }
}

function validateName(name) {
  if (name == "") {
    document.getElementById("nameInput").style.border = "1px solid #c62447";
    alert("Por favor insira seu nome!");
    return false;
  }

  if (!hasTwoOrMoreNames(name)) {
    document.getElementById("nameInput").style.border = "1px solid #c62447";
    alert("Por favor insira seu nome completo!");
    return false;
  }

  return true;
}

function hasTwoOrMoreNames(name) {
  var names = name.split(" ");
  return names.length >= 2;
}

function saveData(name, email) {
  document.getElementById("nameInput").style.border = "none";
  localStorage.setItem("nameInput", name);
  localStorage.setItem("emailInput", email);

  alert(
    "Você acaba de ser adicionade a nossa lista de espera! Verifique seu email :) (P.S: obviamente não vai ter nada no seu email pq isso é só um mock tá?? beijinhos científicos)"
  );
}
