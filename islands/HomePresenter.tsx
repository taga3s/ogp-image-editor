import { useSignal } from "@preact/signals";
import { OGPMakerPanel } from "../components/OGPMakerPanel.tsx";
import { OGPTemplateList } from "../components/OGPTemplateList.tsx";

const HomePresenter = () => {
  const imgSrcSignal = useSignal<string>("");

  const handleImgSrc = (imgSrc: string) => {
    imgSrcSignal.value = imgSrc;
  };

  return (
    <div class="flex">
      <OGPTemplateList
        handleImgSrc={handleImgSrc}
        selectedImgSrcSignal={imgSrcSignal}
      />
      <OGPMakerPanel selectedImgSrcSignal={imgSrcSignal} />
    </div>
  );
};

export { HomePresenter };
