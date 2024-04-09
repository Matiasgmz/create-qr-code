var inputUrl = document.getElementById("inputUrl");
var buttonGenQR = document.getElementById("genQR");
const sectionDownload = document.getElementById("sectionDownload");

function generateQrCode() {
  // Clear the contents of the #qrcode div

  document.getElementById("qrcode").innerHTML = "";

  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: inputUrl.value,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
    border: 4
  });

  (async function () {
    await new Promise((resolve) => {
      setTimeout(resolve, 500); // Adjust the delay as needed
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