import type { Signal } from "@preact/signals";
import { OGPTemplateItem } from "./OGPTemplateItem.tsx";

type Data = {
  imgSrc: string;
};

const OGP_TEMPLATE_DATA: Data[] = [
  {
    imgSrc: "/ogp-template1.png",
  },
];

type Props = {
  selectedImgSrcSignal: Signal<string>;
  handleImgSrc: (imgSrc: string) => void;
};
const OGPTemplate = (props: Props) => {
  const { selectedImgSrcSignal, handleImgSrc } = props;

  return (
    <div class="p-6 mx-auto max-w-[800px] w-full border-2 rounded-md">
      <ul class="flex items-center gap-8">
        {OGP_TEMPLATE_DATA.map((item) => (
          <OGPTemplateItem
            key={item.imgSrc}
            imgSrc={item.imgSrc}
            isSelected={selectedImgSrcSignal.value === item.imgSrc}
            onClick={() => handleImgSrc(item.imgSrc)}
          />
        ))}
      </ul>
    </div>
  );
};

export { OGPTemplate };
