import type { TextBox } from "../../signals/textBoxesSignal.ts";

const padding = 16;

export type ImageType = "png" | "jpeg";

const buildOGPImageURL = (
  ogpTemplate: string,
  textBoxes: TextBox[],
  imageType: ImageType,
): string | undefined => {
  const ogpBaseImage = document.getElementById("ogp-base-image");
  if (!ogpBaseImage) {
    return;
  }

  const image = new Image();
  image.src = ogpTemplate;

  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;

  const { clientWidth, clientHeight } = ogpBaseImage;
  const magnificationX = canvas.width / clientWidth;
  const magnificationY = canvas.height / clientHeight;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }

  ctx.drawImage(image, 0, 0);
  ctx.textBaseline = "top";

  for (const textBox of textBoxes) {
    const splitText = textBox.text.split("\n");
    ctx.font = `${textBox.fontWeight} ${
      textBox.fontSize * magnificationX
    }px "BIZ UDGothic", sans-serif`;
    ctx.fillStyle = textBox.fontColor;

    for (const [index, text] of splitText.entries()) {
      ctx.fillText(
        text,
        textBox.x * magnificationX,
        ((textBox.y + textBox.fontSize * index) * magnificationY) +
          padding * index,
      );
    }
  }

  return canvas.toDataURL(`image/${imageType}`, 1.0);
};

const downloadOGPImage = (ogpImageURL: string, type: ImageType): void => {
  const link = document.createElement("a");
  link.href = ogpImageURL;
  link.download = `ogp.${type}`;
  link.click();
};

export { buildOGPImageURL, downloadOGPImage };
