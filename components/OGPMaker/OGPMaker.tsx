import { OGPMakerBaseImage } from "./OGPMakerBaseImage.tsx";
import { OGPMakerCustomizeBox } from "./OGPMakerCustomizeBox.tsx";

const OGPMaker = () => {
  return (
    <div class="flex justify-between items-center mx-auto">
      <OGPMakerBaseImage />
      <OGPMakerCustomizeBox />
    </div>
  );
};

export { OGPMaker };
