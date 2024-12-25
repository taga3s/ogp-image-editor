import { selectedOgpTemplateSignal } from "../../signals/ogpTemplateSignal.ts";
import { textBoxesSignal } from "../../signals/textBoxesSignal.ts";
import { buildOGPImageURL, downloadOGPImage, type ImageType } from "./image.ts";
import { useSignal } from "@preact/signals";
import type { JSX } from "preact/jsx-runtime";

const OGPEditorDownload = () => {
  const { selectedOgpTemplate } = selectedOgpTemplateSignal();
  const { textBoxes } = textBoxesSignal();
  const selectedImageType = useSignal<ImageType>("png");

  const handleSelectImageType = (e: JSX.TargetedEvent<HTMLSelectElement>) => {
    selectedImageType.value = e.currentTarget.value as ImageType;
  };

  const handleClickDownload = () => {
    if (!selectedOgpTemplate) {
      alert("テンプレートを選択する必要があります");
      return;
    }
    if (textBoxes.length === 0) {
      alert("少なくとも1つ以上のテキストボックスを追加する必要があります");
      return;
    }

    const ogpImageURL = buildOGPImageURL(
      selectedOgpTemplate.imgSrc,
      textBoxes,
      selectedImageType.value,
    );
    if (!ogpImageURL) {
      return;
    }

    downloadOGPImage(ogpImageURL, selectedImageType.value);
  };

  return (
    <div>
      <div class="flex items-center bg-cyan-700 text-white rounded-md">
        <button
          type="button"
          class="p-4 bg-cyan-700 hover:bg-cyan-900 text-xl font-bold border-r-2 border-white rounded-l-md"
          onClick={handleClickDownload}
        >
          ダウンロード
        </button>
        <label for="image-type-select" class="px-2 py-4">
          <select
            id="image-type-select"
            class="bg-transparent text-xl cursor-pointer"
            onInput={handleSelectImageType}
          >
            <option value="png">.png</option>
            <option value="jpeg">.jpeg</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export { OGPEditorDownload };
