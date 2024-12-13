import type { TextBox } from "./OGPMakerPanel.tsx";

type Props = {
  isImageSelected: boolean;
  imgSrc: string;
  textBox: TextBox | undefined;
};

const OGPMakerPanelSelectedImage = (props: Props) => {
  const { isImageSelected, imgSrc, textBox } = props;
  return (
    <div class="flex flex-col items-center justify-center w-[960px] min-h-[600px] p-8">
      {isImageSelected
        ? (
          <div class="w-full relative">
            {textBox
              ? (
                <div
                  class={"absolute"}
                  style={`top:${textBox.y}px;left:${textBox.x}px;`}
                >
                  {textBox.text}
                </div>
              )
              : null}
            <img
              class="w-full"
              src={imgSrc}
              alt="Selected OGP Template"
            />
          </div>
        )
        : (
          <span class="font-bold">
            まずは、OGP画像テンプレートを選択します
          </span>
        )}
    </div>
  );
};

export { OGPMakerPanelSelectedImage };
