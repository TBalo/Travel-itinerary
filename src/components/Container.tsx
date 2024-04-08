import BaseButton from "./base-components/base-button";

type containerProps = {
  title: string;
  text: string;
  titleStyle?: string;
  textStyle?: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
  containerBackgroundColor: string;
};

const Container = ({
  title,
  text,
  titleStyle,
  textStyle,
  buttonBackgroundColor,
  buttonTextColor,
  containerBackgroundColor,
}: containerProps) => {
  return (
    <div
      className={`w-[30%] h-[auto] py-4 px-4 items-center justify-center flex flex-col gap-3  ${containerBackgroundColor}`}
    >
      <div className="items-start justify-left text-white flex flex-col gap-2">
        <p className={`font-bold  ${titleStyle}`}>{title}</p>
        <p className={`py-2 ${textStyle}`}>{text}</p>
      </div>
      <BaseButton
        style={`flex justify-center items-center w-full h-[44px] ${buttonBackgroundColor}`}
      >
        <p className={`text-14  ${buttonTextColor}`}>Add Activities</p>
      </BaseButton>
    </div>
  );
};

export default Container;
