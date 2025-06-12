async function buscarClima() {
  const apiKey = '5f1ceeb3d0614331f7b80bdf6adcf4a6'; 
  const ciudad = document.getElementById('city').value;
  const resultado = document.getElementById('resultado');

  if (!ciudad) {
    resultado.innerHTML = 'Por favor escribe una ciudad.';
    return;
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Ciudad no encontrada");

    const datos = await res.json();
    const clima = `
      <h2>${datos.name}, ${datos.sys.country}</h2>
      <p><strong>${datos.weather[0].description}</strong></p>
      <p>🌡️ Temperatura: ${datos.main.temp} °C</p>
      <p>💧 Humedad: ${datos.main.humidity}%</p>
      <p>💨 Viento: ${datos.wind.speed} m/s</p>
    `;
    resultado.innerHTML = clima;
  } catch (error) {
    resultado.innerHTML = `Error: ${error.message}`;
  }
}

