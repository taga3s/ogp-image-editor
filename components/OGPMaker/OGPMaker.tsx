import { OGPMakerBaseImage } from "./OGPMakerBaseImage.tsx";
import { OGPMakerCustomizeBox } from "./OGPMakerCustomizeBox.tsx";
import { useState } from "preact/hooks";
import { ogpTemplateSignal } from "../../signals/ogpTemplateSignal.ts";
import { textBoxesSignal } from "../../signals/textBoxesSignal.ts";

const OGPMaker = () => {
  const [selectedTextBoxId, setSelectedTextBoxId] = useState<string>("");

  const { ogpTemplate } = ogpTemplateSignal();
  const { textBoxes } = textBoxesSignal();

  const handleSetSelectedTextBoxId = (id: string) => {
    setSelectedTextBoxId(id);
  };

  const selectedTextBox = textBoxes.find((textBox) =>
    textBox.id === selectedTextBoxId
  );

  return (
    <div class="flex justify-between items-center mx-auto">
      <OGPMakerBaseImage
        imgSrc={ogpTemplate ? ogpTemplate.imgSrc : ""}
        textBox={selectedTextBox}
      />
      <OGPMakerCustomizeBox
        selectedTextBoxId={selectedTextBoxId}
        handleSetSelectedTextBoxId={handleSetSelectedTextBoxId}
      />
    </div>
  );
};

export { OGPMaker };
