const result = document.querySelector(".result");
const form = document.querySelector(".get-weather");
const nameCity = document.querySelector("#city");
const nameCountry = document.querySelector("#country");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nameCity.value === "") {
    showError("Este campo es obligatorio");
    return;
  }

  callAPI(nameCity.value);
});

function callAPI(city) {
  const apiId = "9ddc16b70f53072ae2df522a38611e16";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}`;

  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((dataJSON) => {
      if (dataJSON.cod === "404") {
        showError("Ciudad no encontrada...");
      } else {
        clearHTML();
        showWeather(dataJSON);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function showWeather(data) {
  const {
    name,
    main: { temp, temp_min, temp_max },
    weather: [arr],
  } = data;

  const degrees = kelvinToCentigrade(temp);
  const min = kelvinToCentigrade(temp_min);
  const max = kelvinToCentigrade(temp_max);

  const content = document.createElement("div");
  content.innerHTML = `
         <h5>Clima en ${name}</h5>
        <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="icon">
         <h2>${degrees}°C</h2>
         <p>Max: ${max}°C</p>
         <p>Min: ${min}°C</p>
     `;

  result.appendChild(content);
}

function kelvinToCentigrade(temp) {
  return parseInt(temp - 273.15);
}

function clearHTML() {
  result.innerHTML = "";
}
