import {
  type TextBox,
  textBoxesSignal,
} from "../../signals/textBoxesSignal.ts";
import {
  selectedTextBoxIdSignal,
} from "../../signals/selectedTextBoxIdSignal.ts";
import { toFontWeightFromName } from "../../utils/font-weight.ts";
import { selectedOgpTemplateSignal } from "../../signals/ogpTemplateSignal.ts";
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

const OGPMakerBaseImage = () => {
  const { selectedOgpTemplate } = selectedOgpTemplateSignal();
  const { textBoxes, setTextBoxes } = textBoxesSignal();
  const { setSelectedTextBoxId } = selectedTextBoxIdSignal();

  const isDraggable = useSignal<boolean>(false);

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

  const handleEditTextBoxPosition = (id: string, value: Partial<TextBox>) => {
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

  useEffect(() => {
    const handlePointerDown = () => {
      isDraggable.value = true;
    };

    const handlePointerUp = () => {
      isDraggable.value = false;
    };

    document.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isDraggable]);

  const isImageSelected = selectedOgpTemplate !== undefined;

  return (
    <div class="flex flex-col items-center justify-center w-[960px] min-h-[600px] p-8">
      {isImageSelected
        ? (
          <ul class="w-full relative">
            {textBoxes.map((textBox) => {
              const onPointerMove = (e: PointerEvent) => {
                if (!isDraggable.value) return;
                handleEditTextBoxPosition(textBox.id, {
                  x: textBox.x + e.movementX,
                  y: textBox.y + e.movementY,
                });
              };

              return (
                <li
                  class={"absolute"}
                  style={`top:${textBox.y}px;left:${textBox.x}px;`}
                  key={textBox.id}
                  onPointerMove={onPointerMove}
                >
                  <div class="relative focus-area">
                    <span class="absolute text-xs bottom-[-20px] left-0 hidden position-label">
                      x: {textBox?.x}px, y: {textBox?.y}px
                    </span>
                    {/* NOTE: The CSS property `field-size` is not widely available.*/}
                    <textarea
                      class="bg-transparent resize-none overflow-hidden"
                      style={`field-sizing:content;font-size:${textBox.fontSize}px;font-weight:${
                        toFontWeightFromName(textBox.fontWeight)
                      };color:${textBox.color};outline-width:2px;outline-color:${textBox.textBoxColor};`}
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
                </li>
              );
            })}
            <img
              class="w-full select-none pointer-events-none"
              src={selectedOgpTemplate.imgSrc}
              alt="Selected OGP Template"
            />
          </ul>
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
