import { OGPTemplateItem } from "./OGPTemplateItem.tsx";
import {
  type OGPTemplateData,
  selectedOgpTemplateSignal,
} from "../../signals/ogpTemplateSignal.ts";

const OGP_TEMPLATE_DATA: OGPTemplateData[] = [
  {
    id: 1,
    imgSrc: "/ogp-template1.png",
  },
];

const OGPTemplateList = () => {
  const { selectedOgpTemplate, setSelectedOgpTemplate } =
    selectedOgpTemplateSignal();
  return (
    <div class="p-6 mx-auto max-w-[800px] w-full border-2 shadow rounded-md">
      <ul class="flex items-center gap-8">
        {OGP_TEMPLATE_DATA.map((item) => (
          <OGPTemplateItem
            key={item.id}
            numbering={item.id}
            imgSrc={item.imgSrc}
            isSelected={selectedOgpTemplate?.id === item.id}
            onClick={() => setSelectedOgpTemplate(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export { OGPTemplateList };