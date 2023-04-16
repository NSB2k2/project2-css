const clickBtns = document.querySelectorAll(".js-click-btn1");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const modalClose = document.querySelector(".js-modal-close");

// Hàm hiển thị modal (thêm class open vào modal)
function showModal() {
  modal.classList.add("open");
}

// Hàm ẩn modal(gỡ bỏ class open của modal)
function hiddenModal() {
  modal.classList.remove("open");
}

// Lặp qua từng thẻ button và nghe hành vi click
for (const clickBtn of clickBtns) {
  clickBtn.addEventListener("click", showModal);
}

// Nghe hành vi click vào button close
modalClose.addEventListener("click", hiddenModal);

modal.addEventListener("click", hiddenModal);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
