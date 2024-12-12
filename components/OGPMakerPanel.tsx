import type { Signal } from "@preact/signals";

type Props = {
  selectedImgSrcSignal: Signal<string>;
};

const OGPMakerPanel = (props: Props) => {
  const { selectedImgSrcSignal } = props;
  return (
    <div class="flex flex-col items-center justify-center max-w-[960px] min-h-[600px] mx-auto p-8">
      <div class="w-full h-full">
        {selectedImgSrcSignal.value !== ""
          ? (
            <img
              class="w-full h-auto"
              src={selectedImgSrcSignal.value}
              alt="Selected OGP Template"
            />
          )
          : (
            <span class="font-bold">
              まずは、OGP画像テンプレートを選択します
            </span>
          )}
      </div>
    </div>
  );
};

export { OGPMakerPanel };
