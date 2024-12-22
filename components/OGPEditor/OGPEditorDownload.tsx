import { selectedOgpTemplateSignal } from "../../signals/ogpTemplateSignal.ts";
import { textBoxesSignal } from "../../signals/textBoxesSignal.ts";
import { buildOGPImageURL, downloadOGPImage } from "./image.ts";

const OGPEditorDownload = () => {
  const { selectedOgpTemplate } = selectedOgpTemplateSignal();
  const { textBoxes } = textBoxesSignal();

  const handleDownload = () => {
    if (!selectedOgpTemplate) {
      alert("テンプレートを選択する必要があります");
      return;
    }
    if (textBoxes.length === 0) {
      alert("少なくとも1つ以上のテキストボックスを追加する必要があります");
      return;
    }

    const ogpImageURL = buildOGPImageURL(selectedOgpTemplate.imgSrc, textBoxes);
    if (!ogpImageURL) {
      return;
    }

    downloadOGPImage(ogpImageURL);
  };

  return (
    <div>
      <button
        type="button"
        class="bg-cyan-700 text-xl text-white font-bold p-4 rounded-md"
        onClick={handleDownload}
      >
        ダウンロード
      </button>
    </div>
  );
};

export { OGPEditorDownload };
