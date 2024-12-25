type Name = "normal" | "medium" | "bold";

const toFontWeightFromName = (name: Name): number => {
  switch (name) {
    case "normal":
      return 400;
    case "medium":
      return 500;
    case "bold":
      return 700;
  }
};

export { toFontWeightFromName };
