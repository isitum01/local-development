import Swiper from "../../../../node_modules/swiper/swiper-bundle.min.mjs";

class SwiperCarousel extends HTMLElement {
  constructor() {
    super();

    this.swiperParent = null;
    this.swiper = null;
    this.toggleButton = null;
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="swiper-carousel">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" style="background-image: url('./dist/images/slider-image-1.jpeg');">
          </div>
          <div class="swiper-slide" style="background-image: url('./dist/images/slider-image-2.jpeg');">
          </div>
          <div class="swiper-slide" style="background-image: url('./dist/images/slider-image-3.jpeg');">
          </div>
          <div class="swiper-slide" style="background-image: url('./dist/images/slider-image-1.jpeg');">
          </div>
          <div class="swiper-slide" style="background-image: url('./dist/images/slider-image-2.jpeg');">
          </div>
          <div class="swiper-slide" style="background-image: url('./dist/images/slider-image-3.jpeg');">
          </div>
        </div>          
      </div>
      <div class="swiper-control swiper-control--previous">
        <div class="swiper-control__arrow">
          <img src="./dist/images/icon-arrow.svg" />
        </div>
      </div>
      <div class="swiper-control swiper-control--next">
        <div class="swiper-control__arrow">
          <img src="./dist/images/icon-arrow.svg" />
        </div>
      </div>
    </div>
    `;

    this.initElements();
    this.initSwiper();
    this.initToggleButton();
  }

  /**
   * Initialize elements
   */
  initElements() {
    this.swiperParent = this.querySelector(".swiper-carousel");
  }

  /**
   * Swiper configuration
   */
  initSwiper() {
    this.swiper = new Swiper(this.querySelector(".swiper"), {
      loop: false,
      pagination: {
        el: this.querySelector(".swiper-pagination"),
        clickable: true,
      },
      navigation: {
        nextEl: this.querySelector(".swiper-control--next"),
        prevEl: this.querySelector(".swiper-control--previous"),
        disabledClass: "swiper-control--disabled",
      },
      slidesPerView: 2,
      spaceBetween: 8,
      breakpoints: {
        600: { slidesPerView: 3, loop: true },
      },
    });

    // Logging out the visible item index
    this.swiper.on("slideChange", () => {
      console.log("Active slide index:", this.swiper.realIndex);
    });
  }

  /**
   * Inits toggle button
   */
  initToggleButton() {
    this.toggleButton = document.querySelector("[data-toggle-slider]");
    this.toggleButton.addEventListener("click", this.toggleSlider);
  }

  /**
   * Handles slider toggle
   */
  toggleSlider = () => {
    if (this.swiper == null || this.swiper.destroyed) {
      this.initSwiper();
      this.swiperParent.classList.remove("destroyed");
    } else {
      this.swiper.destroy(false, false);
      this.swiperParent.classList.add("destroyed");
    }
  };
}

export default function initSwiperCarousel() {
  customElements.define("swiper-carousel", SwiperCarousel);
}
