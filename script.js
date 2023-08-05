function showText(msg) {
  alert(msg);
}

const boardInfo = document.querySelector(".board-info");
const form = document.querySelector(".form");
let contactForm = document.querySelector("#contact-form");

function handleContactBtn() {
  boardInfo.style.display = "none";
  form.style.display = "flex";
  let email = $("email").value;
  let phoneNumber = $("phoneNumber").value;
  alert(
    "Thông tin bạn vừa nhập là:\n\nEmail: " +
      email +
      "\nSố điện thoại: " +
      phoneNumber
  );
}

function handleSubmitBtn() {
  let email = document.getElementById("email").value; //$("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value; //$("phoneNumber").value;
  if (email != "" && phoneNumber != "") {
    if (ValidateEmail(email) && ValidatePhoneNumber(phoneNumber)) {
      alert(
        "Thông tin bạn vừa nhập là:\n\nEmail: " +
          email +
          "\nSố điện thoại: " +
          phoneNumber
      );
    }
  } else alert("Vui lòng nhập đầy đủ thông tin");
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
  var phoneNoNational =
    /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
  if (phoneNumber.match(phoneno) || phoneNumber.match(phoneNoNational)) {
    return true;
  } else {
    alert("Bạn nhập sai định dạng số điện thoại!");
    return false;
  }
}
