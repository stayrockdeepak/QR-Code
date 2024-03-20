const href = "https://deepak-sharma13.netlify.app/";
const size = 250;

new QRCode(document.querySelector("#qr"), {
  text: href,
  width: size,
  height: size,

  colorDark: "black",
  colorLight: "white"
});
