const mainNav = document.querySelector(".main-nav");
const menuToggle = document.querySelector(".main-nav__toggle");
const form = document.querySelector(".review__form");
const name = document.querySelector(".name");
const surname = document.querySelector(".surname");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const message = document.querySelector(".message");
const mError = document.querySelector(".modal-error");
const mCloseBtns = document.querySelectorAll(".modal-close");
const mSuccess = document.querySelector(".modal-success");

mainNav.classList.add("main-nav--closed");
menuToggle.classList.add("main-nav__toggle--v");

if (form) {
  name.required = false;
  surname.required = false;
  email.required = false;
  phone.required = false;
}

if (menuToggle) {
  menuToggle.addEventListener("click", function (evt) {
    evt.preventDefault();
    mainNav.classList.toggle("main-nav--closed");
  });
}

if (form) {
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!name.value || !email.value || !surname.value || !phone.value) {
      if (!name.value) {
        name.classList.add("error");
      }
      if (!surname.value) {
        surname.classList.add("error");
      }
      if (!email.value) {
        email.classList.add("error");
      }
      if (!phone.value) {
        phone.classList.add("error");
      }
      document.querySelectorAll(".error").forEach(function (field) {
        field.addEventListener("change", function () {
          this.classList.remove("error");
        });
      });

      mError.classList.add("modal--show");
      document.body.classList.add("page-body--shadowed");
    } else {
      mSuccess.classList.add("modal--show");
      document.body.classList.add("page-body--shadowed");
    }
  });
};

if (mCloseBtns) {
  mCloseBtns.forEach(function (btn) {
    btn.addEventListener("click", function (evt) {
      evt.preventDefault();
      document.querySelector(".modal--show").classList.remove("modal--show");
      document.body.classList.remove("page-body--shadowed");
    });
  });
}
