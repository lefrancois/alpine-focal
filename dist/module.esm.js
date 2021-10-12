// src/index.js
function src_default(Alpine) {
  Alpine.directive("focal", (el, {expression}) => {
    const parts = expression.split(" ");
    let xOffset = parts[0] || "50%";
    let yOffset = parts[1] || "50%";
    let edit = parts[2] || false;
    if (edit) {
      el.style["object-fit"] = "";
      el.onclick = (e) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const shiftCenterX = (rect.width / 2 - x * rect.width) / rect.width;
        const shiftCenterY = (rect.height / 2 - y * rect.height) / rect.height;
        xOffset = (x - shiftCenterX / 2) * 100;
        yOffset = (y - shiftCenterY / 2) * 100;
        if (xOffset > 100)
          xOffset = 100;
        if (xOffset < 0)
          xOffset = 0;
        if (yOffset > 100)
          yOffset = 100;
        if (yOffset < 0)
          yOffset = 0;
        xOffset = Math.round(xOffset);
        yOffset = Math.round(yOffset);
        const xPixelOffset = Math.round(xOffset / 100 * el.naturalWidth);
        const yPixelOffset = Math.round(yOffset / 100 * el.naturalHeight);
        el.style["object-fit"] = "cover";
        el.style["object-position"] = `${xOffset}% ${yOffset}%`;
        alert(`Use ${xOffset}% ${yOffset}% or ${xPixelOffset}px ${yPixelOffset}px`);
      };
    } else {
      if (xOffset.endsWith("x")) {
        xOffset = `${parseInt(xOffset) * 100 / el.naturalWidth}%`;
      }
      if (yOffset.endsWith("x")) {
        yOffset = `${parseInt(yOffset) * 100 / el.naturalHeight}%`;
      }
      el.style["object-fit"] = "cover";
      el.style["object-position"] = `${xOffset} ${yOffset}`;
    }
  });
}

// builds/module.js
var module_default = src_default;
export {
  module_default as default
};
