const containerEl = document.querySelector(".container");

window.addEventListener("mousemove", (event) => {
  containerEl.innerHTML = `
  <div class="mouseEvent">
        ${event.clientX}
        <h4>X cursor position (px)</h4>
      </div>
      <div class="mouseEvent">
        ${event.clientY}
        <h4>Y cursor position(px)</h4>
      </div>`;
});
