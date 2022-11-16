import fetch from "node-fetch";
import { write, read } from "../utils/fs.js";

const apiMessage = async (msg) => {
  const data = read("converations");
 
  const responseMessage = await fetch(
    `https://chatwoot.nolbir.io/api/v1/accounts/2/conversations/${data.id}/messages`,
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
  write("message", res);
};

export default apiMessage;
