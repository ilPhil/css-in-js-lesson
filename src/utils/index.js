import { emoji } from "../costants";

export function randomEmoji() {
  return emoji[Math.floor(Math.random() * emoji.length)];
}
