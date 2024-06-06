/**
 * Function that handles functionalities of image-info section
 */
function ImageInfo() {
  // Constants
  const CLASS_HIDDEN = "hidden";
  const BUTTON_TEXT_MORE = "Learn more";
  const BUTTON_TEXT_HIDE = "Hide";

  // Elements
  let learnMoreBtn;
  let learnMoreBtnTextPlaceholder;
  let additionalDescription;

  /**
   * Initilize section elements
   */
  function initElements() {
    learnMoreBtn = document.getElementsByClassName("js-learn-more-btn")[0];
    learnMoreBtnTextPlaceholder =
      learnMoreBtn.getElementsByClassName("c-button__text")[0];
    additionalDescription = learnMoreBtn.parentNode.getElementsByClassName(
      "js-additional-description"
    )[0];
  }

  /**
   * Initilize section events
   */
  function initEvents() {
    learnMoreBtn.addEventListener("click", handleButtonClick); // Init click event listener for Learn More button
  }

  /**
   * Handles Learn More button click
   */
  function handleButtonClick() {
    let maxHeight = getComputedStyle(additionalDescription).maxHeight; // Get element max height

    if (maxHeight == "0px") {
      // Show paragraph and update button text
      showElement(additionalDescription);
      learnMoreBtnTextPlaceholder.innerText = BUTTON_TEXT_HIDE;
    } else {
      // Hide paragraph and update button text
      hideElement(additionalDescription, 0);
      learnMoreBtnTextPlaceholder.innerText = BUTTON_TEXT_MORE;
    }

    additionalDescription.classList.toggle(CLASS_HIDDEN); // Toggle class hidden
  }

  /**
   * Function responsible for revealing element by setting it's max-height equal to scrollHeight
   */
  function showElement(element) {
    element.style.maxHeight = element.scrollHeight + "px";
  }

  /**
   * Function responsible for hiding element by setting it's max-height to 0
   */
  function hideElement(element) {
    element.style.maxHeight = 0 + "px";
  }

  /**
   * Init Image info functionalities
   */
  function init() {
    initElements();
    initEvents();
  }

  return {
    init,
  };
}

export default new ImageInfo();
