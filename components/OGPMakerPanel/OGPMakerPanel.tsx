import { OGPMakerPanelSelectedImage } from "./OGPMakerPanelSelectedImage.tsx";
import { OGPMakerPanelEditBox } from "./OGPMakerPanelCustomizeBox.tsx";
import { useState } from "preact/hooks";
import { ogpTemplateSignal } from "../../signals/ogpTemplateSignal.ts";

export type TextBox = {
  id: string;
  text: string;
  x: number;
  y: number;
  fontSize: number;
  color: string;
};

const OGPMakerPanel = () => {
  const [textBoxes, setTextBoxes] = useState<TextBox[]>([]);
  const [selectedTextBoxId, setSelectedTextBoxId] = useState<string>("");

  const { ogpTemplate } = ogpTemplateSignal();

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
        imgSrc={ogpTemplate ? ogpTemplate.imgSrc : ""}
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
