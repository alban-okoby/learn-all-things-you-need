// CommonJS: Tout fichier est un module (par défaut)
// Modules : Encalsule le code et partage que le minimum néccéssaire

const { alban, okoby} = require('./3-names');
const { hello } = require('./4-utils');
const data = require('./5-alternative-flavor');
require('./6-mind-grenade');


hello(alban);
hello(okoby);
console.log(data);
