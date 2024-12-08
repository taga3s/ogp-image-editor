import type { Signal } from "@preact/signals";

type Props = {
  selectedImgSrcSignal: Signal<string>;
};

const OGPMakerPanel = (props: Props) => {
  const { selectedImgSrcSignal } = props;
  return (
    <div class="p-8 flex flex-col items-center">
      <div class="w-[720px] h-[400px]">
        {selectedImgSrcSignal.value !== ""
          ? <img src={selectedImgSrcSignal.value} alt="Selected OGP Template" />
          : <div>OGP 画像テンプレートが選択されていません</div>}
      </div>
    </div>
  );
};

export { OGPMakerPanel };
