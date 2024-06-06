/**
 * Observer Helper Function
 *
 * This function initializes an IntersectionObserver to monitor the visibility of elements specified by the given selector.
 * When the observed elements enter or exit the viewport, the function toggles the specified CSS class on these elements.
 *
 * @param {string} selector - A CSS selector string to identify the elements to be observed.
 * @param {string} toggleClass - The CSS class to be toggled on the elements based on their visibility in the viewport.
 */
function ObserverHelper(selector, toggleClass) {
  // Elements
  let observedElements;
  let observer;

  /**
   * Initilize elements
   */
  function initElements() {
    observedElements = document.querySelectorAll(selector);
    observer = setObserver();
  }

  /**
   * Prepares observer
   */
  function setObserver() {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(toggleClass, entry.isIntersecting);
        });
      },
      {
        threshold: 0.7,
      }
    );
  }

  /**
   * Triggers observer to start observing for provided elements
   */
  function startObserver() {
    observedElements.forEach((element) => {
      observer.observe(element);
    });
  }

  function init() {
    initElements();
    startObserver();
  }

  return {
    init,
  };
}

export default ObserverHelper;
