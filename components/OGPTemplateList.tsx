import type { Signal } from "@preact/signals";
import { OGPTemplateItem } from "./OGPTemplateItem.tsx";

type Data = {
  imgSrc: string;
};

const SAMPLE_DATA: Data[] = [];

interface Props {
  selectedImgSrcSignal: Signal<string>;
  handleImgSrc: (imgSrc: string) => void;
}
const OGPTemplateList = (props: Props) => {
  const { selectedImgSrcSignal, handleImgSrc } = props;

  return (
    <div class="h-[480px] p-6 m-8 border-2 rounded-md overflow-y-auto">
      <ul class="flex flex-col items-center gap-8 w-56">
        {SAMPLE_DATA.map((item) => (
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

export { OGPTemplateList };
