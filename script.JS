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

function countdown() {
  // Set the date we're counting down to
  var countDownDate = new Date("Nov 26, 2021 03:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements with id="days", "hours", "minutes" and "seconds"
    document.getElementById("days").innerHTML = zeroPad(days);
    document.getElementById("hours").innerHTML = zeroPad(hours);
    document.getElementById("minutes").innerHTML = zeroPad(minutes);
    document.getElementById("seconds").innerHTML = zeroPad(seconds);

    // If the count down is finished show 00:00:00:00
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = "00";
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
    }
  }, 1000);
}

window.addEventListener("load", function () {
  countdown();
});

function zeroPad(num) {
  return num.toString().padStart(2, "0");
}
