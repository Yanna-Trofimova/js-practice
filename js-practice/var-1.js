
const colors = [
  {hex:`#ffff00` , rgb:`255, 223, 0`},
  {hex:`#0000FF` , rgb:`0, 0, 255`},
  {hex:`#9F2B68` , rgb:`159, 43, 104`},
]


const paletteContainer = document.querySelector(`.js-palette`);
const cardMarkup = creatColorsCardMarkup(colors);


paletteContainer.insertAdjacentHTML(`beforeend`, cardMarkup);

paletteContainer.addEventListener("click", onPaletteContainerClick);


function creatColorsCardMarkup(colors) {
  return colors.map(({ hex, rgb }) => {
    return `
    <div class="color-card">
      <div><div><div><div class="color-swatch"
        data-hex="${hex}"
        data-rgb="${rgb}"
        style="background-color: ${hex};"></div></div></div></div>

        <div class="color-meta">
          <p> HEX: ${hex}</p>
          <p> RGB: ${rgb}</p>
        </div>
    </div>
    `;
  }
  )
    .join(``);
}



function onPaletteContainerClick (evt) {
  const isColorSwatchEl = evt.target.classList.contains(`.color-swatch`);

  if (!isColorSwatchEl) {
    return;
  }

  const swatchEl = evt.target;
  const parentColorCard = swatchEl.closest(`.color-card`);

  removeActiveCardClass();
  addActiveCardClass(parentColorCard);
  setBodyBgColor(swatchEl.dataset.hex);
}


function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}


function removeActiveCardClass() {
  const currentActiveClass = document.querySelector(`.color-card.is-active`);

  if (currentActiveClass ) {
    currentActiveClass.classList.remove(`.is-active`);
  }
}

function addActiveCardClass (card) {
  card.classList.add(`.is-active`);
}