'use strict';
const chalkPackage = require ('chalk');
const importedFunctions = require ('./src/sample.js');
const toGreen = chalkPackage.green;
//  just handle the error also bro
if (!process.argv[2]) {
  console.log(chalkPackage.red('ERROR : name is not given !!'));
} else {
  console.log(toGreen(importedFunctions.greet(process.argv[2])));
}

