import {
  type TextBox,
  textBoxesSignal,
} from "../../signals/textBoxesSignal.ts";
import {
  selectedTextBoxIdSignal,
} from "../../signals/selectedTextBoxIdSignal.ts";

import { toFontWeightFromName } from "../../style-utils/font-weight.ts";
import { selectedOgpTemplateSignal } from "../../signals/ogpTemplateSignal.ts";

const OGPMakerBaseImage = () => {
  const { selectedOgpTemplate } = selectedOgpTemplateSignal();
  const { textBoxes, setTextBoxes } = textBoxesSignal();
  const { setSelectedTextBoxId } = selectedTextBoxIdSignal();

  const handleEditTextBoxText = (id: string, value: Partial<TextBox>) => {
    const textBox = textBoxes.find((textBox) => textBox.id === id);
    if (!textBox) {
      return;
    }

    setTextBoxes([
      ...textBoxes.filter((textBox) => textBox.id !== id),
      {
        ...textBox,
        ...value,
      },
    ]);
  };

  const handleSetSelectedTextBoxId = (id: string) => {
    setSelectedTextBoxId(id);
  };

  const isImageSelected = selectedOgpTemplate !== undefined;

  return (
    <div class="flex flex-col items-center justify-center w-[960px] min-h-[600px] p-8">
      {isImageSelected
        ? (
          <div class="w-full relative">
            {textBoxes.map((textBox) => {
              return (
                <div
                  class="absolute"
                  style={`top:${textBox.y}px;left:${textBox.x}px;`}
                  key={textBox.id}
                >
                  <div class="relative">
                    <button
                      type="button"
                      class="absolute rounded-t-md text-xs top-[-26px] left-0"
                    >
                      [{textBox.id.slice(0, 8)}]
                    </button>
                    {/* NOTE: The CSS property `field-size` is not widely available.*/}
                    <textarea
                      class="px-2 bg-transparent outline-2 outline-cyan-700 resize-none overflow-hidden"
                      style={`field-sizing:content;font-size:${textBox.fontSize}px;font-weight:${
                        toFontWeightFromName(textBox.fontWeight)
                      };color:${textBox.color};`}
                      onInput={(e) =>
                        handleEditTextBoxText(textBox.id, {
                          text: e.currentTarget.value,
                        })}
                      onFocus={() => {
                        handleSetSelectedTextBoxId(textBox.id);
                      }}
                      value={textBox.text}
                    />
                  </div>
                </div>
              );
            })}
            <img
              class="w-full"
              src={selectedOgpTemplate.imgSrc}
              alt="Selected OGP Template"
            />
          </div>
        )
        : (
          <span class="font-bold">
            まずは、OGP画像テンプレートを選択します
          </span>
        )}
    </div>
  );
};

export { OGPMakerBaseImage };
