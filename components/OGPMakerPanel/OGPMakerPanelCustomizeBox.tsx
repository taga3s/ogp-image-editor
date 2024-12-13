import type { TextBox } from "./OGPMakerPanel.tsx";

type Props = {
  textBoxes: TextBox[];
  handleAddTextBox: (textBox: TextBox) => void;
  handleSetSelectedTextBoxId: (id: string) => void;
};
const OGPMakerPanelEditBox = (props: Props) => {
  const { textBoxes, handleAddTextBox, handleSetSelectedTextBoxId } = props;
  return (
    <div class="w-[320px] h-96 p-4 border-2 rounded-md">
      {/* TODO: Change to Icon Button */}
      <button
        type="button"
        class="px-4 py-2 bg-cyan-500 hover:bg-cyan-700 text-white font-bold rounded-md"
        onClick={() => {
          const id = crypto.randomUUID();
          handleAddTextBox({
            id: id,
            text: "タイトル",
            x: 16,
            y: 16,
            fontSize: 16,
            color: "#000000",
          });
          handleSetSelectedTextBoxId(id);
        }}
      >
        New TextBox
      </button>
      <ul class="mt-4 flex flex-col gap-4">
        {textBoxes.length
          ? (
            <li
              key={textBoxes[0].id}
              class="grid grid-cols-1 divide-y border-2 rounded-md"
            >
              <label class="flex items-center gap-4 p-2">
                文字サイズ{" "}
                <input
                  type="number"
                  value={textBoxes[0].fontSize}
                  min="0"
                  class="w-12"
                />
              </label>
              <label class="flex items-center gap-4 p-2">
                カラー <input type="color" value={textBoxes[0].color} />
              </label>
            </li>
          )
          : null}
      </ul>
    </div>
  );
};

export { OGPMakerPanelEditBox };
