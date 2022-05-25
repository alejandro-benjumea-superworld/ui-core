import { blue } from './colors/blue';

export const gradient = {
  theme: `linear-gradient(90deg, ${blue[200]}, ${blue[400]})`,
  footerGradient: `linear-gradient(180deg, ${blue[600]}, ${blue[800]}, ${blue[900]})`,
};

// TODO: pending for migration from scss files
//   linear-gradient(90deg, $arctic, $royalBlue); - main button
//   linear-gradient(270deg, $arctic, $royalBlue); - main button reflected
//   linear-gradient(154.54deg, $arctic 16.13%, $royalBlue 88.84%); - radio button
//   linear-gradient(90deg, $arctic -0.44%, $royalBlue 26.18%); - subscribe to us text
//   linear-gradient(344.4deg, $arctic 19.21%, $royalBlue 50.93%, $midnightBlue 92.44%); - sign in bg
//   linear-gradient(180deg, $daisy -17.71%, $arctic 114.33%); - sign in text
//   linear-gradient(180deg, $navy 0%, $admiral 25.52%, $midnightBlue 100%); - footer bg
//   linear-gradient(rgb(255 255 255 / 0%), rgb(255 255 255 / 0%)); - white
