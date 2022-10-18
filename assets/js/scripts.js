const modal = document.querySelector("dialog");
const checkBox = document.querySelector("#checkbox-menu");
let modalStatus = false;

function toogleModal() {
  if(modalStatus) {
    modal.close()
  } else {
    modal.show()
  }
  modalStatus = !modalStatus;
}

function closeModal() {
  modal.close()
  checkBox.checked = false
  modalStatus = false;
}