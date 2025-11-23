const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const analyzeBtn = document.getElementById("analyzeBtn");
const loading = document.getElementById("loading");
const feedbackList = document.getElementById("feedbackList");
const scoreText = document.getElementById("scoreText");
const infoSection = document.getElementById("infoSection");
const resultSection = document.getElementById("resultSection");

const feedbackOptions = [
  "Logo placement looks good",
  "Font contrast could be improved",
  "Text covers too much of the image",
  "Brand color used correctly",
  "Font size slightly small",
  "Review Your Creative Again",
  "Instagram , Pintrest and Twitter Friendly",
  "Youtube and Facebook Friendly",
  "Arratai and Whatsapp Friendly"
];

imageInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      preview.src = event.target.result;
      preview.classList.remove("hidden");
    };
    reader.readAsDataURL(file);
  }
});

analyzeBtn.addEventListener("click", () => {
  if (!preview.src) {
    alert("Please upload an image first!");
    return;
  }

  loading.classList.remove("hidden");
  resultSection.classList.add("hidden");
  infoSection.classList.remove("hidden");

  setTimeout(() => {
    loading.classList.add("hidden");
    infoSection.classList.add("hidden");
    resultSection.classList.remove("hidden");

    // Generate random feedback on Current analysis
    feedbackList.innerHTML = "";
    const randomFeedback = feedbackOptions.sort(() => 0.5 - Math.random()).slice(0, 3);
    randomFeedback.forEach(line => {
      const li = document.createElement("li");
      li.textContent = line;
      feedbackList.appendChild(li);
    });

    // Random score for craetives
    const score = Math.floor(Math.random() * 40) + 60;
    scoreText.textContent = `Compliance Score: ${score}%`;
  }, 2000);
});
