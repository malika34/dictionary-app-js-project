const form = document.getElementById("dictForm");
const wordInput = document.getElementById("wordInput");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const word = wordInput.value.trim();
  if (!word) return;

  resultDiv.innerHTML = "<em>Loading...</em>";

  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();

    if (data.title === "No Definitions Found") {
      resultDiv.innerHTML = `<strong>No result found for "${word}".</strong>`;
      return;
    }

    const meanings = data[0].meanings;
    let output = `<h4>Results for: <span style="color:#007bff;">${word}</span></h4>`;

    meanings.forEach((meaning, index) => {
      const defs = meaning.definitions
        .map((def, i) => `${i + 1}. ${def.definition}`)
        .join("<br><br>");
      output += `
                <div style="margin-top: 1.2rem;">
                    <strong>Part of Speech:</strong> ${meaning.partOfSpeech}<br><br>
                    <strong>Definitions:</strong><br>${defs}
                </div>
            `;
    });

    resultDiv.innerHTML = output;
  } catch (error) {
    resultDiv.innerHTML =
      "<strong>Error fetching meaning. Please try again later.</strong>";
    console.error(error);
  }
});
