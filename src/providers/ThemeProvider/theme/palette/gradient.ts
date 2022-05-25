import { blue } from './colors/blue';
import { byName } from './colors/byName';

export const gradient = {
  blue1: `linear-gradient(90deg, ${blue[200]}, ${blue[500]})`,
  blue1Disabled: `linear-gradient(90deg, ${byName.athensGray}, ${byName.alto})`,
  blue2: `linear-gradient(90deg, ${blue[100]}, ${blue[300]})`,
};

// TODO: pending for migration from scss files
//   linear-gradient(#639BF0EC, #9097FFE8);
//   linear-gradient(0deg, #44C1F8 13.15%, #3027EF 76.98%);
//   linear-gradient(154.54deg, #42B2F8 16.13%, #3440F1 88.84%);
//   linear-gradient(180.26deg, #FDFFFF -17.71%, #44C6FA 114.33%);
//   linear-gradient(180deg, #44C1F8 13.15%, #3027EF 76.98%);
//   linear-gradient(180deg, rgb(255 255 255 / 51%) 0%, rgb(102 102 102 / 54.1%) 0.01%, rgb(0 0 0 / 56.3%) 100%);
//   linear-gradient(180deg, rgb(255 255 255 / 6.8%) 0%, rgb(0 0 0 / 22%) 100%);
//   linear-gradient(270deg, #3027EF, #44C1F8);
//   linear-gradient(270deg, #3027F2 9.36%, #44C5FA 94.52%);
//   linear-gradient(270deg, #5540C7 5.87%, #5A48CC 21.24%, #5F50D0 34.48%, #6178E1 52.5%, #639CF0 69.99%, #6CA1F4 88.53%, #76A7F8 107.61%);
//   linear-gradient(344.4deg,#44C1F8 19.21%,#1F42D3 50.93%,#03122D 92.44%);
//   linear-gradient(357.31deg, #02101E -14.9%, #15257A 64.83%);
//   linear-gradient(90.07deg, #3027EF -0.45%, #44C1F8 102.41%);
//   linear-gradient(90.07deg, #44C1F8 -0.45%, #3027EF 102.41%);
//   linear-gradient(90.07deg, #44C1F8 -0.45%, #3027EF 102.41%);
//   linear-gradient(90deg, #3027EF, #44C1F8);
//   linear-gradient(90deg,rgb(105 203 242 / 100%),rgb(85 105 218 / 100%));
//   linear-gradient(90deg,rgb(68 193 248 / 100%),rgb(48 39 239 / 100%));
//   linear-gradient(91.98deg, #44C1F8 -0.44%, #3027EF 54.31%);
//   linear-gradient(92.29deg, #44C1F8 -0.44%, #3027EF 26.18%);
//   linear-gradient(93.42deg, #44C1F8 -0.43%, #3027EF 93.77%);
//   linear-gradient(93.58deg,#44C1F8 -0.43%,#3027EF 136.3%);
//   linear-gradient(rgb(0 0 0 / 10%) 10%, rgb(0 0 0 / 10%));
//   linear-gradient(rgb(0 0 0 / 60%) 10%, rgb(0 0 0 / 15%));
//   linear-gradient(rgb(255 255 255 / 0%),rgb(255 255 255 / 0%));
//   linear-gradient(to right, #5540C7, #76A7F8);
