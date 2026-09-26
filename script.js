const form = document.getElementById("donorForm");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.getElementById("name").value;
  const blood = document.getElementById("blood").value;
  const location = document.getElementById("location").value;

  localStorage.setItem("donorName", name);
  localStorage.setItem("bloodGroup", blood);
  localStorage.setItem("location", location);

  document.getElementById("dashBlood").textContent = blood;
  document.getElementById("dashLocation").textContent = location;

  document.getElementById("successMessage").textContent =
    "✅ Registration successful! Welcome to Ride4Life, " + name + "!";

  document.getElementById("dashboard").scrollIntoView({
    behavior: "smooth"
  });

});

window.addEventListener("load", function() {

  const blood = localStorage.getItem("bloodGroup");
  const location = localStorage.getItem("location");

  if (blood) {
    document.getElementById("dashBlood").textContent = blood;
  }

  if (location) {
    document.getElementById("dashLocation").textContent = location;
  }

});

function donate() {

  let points = Number(localStorage.getItem("points")) || 0;

  points += 100;

  localStorage.setItem("points", points);

  document.getElementById("points").textContent = points;

  alert(
    "❤️ Thank you for responding!\n\n" +
    "Ride4Life has recorded your donation response."
  );
}
