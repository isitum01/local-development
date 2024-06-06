/**
 * Custom element component used for toggling content with control button
 * To use it just wrap the section within the <use-toggle> element.
 * Add toggle-control attribute on the button responsible for toggling the content.
 * Add toggle-content attribute on the content that is being toggled
 */
class UseToggle extends HTMLElement {
  constructor() {
    super();
    this.constants = {
      BUTTON_TEXT_MORE: "Learn more",
      BUTTON_TEXT_HIDE: "Hide",
      CLASS_HIDDEN: "hidden",
    };

    this.initElements();
    this.initEvents();
  }

  initElements() {
    this.toggleButton = this.querySelector("[toggle-control]");
    this.toggleButtonPlaceholder = this.toggleButton.querySelector("span");
    this.toggleContent = this.querySelector("[toggle-content]");
  }

  initEvents() {
    this.toggleButton.addEventListener("click", this.handleButtonClick);
  }

  /**
   * Handles toggle button click
   */
  handleButtonClick = () => {
    // Toggle additional description visibility
    let maxHeight = getComputedStyle(this.toggleContent).maxHeight;

    if (maxHeight == "0px") {
      this.showElement(this.toggleContent);
      this.toggleButtonPlaceholder.innerText = this.constants.BUTTON_TEXT_HIDE;
    } else {
      this.hideElement(this.toggleContent, 0);
      this.toggleButtonPlaceholder.innerText = this.constants.BUTTON_TEXT_MORE;
    }

    // Toggle class hidden
    this.toggleContent.classList.toggle(this.constants.CLASS_HIDDEN);
  };

  /**
   * Function responsible for revealing element by setting it's max-height equal to scrollHeight
   */
  showElement = (element) => {
    element.style.maxHeight = element.scrollHeight + "px";
  };

  /**
   * Function responsible for revealing element by setting it's max-height to 0
   */
  hideElement = (element) => {
    element.style.maxHeight = 0 + "px";
  };
}

export default function initUseToggle(params) {
  customElements.define("use-toggle", UseToggle);
}
