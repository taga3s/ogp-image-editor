import { OGPEditorDownload } from "./OGPEditorDownload.tsx";
import { OGPEditorBaseImage } from "./OGPEditorBaseImage.tsx";
import { OGPEditorCustomizeBox } from "./OGPEditorCustomizeBox.tsx";

const OGPEditor = () => {
  return (
    <div class="flex justify-between items-center mx-auto">
      <OGPEditorBaseImage />
      <div class="flex flex-col items-center gap-4 border-l-2">
        <OGPEditorCustomizeBox />
        <OGPEditorDownload />
      </div>
    </div>
  );
};

export { OGPEditor };
