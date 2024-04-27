import { Liveblocks } from "@liveblocks/node";
import { NextApiRequest, NextApiResponse } from "next";
import { nanoid } from "nanoid";
import { UserMeta } from "../../../liveblocks.config";

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_API_KEY!,
});

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const userInfo: UserMeta["info"] = {
      // 表示名は niwatori で固定にしています
      name: "niwatori",
      // カーソルなどに使用する色のカラーコードをランダム生成しています
      color:
        "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6),
      // 画像は固定
      picture: "https://avatars.githubusercontent.com/u/6592938?v=4",
    };

    const liveSession = liveblocks.prepareSession(nanoid(), { userInfo });

    const { room } = request.body;
    liveSession.allow(room, liveSession.FULL_ACCESS);

    const { body, status } = await liveSession.authorize();
    response.status(status).json(JSON.parse(body));
  } catch (error) {
    response.status(500).json({ error: "error" });
  }
}
