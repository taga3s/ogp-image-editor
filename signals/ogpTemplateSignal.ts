import { signal } from "@preact/signals";

export type OGPTemplateData = {
  id: number;
  imgSrc: string;
};

const store = signal<OGPTemplateData | undefined>(undefined);

export const selectedOgpTemplateSignal = () => {
  return {
    selectedOgpTemplate: store.value,
    setSelectedOgpTemplate: (data: OGPTemplateData) => {
      store.value = data;
    },
  };
};
