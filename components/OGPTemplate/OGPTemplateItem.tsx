type Props = {
  numbering: number;
  imgSrc: string;
  isSelected: boolean;
  onClick: () => void;
};

const OGPTemplateItem = (props: Props) => {
  const { numbering, imgSrc, isSelected, onClick } = props;
  return (
    <li
      class={`w-fit h-32 relative ${
        isSelected ? "outline-4 outline outline-cyan-700 rounded-sm" : ""
      }`}
    >
      <span class="absolute bottom-2 left-2">{numbering}</span>

      <button class="w-full h-full" type="button" onClick={onClick}>
        <img class="w-full h-full" src={imgSrc} alt="OGP Template" />
      </button>

      {isSelected && (
        <span class="absolute right-2 bottom-2 font-bold text-cyan-700">
          適用中
        </span>
      )}
    </li>
  );
};

export { OGPTemplateItem };
