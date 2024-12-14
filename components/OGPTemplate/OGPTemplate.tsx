import { OGPTemplateItem } from "./OGPTemplateItem.tsx";
import {
  type OGPTemplateData,
  ogpTemplateSignal,
} from "../../signals/ogpTemplateSignal.ts";

const OGP_TEMPLATE_DATA: OGPTemplateData[] = [
  {
    id: 1,
    imgSrc: "/ogp-template1.png",
  },
];

const OGPTemplate = () => {
  const { ogpTemplate, setOgpTemplate } = ogpTemplateSignal();
  return (
    <div class="p-6 mx-auto max-w-[800px] w-full border-2 rounded-md">
      <ul class="flex items-center gap-8">
        {OGP_TEMPLATE_DATA.map((item) => (
          <OGPTemplateItem
            key={item.id}
            numbering={item.id}
            imgSrc={item.imgSrc}
            isSelected={ogpTemplate?.id === item.id}
            onClick={() => setOgpTemplate(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export { OGPTemplate };
