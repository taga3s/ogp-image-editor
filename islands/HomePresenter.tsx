import { useSignal } from "@preact/signals";
import { OGPMakerPanel } from "../components/OGPMakerPanel/OGPMakerPanel.tsx";
import { OGPTemplate } from "../components/OGPTemplate/OGPTemplate.tsx";

const HomePresenter = () => {
  const imgSrcSignal = useSignal<string>("");

  const handleImgSrc = (imgSrc: string) => {
    imgSrcSignal.value = imgSrc;
  };

  return (
    <div class="flex flex-col">
      <OGPMakerPanel selectedImgSrcSignal={imgSrcSignal} />
      <OGPTemplate
        handleImgSrc={handleImgSrc}
        selectedImgSrcSignal={imgSrcSignal}
      />
    </div>
  );
};

export { HomePresenter };
