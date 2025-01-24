import { OGPTemplateItem } from "./OGPTemplateItem.tsx";
import {
  type OGPTemplateData,
  selectedOgpTemplateSignal,
} from "../../signals/ogpTemplateSignal.ts";

const OGP_TEMPLATE_DATA: OGPTemplateData[] = [
  {
    id: 1,
    imgSrc: "ogp-template1.png",
  },
];

const OGPTemplate = () => {
  const { selectedOgpTemplate, setSelectedOgpTemplate } =
    selectedOgpTemplateSignal();

  const handleClickOgpTemplate = (ogpTemplate: OGPTemplateData) => {
    setSelectedOgpTemplate(ogpTemplate);
  };

  return (
    <ul class="flex flex-col items-center gap-8 w-full p-6 border-t-2">
      {OGP_TEMPLATE_DATA.map((item) => (
        <OGPTemplateItem
          key={item.id}
          numbering={item.id}
          imgSrc={item.imgSrc}
          isSelected={selectedOgpTemplate?.id === item.id}
          onClick={() => handleClickOgpTemplate(item)}
        />
      ))}
    </ul>
  );
};

export { OGPTemplate };
