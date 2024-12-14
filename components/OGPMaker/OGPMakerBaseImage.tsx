import {
  type TextBox,
  textBoxesSignal,
} from "../../signals/textBoxesSignal.ts";
import { toFontWeightFromName } from "../../style-utils/font-weight.ts";

type Props = {
  imgSrc: string;
  textBox: TextBox | undefined;
};

const OGPMakerBaseImage = (props: Props) => {
  const { imgSrc, textBox } = props;
  const { textBoxes, setTextBoxes } = textBoxesSignal();

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

  const isImageSelected = imgSrc !== "";

  return (
    <div class="flex flex-col items-center justify-center w-[960px] min-h-[600px] p-8">
      {isImageSelected
        ? (
          <div class="w-full relative">
            {textBox
              ? (
                <div
                  class="absolute"
                  style={`top:${textBox.y}px;left:${textBox.x}px;`}
                >
                  <div class="relative">
                    <span class="absolute rounded-t-md text-xs top-[-26px] left-0">
                      [{textBox.id.slice(0, 8)}]
                    </span>
                    {/* NOTE: The CSS property `field-size` is not widely available.*/}
                    <textarea
                      class="w-[720px] px-2 bg-transparent outline-2 outline-cyan-700 resize-none overflow-hidden"
                      style={`field-sizing:content;font-size:${textBox.fontSize}px;font-weight:${
                        toFontWeightFromName(textBox.fontWeight)
                      };color:${textBox.color};`}
                      onInput={(e) =>
                        handleEditTextBoxText(textBox.id, {
                          text: e.currentTarget.value,
                        })}
                      value={textBox.text}
                    />
                  </div>
                </div>
              )
              : null}
            <img
              class="w-full"
              src={imgSrc}
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
