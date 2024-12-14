import { OGPMakerPanel } from "../components/OGPMakerPanel/OGPMakerPanel.tsx";
import { OGPTemplate } from "../components/OGPTemplate/OGPTemplate.tsx";

const HomePresenter = () => {
  return (
    <div class="flex flex-col">
      <OGPMakerPanel />
      <OGPTemplate />
    </div>
  );
};

export { HomePresenter };
