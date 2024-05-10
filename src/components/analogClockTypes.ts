export interface HandPropType {
    hour: string;
    miniute: string;
    second: string;
  }
  export interface AnalogClockProps {
    showSecondHand?: boolean;
    showMiniuteHand?: boolean;
    showBorder?: boolean;
    showHandBase?: boolean;
    smooth?: boolean;
    whiteNumbers?: boolean;
    square?: boolean;
    numbersType?: "numbers" | "dots";
    borderColor?: string;
    backgroundColor?: string;
    handColor?: HandPropType;
    handLength?: HandPropType;
    numbersColor?: string;
    handBaseColor?: string;
    size?: string;
    staticDate?: Date;
  }

  