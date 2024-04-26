let literals_global = require('./src/assets/literals/literals_global.json');
let literals_local_ES = require('./src/assets/literals/literals_local_es.json');
let literals_local_CA = require('./src/assets/literals/literals_local_ca.json');
let literals_local_EN = require('./src/assets/literals/literals_local_en.json');


literals_local_CA.CA = deepMerge(literals_local_CA.CA, literals_local_ES.ES);
literals_local_EN.EN = deepMerge(literals_local_EN.EN, literals_local_ES.ES);

module.exports = {
  "plugins": {
    "posthtml-include": {
      "root": "./src"
    },
    "posthtml-expressions": {
      "locals": {
        ...literals_global,
        ...literals_local_ES,
        ...literals_local_CA,
        ...literals_local_EN,
      }
    }
  }
};


function deepMerge(obj1, obj2) {
  const output = { ...obj2 };
  if (!obj1) {
    return output;
  }
  Object.keys(obj1).forEach((key) => {
    if (isObject(obj1[key]) && isObject(obj2[key])) {
      output[key] = deepMerge(obj1[key], obj2[key]);
    } else if (obj2.hasOwnProperty(key)) {
      output[key] = obj1[key];
    }
  });
  return output;
}


function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}
