// import Jimp from 'jimp';
// import co from 'co';

// export function newImage(width, height) {
//     return new Promise((resolve, reject) => {
//         new Jimp(width, height, function (err, image) {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(image);
//             }
//         });
//     });
// }

// export function createImageFromArray(pixels, imgWidth, imgHeight) {
//     return co(function *() {
//         let image = yield newImage(imgWidth, imgHeight);
//         pixels.forEach((column, x) => {
//             column.forEach((mapCell, y) => {
//                 let pixelRGB = [];
//                 switch (mapCell.name) {
//                     case 'grass': pixelRGB = [10, 50, 10]; break;
//                     case 'cacti': pixelRGB = [10, 25, 10]; break;
//                     case 'forest': pixelRGB = [10, 25, 10]; break;
//                     case 'water': pixelRGB = [0, 0, 100]; break;
//                     case 'mountain': pixelRGB = [100, 100, 100]; break;
//                     case 'rock': pixelRGB = [75, 75, 75]; break;
//                     case 'sand': pixelRGB = [100, 100, 0]; break;
//                     case 'darksand': pixelRGB = [75, 75, 0]; break;
//                     default: pixelRGB = [0, 0, 0]; break;
//                 }
//                 let pixelHEX = Jimp.rgbaToInt(pixelRGB[0], pixelRGB[1], pixelRGB[2], 255);
//                 image.setPixelColor(pixelHEX, x, y);
//             });
//         });
//         return image;
//     });
// }

// export function writeImage(fileName, image) {
//     return new Promise((resolve, reject) => {
//         // write image if necessary
//         if (fileName) {
//             image.write(fileName, (err) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(true);
//                 }
//             });
//         } else {
//             resolve(false);
//         }
//     });
// }