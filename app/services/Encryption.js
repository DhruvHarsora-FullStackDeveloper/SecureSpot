import JSZip from 'jszip';
import CryptoJS from 'crypto-js';
import fs from 'fs';
import path, { resolve } from 'path';
import zlib from 'zlib';

const binaryPath = path.resolve('./binaries');
const decodePath = path.resolve('./decoded');

export const encryptFile = async (filePath, key) => {
  // console.log(path.basename(filePath));
  // await compress(filePath);
  console.log(filePath);
  const fileName = path.basename(filePath);
  const dataFile = fs.readFileSync(filePath);
  const dataBase64 = dataFile.toString('base64');
  const encryptFile = CryptoJS.AES.encrypt(dataBase64, key);
  const buffer = new Buffer.from(encryptFile.toString(), 'base64');
  fs.writeFileSync(path.join(binaryPath, `${fileName}.enc`), buffer);
};

export const decryptFile = async (filePath, key) => {
  const dataFile = fs.readFileSync(filePath);
  const fileName = path.basename(filePath);
  const decodedFileName = path.parse(fileName).name;
  const decryptFile = CryptoJS.AES.decrypt(dataFile.toString('base64'), key);
  const result = decryptFile.toString(CryptoJS.enc.Utf8);
  const buffer = new Buffer.from(result, 'base64');
  fs.writeFileSync(path.join(decodePath, `${decodedFileName}`), buffer);
};

// or Return data: URL
// return 'data:' + fileType + ';base64,' +
//   decryptFile.toString(CryptoJS.enc.Utf8);

// encryptfile(filepath,key) : enc file path

// const compress = async (filePath) => {
//   const destination = `${filePath}.gz`;
//   let fileBuffer = fs.readFileSync(filePath);
//   return new Promise(async (resolve, reject) => {
//     return await zlib.gzip(fileBuffer, (err, response) => {
//       if (err) {
//         reject(err);
//       }
//       fs.writeFileSync(filePath, destination);
//       resolve();
//     });
//   });
//   // return new Promise((resolve, reject) => {
//   //   const gzip = zlib.createGzip();
//   //   console.log("gzip ===>", gzip);
//   //   const input = fs.readFileSync(filePath);
//   //   console.log("input ===>", input);
//   //   const output = fs.writeFileSync('filename.gz', input);
//   //   console.log("output ===>", output);
//   //   // input.pipe(gzip).pipe(output);
//   //   console.log("output1 ===>", input.pipe(gzip).pipe(output));
//   //   resolve();
//   // });
// };

// const compress = async (filePath) => {
//   const zip = new JSZip();
//   const fileName = path.basename(filePath);
//   const dataFile = fs.readFileSync(filePath);
//   zip.file(`${fileName}.gz`, dataFile);
//   zip
//     .generateNodeStream({ type: "nodebuffer", streamFiles: true })
//     .pipe(fs.createWriteStream("sample.zip"))
//     .on("finish", function () {
//       console.log("sample.zip written.");
//     });
//   console.log("compressed");
// };
