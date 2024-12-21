import { OGPMakerDownload } from "./OGPMakerDownload.tsx";
import { OGPMakerBaseImage } from "./OGPMakerBaseImage.tsx";
import { OGPMakerCustomizeBox } from "./OGPMakerCustomizeBox.tsx";

const OGPMaker = () => {
  return (
    <div class="flex justify-between items-center mx-auto">
      <OGPMakerBaseImage />
      <div class="flex flex-col items-center gap-4">
        <OGPMakerCustomizeBox />
        <OGPMakerDownload />
      </div>
    </div>
  );
};

export { OGPMaker };
