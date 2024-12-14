import { signal } from "@preact/signals";

export type OGPTemplateData = {
  id: number;
  imgSrc: string;
};

const store = signal<OGPTemplateData | undefined>(undefined);

export const ogpTemplateSignal = () => {
  return {
    ogpTemplate: store.value,
    setOgpTemplate: (data: OGPTemplateData) => {
      store.value = data;
    },
  };
};
