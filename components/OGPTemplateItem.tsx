type Props = {
  imgSrc: string;
  isSelected: boolean;
  onClick: () => void;
};

const OGPTemplateItem = (props: Props) => {
  const { imgSrc, isSelected, onClick } = props;
  return (
    <li
      class={`w-full h-32 ${
        isSelected ? "border-green-400 border-2 rounded-sm" : ""
      }`}
    >
      <button class="w-full h-full" type="button" onClick={onClick}>
        <img class="w-full h-full" src={imgSrc} alt="OGP Template" />
      </button>
    </li>
  );
};

export { OGPTemplateItem };
