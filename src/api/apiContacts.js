import fetch from "node-fetch";
import { write, read } from "../utils/fs.js";

const start = async (msg) => {

  const responseStart = await fetch(
    "https://chatwoot.nolbir.io/api/v1/accounts/2/contacts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        api_access_token: "J7jtpZ7soYwGXoD9Pg58tt5u",
      },
      body: JSON.stringify({
        inbox_id: 19,
        email: `${parseInt(Math.random() * 100)}@nolbir.io`,
        name: msg.chat.first_name,
        phone_number: "",
        avatar_url: "string",
        identifier: null,
        custom_attributes: {
          telegram_user_name: msg.chat.username,
          bot: msg.chat.id
        },
      }),
    }
  );
  const data = await responseStart.json();
  write("contacts", data);
};

export { start };
