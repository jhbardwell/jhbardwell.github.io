import { currentNode } from "./game.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let imagerender = function (pic) {
  if (!pic) return;

  return new Promise((resolve, _) => {
    if (pic.complete) {
      ctx.drawImage(pic, 0, 0, canvas.width, canvas.height);
      resolve();
    } else {
      pic.onload = function () {
        ctx.drawImage(pic, 0, 0, canvas.width, canvas.height);
        resolve();
      };
    }
  });
};

async function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  await imagerender(currentNode.skyImage);
  await imagerender(currentNode.background);
  await imagerender(currentNode.midground);
  if (currentNode.mouseover) {
    await imagerender(currentNode.option.foreground);
  } else {
    await imagerender(currentNode.foreground);
  }
}

export default render;
