import bot from "../utils/botConfigurition.js";
import fetch from "node-fetch";
import { write, read } from "../utils/fs.js";

const messageConveration = async (msg) => {
  const data = read("contacts");


  if (msg.text === "Biz bilan bog'lanish") {

    bot.sendMessage(msg.chat.id, "Murojatingizni qoldiring");
   
    const conerationsStart = await fetch(
      "https://chatwoot.nolbir.io/api/v1/accounts/2/conversations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          api_access_token: "J7jtpZ7soYwGXoD9Pg58tt5u",
        },
        body: JSON.stringify({
          source_id: data?.payload?.contact_inbox.source_id,
          contact_id: data?.payload?.contact.id,
          additional_attributes: {},
          custom_attributes: {
            attribute_key: "attribute_value",
            priority_conversation_number: 1,
          },
          status: "open",
          assignee_id: "string",
          team_id: "string",
        }),
      }
    );

    const res = await conerationsStart.json();

    write("converations", res);
  }
};

export default messageConveration;