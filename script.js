function showText(msg) {
  alert(msg);
}

const boardInfo = document.querySelector(".board-info");
const contactForm = document.querySelector(".contact-form");

function contact() {
  boardInfo.style.display = "none";
  contactForm.style.display = "flex";
}

function submit(email, phoneNumber) {
  if (ValidateEmail(email) && ValidatePhoneNumber(phoneNumber)) {
    alert(
      "Thông tin bạn vừa nhập là:\n\nEmail: " +
        email +
        "\nSố điện thoại: " +
        phoneNumber
    );
  }
}

function ValidateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  alert("Bạn nhập sai định dạng email!");
  return false;
}

function ValidatePhoneNumber(phoneNumber) {
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (phoneNumber.match(phoneno)) {
    return true;
  } else {
    alert("Bạn nhập sai định dạng số điện thoại!");
    return false;
  }
}
