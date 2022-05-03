interface Options {
  isMute: boolean;
  isSnow: boolean;
  treeNumber: string;
  backgroundNumber: string;
  isGarland: boolean;
  garlandColor: string;
}

const defaultTreeNumber = '1';
const defaultBackgroundNumber = '1';
const defaultGarlandColor = 'garlandColor_multicolor';

const options: Options = {
  isMute: false,
  isSnow: false,
  treeNumber: defaultTreeNumber,
  backgroundNumber: defaultBackgroundNumber,
  isGarland: false,
  garlandColor: defaultGarlandColor,
};

export { options, Options, defaultTreeNumber, defaultBackgroundNumber, defaultGarlandColor };
