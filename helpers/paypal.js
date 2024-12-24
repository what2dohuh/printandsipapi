const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AS4PX_f_Ex3JW_-i2sVuGXCmfuO1vj13XATn_2Vp2S8rIajeoiW0c7vPrWaYKBW-VXzOPHqozRfLmpeX",
  client_secret: "EBkTB1IY9gEk60J2Yt0KQqASxnp5mupMMz6VLBibXwt75OhYifCVN0Mei9DLOIosGuO8lfAgFpB-UbkI",
});

module.exports = paypal;
