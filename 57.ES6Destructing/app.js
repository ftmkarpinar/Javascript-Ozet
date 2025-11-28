/********************Destructing Kullanımı******************/

let langs = ["C#","Javascript","Java","Python"];


// let lang1, lang2, lang3, lang4;

// lang1 = langs[0];
// lang2 = langs[1];
// lang3 = langs[2];
// lang4 = langs[3];    Bunun yerine:

let [lang1, lang2, lang3, lang4] = langs;

console.log(lang1, lang2, lang3, lang4);
