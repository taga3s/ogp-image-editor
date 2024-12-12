type Props = {
  imgSrc: string;
  isSelected: boolean;
  onClick: () => void;
};

const OGPTemplateItem = (props: Props) => {
  const { imgSrc, isSelected, onClick } = props;
  return (
    <li
      class={`w-56 h-32 ${
        isSelected ? "border-cyan-700 border-4 rounded-sm relative" : ""
      }`}
    >
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
