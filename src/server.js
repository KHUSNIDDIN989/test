import express from "express";
import bot from "./utils/botConfigurition.js";
import controllersContacts from "./controllers/controllerContacts.js";
import messageConveration from "./controllers/controllerConveration.js";
import apiMessage from "./api/apiMessege.js";
import { write, read } from "./utils/fs.js";
import fetch from "node-fetch";

process.env.NTBA_FIX_319 = 1;
const port = process.env.PORT || 9000;
const app = express();
app.use(express.json());

bot.on("error", console.error);

bot.onText(/\/start/, controllersContacts);

bot.on("message", messageConveration);

bot.on("message", apiMessage);

bot.on("message", async (msg) => {
  const responseMessage = await fetch(
    `https://chatwoot.nolbir.io/api/v1/accounts/2/conversations/${
      read("converations").id
    }/messages`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        api_access_token: "J7jtpZ7soYwGXoD9Pg58tt5u",
      },
      body: JSON.stringify({
        content: msg.text,
      }),
    }
  );
  const res = await responseMessage.json();
});


app.listen(port, console.log(port));
