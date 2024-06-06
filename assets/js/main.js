import initUseToggle from "./helpers/UseToggle.js";
import ImageInfo from "./sections/image-info.js";

/**
 * Init sections scripts
 */
window.addEventListener("load", () => {
  ImageInfo.init();
  initUseToggle();
});
