import type { Signal } from "@preact/signals";
import { OGPMakerPanelSelectedImage } from "./OGPMakerPanelSelectedImage.tsx";
import { OGPMakerPanelEditBox } from "./OGPMakerPanelCustomizeBox.tsx";
import { useState } from "preact/hooks";

type Props = {
  selectedImgSrcSignal: Signal<string>;
};

export type TextBox = {
  id: string;
  text: string;
  x: number;
  y: number;
  fontSize: number;
  color: string;
};

const OGPMakerPanel = (props: Props) => {
  const { selectedImgSrcSignal } = props;

  const [textBoxes, setTextBoxes] = useState<TextBox[]>([]);
  const [selectedTextBoxId, setSelectedTextBoxId] = useState<string>("");

  const handleAddTextBox = (textBox: TextBox) => {
    setTextBoxes([
      ...textBoxes,
      textBox,
    ]);
  };

  const handleSetSelectedTextBoxId = (id: string) => {
    setSelectedTextBoxId(id);
  };

  const selectedTextBox = textBoxes.find((textBox) =>
    textBox.id === selectedTextBoxId
  );

  return (
    <div class="flex justify-between items-center mx-auto">
      <OGPMakerPanelSelectedImage
        isImageSelected={selectedImgSrcSignal.value !== ""}
        imgSrc={selectedImgSrcSignal.value}
        textBox={selectedTextBox}
      />
      <OGPMakerPanelEditBox
        textBoxes={textBoxes}
        handleAddTextBox={handleAddTextBox}
        handleSetSelectedTextBoxId={handleSetSelectedTextBoxId}
      />
    </div>
  );
};

export { OGPMakerPanel };
