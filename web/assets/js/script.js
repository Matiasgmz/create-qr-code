var inputUrl = document.getElementById("inputUrl");
var buttonGenQR = document.getElementById("genQR");
const sectionDownload = document.getElementById("sectionDownload");

// sms: 0750455364&body= test pour envoyer un sms
const btnUrl = document.getElementById("btnUrl");
const btnPhone = document.getElementById("btnPhone");
const btnSms = document.getElementById("btnSms");

const sectionUrl = document.getElementById("sectionUrl");
const sectionPhone = document.getElementById("sectionPhone");
const sectionSms = document.getElementById("sectionSms");

btnUrl.addEventListener("click", function () {
  btnUrl.classList.add("active");
  btnPhone.classList.remove("active");
  btnSms.classList.remove("active");

  sectionUrl.classList.remove("d-none");
  sectionUrl.classList.add("d-block");

  sectionPhone.classList.add("d-none");
  sectionSms.classList.add("d-none");
});

btnPhone.addEventListener("click", function () {
  btnPhone.classList.add("active");
  btnUrl.classList.remove("active");
  btnSms.classList.remove("active");

  sectionPhone.classList.remove("d-none");
  sectionUrl.classList.add("d-block");

  sectionSms.classList.add("d-none");
  sectionUrl.classList.add("d-none");
});

btnSms.addEventListener("click", function () {
  btnSms.classList.add("active");
  btnUrl.classList.remove("active");
  btnPhone.classList.remove("active");

  sectionSms.classList.remove("d-none");
  sectionSms.classList.add("d-block");

  sectionPhone.classList.add("d-none");
  sectionUrl.classList.add("d-none");
});

function generateQrCode() {
  document.getElementById("qrcode").innerHTML = "";

  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: inputUrl.value,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
    border: 2,
  });

  (async function () {
    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });

    const qrcodeImg = document.querySelector("#qrcode img");
    const qrcodeImgSrc = qrcodeImg.src;
    sectionDownload.innerHTML =
      '<a class="text-decoration-none text-light fs-5 btn btn-dark " href="' +
      qrcodeImgSrc +
      '" download="qrcode.png"><i class="fa-solid fa-download fa-beat"></i><br>Telecharger</a>';
  })();
}

inputUrl.addEventListener("keyup", function (e) {
  if (inputUrl.value.length > 0) {
    generateQrCode();
  } else {
    document.getElementById("qrcode").innerHTML = "";
    sectionDownload.innerHTML = "";
  }
});
