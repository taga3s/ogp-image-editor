import { selectedOgpTemplateSignal } from "../../signals/ogpTemplateSignal.ts";
import {
  type TextBox,
  textBoxesSignal,
} from "../../signals/textBoxesSignal.ts";
import {
  selectedTextBoxIdSignal,
} from "../../signals/selectedTextBoxIdSignal.ts";
import { SquareIcon } from "../icons/SquareIcon.tsx";
import { randomColor } from "../../utils/ramdomColor.ts";

const constructTextBox = (
  textBox: Pick<TextBox, "id" | "textBoxColor">,
): TextBox => {
  return {
    id: textBox.id,
    text: "タイトル",
    textBoxColor: textBox.textBoxColor,
    x: 64,
    y: 64,
    fontSize: 32,
    fontWeight: "bold",
    fontColor: "#000000",
  };
};

const OGPEditorCustomizeBox = () => {
  const { selectedOgpTemplate } = selectedOgpTemplateSignal();
  const { textBoxes, setTextBoxes } = textBoxesSignal();
  const { selectedTextBoxId, setSelectedTextBoxId } = selectedTextBoxIdSignal();

  const selectedTextBox = textBoxes.find((textBox) => {
    return textBox.id === selectedTextBoxId;
  });

  const handleClickAddTextBox = () => {
    const id = crypto.randomUUID();
    setTextBoxes([
      ...textBoxes,
      constructTextBox({ id, textBoxColor: randomColor() }),
    ]);
    setSelectedTextBoxId(id);
  };

  const handleClickDeleteTextBox = (id: string) => {
    const filteredTextBoxes = textBoxes.filter((textBox) => textBox.id !== id);
    setTextBoxes(filteredTextBoxes);
    setSelectedTextBoxId(filteredTextBoxes[0]?.id);
  };

  const handleInputEditTextBox = (id: string, value: Partial<TextBox>) => {
    const textBox = textBoxes.find((textBox) => textBox.id === id);
    if (!textBox) return;
    setTextBoxes([
      ...textBoxes.filter((textBox) => textBox.id !== id),
      {
        ...textBox,
        ...value,
      },
    ]);
  };

  const handleClickResetTextBox = (id: string) => {
    const textBox = textBoxes.find((textBox) => textBox.id === id);
    if (!textBox) return;
    setTextBoxes([
      ...textBoxes.filter((textBox) => textBox.id !== id),
      {
        ...textBox,
        ...constructTextBox({
          id: textBox.id,
          textBoxColor: textBox.textBoxColor,
        }),
      },
    ]);
  };

  return (
    <div class="w-[320px] h-96 p-4">
      <button
        type="button"
        class="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black font-bold rounded-md disabled:opacity-50"
        onClick={handleClickAddTextBox}
        disabled={selectedOgpTemplate === undefined}
      >
        <div class="w-5">
          <SquareIcon />
        </div>
        TextBox
      </button>
      <ul class="mt-4 flex flex-col gap-4">
        {textBoxes.length > 0
          ? (
            <li
              class="rounded-md"
              style={`outline: 2px solid ${selectedTextBox?.textBoxColor}`}
            >
              <div class="flex justify-between items-center">
                <span
                  class="text-white px-2 py-1 rounded-tl-md rounded-br-md"
                  style={`background-color:${selectedTextBox?.textBoxColor}`}
                >
                  TextBox
                </span>
                <div class="flex gap-4 px-4">
                  <button
                    type="button"
                    class="text-sm"
                    onClick={() => handleClickResetTextBox(selectedTextBoxId)}
                  >
                    リセット
                  </button>
                  <button
                    type="button"
                    class="text-sm"
                    onClick={() => handleClickDeleteTextBox(selectedTextBoxId)}
                  >
                    削除
                  </button>
                </div>
              </div>
              <div class="grid grid-cols-1 divide-y">
                <label class="flex items-center gap-4 p-2">
                  文字サイズ
                  <input
                    type="number"
                    value={selectedTextBox?.fontSize}
                    min="0"
                    class="w-12"
                    onInput={(e) => {
                      handleInputEditTextBox(selectedTextBoxId, {
                        fontSize: Number(e.currentTarget.value),
                      });
                    }}
                  />
                </label>
                <label class="flex items-center gap-4 p-2">
                  文字の太さ
                  <select
                    value={selectedTextBox?.fontWeight}
                    onInput={(e) => {
                      handleInputEditTextBox(selectedTextBoxId, {
                        fontWeight: e.currentTarget
                          .value as TextBox["fontWeight"],
                      });
                    }}
                  >
                    <option value="normal">normal</option>
                    <option value="medium">medium</option>
                    <option value="bold">bold</option>
                  </select>
                </label>
                <label class="flex items-center gap-4 p-2">
                  カラー{" "}
                  <input
                    type="color"
                    value={selectedTextBox?.fontColor}
                    onInput={(e) => {
                      handleInputEditTextBox(selectedTextBoxId, {
                        fontColor: e.currentTarget.value,
                      });
                    }}
                  />
                  <span>{selectedTextBox?.fontColor}</span>
                </label>
              </div>
            </li>
          )
          : null}
      </ul>
    </div>
  );
};

export { OGPEditorCustomizeBox };
