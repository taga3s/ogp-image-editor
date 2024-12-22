import { OGPEditor } from "../components/OGPEditor/OGPEditor.tsx";
import { OGPTemplate } from "../components/OGPTemplate/OGPTemplate.tsx";

const HomePresenter = () => {
  return (
    <div class="flex flex-col">
      <OGPEditor />
      <OGPTemplate />
    </div>
  );
};

export { HomePresenter };
