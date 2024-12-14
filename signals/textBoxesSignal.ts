import { signal } from "@preact/signals";

export type TextBox = {
  id: string;
  text: string;
  x: number;
  y: number;
  fontSize: number;
  fontWeight: "normal" | "medium" | "bold";
  color: string;
};

const store = signal<TextBox[]>([]);

export const textBoxesSignal = () => {
  return {
    textBoxes: store.value,
    setTextBoxes: (data: TextBox[]) => {
      store.value = data;
    },
  };
};
