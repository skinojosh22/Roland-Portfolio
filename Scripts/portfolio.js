function renderPortfolio() {
  if (typeof portfolioProjects === "undefined") return;
  const grid = document.querySelector('.portfolio-grid');
  if (!grid) return;
  grid.innerHTML = portfolioProjects.map(project => `
    <div class="portfolio-item" id="${project.id}" data-aos="fade-up" data-aos-duration="800"
      onclick="openPreview('preview-${project.id}')">
      <img src="${project.img}" alt="${project.alt}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank" class="portfolio-button">${project.buttonText}</a>
    </div>
  `).join('');
}

function renderPortfolioPreviews() {
  if (typeof portfolioPreviews === "undefined") return;
  portfolioPreviews.forEach(previewObj => {
    // Only inject the fullscreen preview, not another grid item
    document.body.insertAdjacentHTML('beforeend', `
      <div class="portfolio-preview" id="${previewObj.id}" style="display:none;">
        <span class="close-btn" onclick="closePreview('${previewObj.id}')">&times;</span>
        <img src="${previewObj.preview.img}" alt="${previewObj.preview.alt}">
      </div>
    `);
  });
}

// Example preview open/close functions
function openPreview(id) {
  const preview = document.getElementById(id);
  if (preview) preview.style.display = "flex";
}
function closePreview(id) {
  const preview = document.getElementById(id);
  if (preview) preview.style.display = "none";
}

renderPortfolio();
renderPortfolioPreviews();