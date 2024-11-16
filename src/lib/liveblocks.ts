import { Liveblocks } from "@liveblocks/node";

const liveblocksSecretKey = process.env.LIVEBLOCKS_SECRET_KEY;

if (!liveblocksSecretKey) {
  throw new Error(
    "LIVEBLOCKS_SECRET_KEY is not set in the environment variables."
  );
}

export const liveblocks = new Liveblocks({
  secret: liveblocksSecretKey,
});
