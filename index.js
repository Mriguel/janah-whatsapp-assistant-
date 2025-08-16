const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  const { Body, From } = req.body;
  console.log("رسالة من:", From, "المحتوى:", Body);

  res.set("Content-Type", "text/xml");
  res.send(`<Response><Message>أهلاً بك من جناح 👋، نحن الآن في مرحلة التجربة. تم استلام رسالتك: ${Body}</Message></Response>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`الخادم يعمل على المنفذ ${PORT}`);
});
