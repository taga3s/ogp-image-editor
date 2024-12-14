import { OGPMaker } from "../components/OGPMaker/OGPMaker.tsx";
import { OGPTemplateList } from "../components/OGPTemplate/OGPTemplateList.tsx";

const HomePresenter = () => {
  return (
    <div class="flex flex-col">
      <OGPMaker />
      <OGPTemplateList />
    </div>
  );
};

export { HomePresenter };
