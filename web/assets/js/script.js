if (
  window.location.href === "http://127.0.0.1:5500/web/" ||
  window.location.href === "https://generate-qrcode-weld.vercel.app/"
) {
  const sectionDownload = document.getElementById("sectionDownload");

  var inputUrl = document.getElementById("inputUrl");
  var inputPhone = document.getElementById("inputPhone");
  var inputSms = document.getElementById("inputSms");
  var inputSmsBody = document.getElementById("inputSmsBody");
  var inputEmail = document.getElementById("inputEmail");
  var inputEmailSubject = document.getElementById("inputEmailSubject");
  var inputEmailBody = document.getElementById("inputEmailBody");
  var inputColor = document.getElementById("inputColor");

  // sms: 0750455364&body= test pour envoyer un sms
  const btnUrl = document.getElementById("btnUrl");
  const btnPhone = document.getElementById("btnPhone");
  const btnSms = document.getElementById("btnSms");
  const btnEmail = document.getElementById("btnEmail");

  const sectionUrl = document.getElementById("sectionUrl");
  const sectionPhone = document.getElementById("sectionPhone");
  const sectionSms = document.getElementById("sectionSms");
  const sectionEmail = document.getElementById("sectionEmail");

  btnUrl.addEventListener("click", function () {
    btnUrl.classList.add("active");
    btnPhone.classList.remove("active");
    btnSms.classList.remove("active");
    btnEmail.classList.remove("active");

    sectionUrl.classList.remove("d-none");
    sectionUrl.classList.add("d-block");

    sectionPhone.classList.add("d-none");
    sectionSms.classList.add("d-none");
    sectionEmail.classList.add("d-none");
  });

  btnPhone.addEventListener("click", function () {
    btnPhone.classList.add("active");
    btnUrl.classList.remove("active");
    btnSms.classList.remove("active");
    btnEmail.classList.remove("active");

    sectionPhone.classList.remove("d-none");
    sectionUrl.classList.add("d-block");

    sectionSms.classList.add("d-none");
    sectionUrl.classList.add("d-none");
    sectionEmail.classList.add("d-none");
  });

  btnSms.addEventListener("click", function () {
    btnSms.classList.add("active");
    btnUrl.classList.remove("active");
    btnPhone.classList.remove("active");
    btnEmail.classList.remove("active");

    sectionSms.classList.remove("d-none");
    sectionSms.classList.add("d-block");

    sectionPhone.classList.add("d-none");
    sectionUrl.classList.add("d-none");
    sectionEmail.classList.add("d-none");
  });

  btnEmail.addEventListener("click", function () {
    btnEmail.classList.add("active");
    btnSms.classList.remove("active");
    btnUrl.classList.remove("active");
    btnPhone.classList.remove("active");

    sectionEmail.classList.remove("d-none");
    sectionEmail.classList.add("d-block");

    sectionPhone.classList.add("d-none");
    sectionUrl.classList.add("d-none");
    sectionSms.classList.add("d-none");
  });

  function generateQrCode() {
    document.getElementById("qrcode").innerHTML = "";

    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: data,
      width: 256,
      height: 256,
      colorDark: inputColor.value,
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
        '" download="qrcode.png"><i class="fa-solid fa-download"></i><br>Telecharger</a>';
    })();
  }

  inputColor.addEventListener("input", function (e) {
    generateQrCode();
  });

  inputUrl.addEventListener("keyup", function (e) {
    if (inputUrl.value.length > 0) {
      data = inputUrl.value;
      generateQrCode();
    } else {
      document.getElementById("qrcode").innerHTML = "";
      sectionDownload.innerHTML = "";
    }
  });

  inputPhone.addEventListener("keyup", function (e) {
    if (inputPhone.value.length > 0) {
      data = "tel:" + inputPhone.value;
      generateQrCode();
    } else {
      document.getElementById("qrcode").innerHTML = "";
      sectionDownload.innerHTML = "";
    }
  });

  inputSmsBody.addEventListener("keyup", function (e) {
    if (inputSmsBody.value.length > 0 && inputSms.value.length > 0) {
      data = "sms: " + inputSms.value + "&body=" + inputSmsBody.value;
      generateQrCode();
    } else {
      document.getElementById("qrcode").innerHTML = "";
      sectionDownload.innerHTML = "";
    }
  });

  inputSms.addEventListener("keyup", function (e) {
    if (inputSmsBody.value.length > 0 && inputSms.value.length > 0) {
      data = "sms: " + inputSms.value + "&body=" + inputSmsBody.value;
      generateQrCode();
    } else {
      document.getElementById("qrcode").innerHTML = "";
      sectionDownload.innerHTML = "";
    }
  });

  inputEmail.addEventListener("keyup", function (e) {
    if (inputEmail.value.length > 0) {
      data =
        "mailto:" +
        inputEmail.value +
        "?subject=" +
        inputEmailSubject.value +
        "&body=" +
        inputEmailBody.value;
      generateQrCode();
    } else {
      document.getElementById("qrcode").innerHTML = "";
      sectionDownload.innerHTML = "";
    }
  });

  inputEmailSubject.addEventListener("keyup", function (e) {
    if (inputEmail.value.length > 0 && inputEmailSubject.value.length > 0) {
      data =
        "mailto:" +
        inputEmail.value +
        "?subject=" +
        inputEmailSubject.value +
        "&body=" +
        inputEmailBody.value;
      generateQrCode();
    } else {
      document.getElementById("qrcode").innerHTML = "";
      sectionDownload.innerHTML = "";
    }
  });

  inputEmailBody.addEventListener("keyup", function (e) {
    if (inputEmail.value.length > 0 && inputEmailBody.value.length > 0) {
      data =
        "mailto:" +
        inputEmail.value +
        "?subject=" +
        inputEmailSubject.value +
        "&body=" +
        inputEmailBody.value;
      generateQrCode();
    } else {
      document.getElementById("qrcode").innerHTML = "";
      sectionDownload.innerHTML = "";
    }
  });
} 

const pFooter = document.getElementById("pFooter");
pFooter.innerHTML = new Date().getFullYear() + " | MATIAS GOMEZ";