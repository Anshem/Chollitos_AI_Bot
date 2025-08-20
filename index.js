const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

const TELEGRAM_TOKEN = "8273958364:AAFMqeGVETHLSfsttapS6ckANa_RHh9mtTA";
const CHAT_ID = "374677563";

app.post("/send", async (req, res) => {
  const { message } = req.body;
  try {
    await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
      {
        chat_id: CHAT_ID,
        text: message,
      },
    );
    res.send("Mensaje enviado");
  } catch (err) {
    res.status(500).send("Error al enviar mensaje");
  }
});

app.listen(3000, () => {
  console.log("Servidor activo en Replit");
});

app.get("/", (req, res) => {
  res.send("🚀 El servidor está funcionando correctamente");
});
