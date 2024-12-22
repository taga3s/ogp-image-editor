import { OGPMaker } from "../components/OGPMaker/OGPMaker.tsx";
import { OGPTemplate } from "../components/OGPTemplate/OGPTemplate.tsx";

const HomePresenter = () => {
  return (
    <div class="flex flex-col">
      <OGPMaker />
      <OGPTemplate />
    </div>
  );
};

export { HomePresenter };
