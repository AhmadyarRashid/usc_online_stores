export const Theme = {
  PrimaryColor: 'green',
  SecondaryColor: '#3AA76D',
};

export const Colors = {
  Black: {
    core: '#000000',
    tint75Percent: '#141414',
    tint50Percent: '#404040',
    tint25Percent: '#808080',
  },
  White: {
    core: '#FFFFFF',
    tint75Percent: '#F7F5F3',
    tint50Percent: '#F7F7F7',
  },
  Concrete: {
    core: '#B1B2B4',
    tint75Percent: '#C5C5C7',
    tint50Percent: '#D8D9D9',
    tint25Percent: '#EBECEC',
  },
};

export const Components = {
  Button: Theme.PrimaryColor,
  Text: {
    H1: Colors.Black.tint75Percent,
    H2: Colors.Black.tint50Percent,
    H3: Colors.Black.tint25Percent,
    Light: Colors.White.core,
    Price: '#E95D3F',
    Warning: '#E95D3F',
  },
  Border: Colors.Concrete.tint50Percent,
  Background: {
    core: Colors.White.core,
    tint75Percent: Colors.White.tint75Percent,
  },
  Icon: Colors.Black.tint50Percent,
  HOME_BG: Theme.PrimaryColor,
  ACTIVITY_INDICATOR: Colors.Black.tint50Percent,
};
