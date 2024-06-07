import initUseToggle from "./helpers/UseToggle.js";
import ImageInfo from "./tasks/task-1/image-info.js";

/**
 * Init sections scripts
 */
window.addEventListener("load", () => {
  ImageInfo.init();
  initUseToggle();
});
