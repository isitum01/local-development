import ObserverHelper from "../../helpers/ObserverHelper.js";

/**
 * Function that handles functionalities of image-info section
 */
function ImageInfo() {
  // Constants
  const CLASS_REVEAL = "reveal";
  const CLASS_SECTION_SELECTOR = "js-image-info";

  /**
   * Initilize section observer
   */
  function initObserver() {
    let observer = new ObserverHelper(
      `.${CLASS_SECTION_SELECTOR}`,
      CLASS_REVEAL
    );
    observer.init();
  }

  /**
   * Init Image info functionalities
   */
  function init() {
    initObserver();
  }

  return {
    init,
  };
}

export default new ImageInfo();
