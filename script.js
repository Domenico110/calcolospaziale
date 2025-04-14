function calcolaTempo() {
  const distanza = parseFloat(document.getElementById("distanza").value);
  const container = document.getElementById("risultati");
  container.innerHTML = "";

  if (isNaN(distanza) || distanza <= 0) {
    container.innerHTML = "<p>Inserisci una distanza valida in anni luce.</p>";
    return;
  }

  const C = 299792.458; // km/s, velocità della luce

  // Percentuali della luce da 1% a 100%
  const percentuali = Array.from({ length: 100 }, (_, i) => i + 1);

  // Sonde spaziali con dati reali
  const sonde = [
    { nome: "Parker Solar Probe", velocita: 192 },
    { nome: "Helios 2", velocita: 70.2 },
    { nome: "Helios 1", velocita: 66 },
    { nome: "Voyager 1", velocita: 17 },
    { nome: "New Horizons", velocita: 14 },
    { nome: "Voyager 2", velocita: 15 },
    { nome: "Galileo", velocita: 48 },
    { nome: "Juno", velocita: 265 }, // Flyby massimo
    { nome: "SOHO", velocita: 1 },
    { nome: "Cassini", velocita: 19 },
  ];

  // Conversione da anni luce a km
  const distanzaKm = distanza * 9.461e12;

  let html = "<h2>⏱️ Tempi di viaggio per " + distanza + " anni luce</h2>";
  html += "<table><tr><th>Velocità</th><th>Tempo</th></tr>";

  // Percentuali luce
  percentuali.forEach(p => {
    const velocita = (C * p) / 100; // velocità in km/s
    const tempoSecondi = distanzaKm / velocita;
    const tempoAnni = tempoSecondi / (60 * 60 * 24 * 365.25);
    html += `<tr><td>${p}% della luce (${velocita.toFixed(0)} km/s)</td><td>${tempoAnni.toFixed(2)} anni</td></tr>`;
  });

  html += "</table><br><h2>🚀 Tempi di viaggio con sonde reali</h2>";
  html += "<table><tr><th>Sonda</th><th>Velocità (km/s)</th><th>Tempo</th></tr>";

  // Sonde reali
  sonde.forEach(sonda => {
    const tempoSecondi = distanzaKm / sonda.velocita;
    const tempoAnni = tempoSecondi / (60 * 60 * 24 * 365.25);
    html += `<tr><td>${sonda.nome}</td><td>${sonda.velocita} km/s</td><td>${tempoAnni.toFixed(2)} anni</td></tr>`;
  });

  html += "</table>";

  container.innerHTML = html;
}
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("light-mode");

  const btn = document.getElementById("themeToggle");
  const isLight = body.classList.contains("light-mode");

  btn.textContent = isLight ? "🌙 Attiva modalità scura" : "🌞 Attiva modalità chiara";
}
