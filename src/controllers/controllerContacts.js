import bot from "../utils/botConfigurition.js";
import { start } from "../api/apiContacts.js";

const botStart = async (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `Salom ${msg.chat.first_name} Hush kelibsiz`,
    {
      reply_markup: JSON.stringify({
        keyboard: [
          [
            {
              text: "Biz bilan bog'lanish",
            },
            {
              text: "Kompanya haqida malumot olish",
            },
          ],
        ],
        resize_keyboard: true,
      }),
    }
  );
  await start(msg);
};

export default botStart;
