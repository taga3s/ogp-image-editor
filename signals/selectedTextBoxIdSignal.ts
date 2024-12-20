import { signal } from "@preact/signals";

const store = signal<string>("");

export const selectedTextBoxIdSignal = () => {
  return {
    selectedTextBoxId: store.value,
    setSelectedTextBoxId: (id: string) => {
      store.value = id;
    },
  };
};
