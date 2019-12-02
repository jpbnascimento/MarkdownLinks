
// const str = "Uma comunidade open source nos propôs criar uma ferramenta, usando [Node.js](https://nodejs.org/), que leia e analise arquivos no formato [Node.js](http://nodejs.org/), que leia e analise arquivos no formato links e mostrar algumas"

// const regexGlobal = str.match(/\[(.+?)\]\((http.?:\/\/[^\)]*)\)/g);
// const regex = str.match(/\[(.+?)\]\((http.?:\/\/[^\)]*)\)/);

// console.log('globalllll', regexGlobal)
// console.log('regexxxx', regex[2])

// const xu = regexGlobal.map(reg => {
//     const xuxu = reg.match(/\[(.+?)\]\((http.?:\/\/[^\)]*)\)/);
//     return {seila: xuxu[2], outro: xuxu[1] }
// })

// console.log(xu)

// const arq = '/Users/Yara/Desktop/MarkdownLinks/README.md';

const fs = require('fs');



const mdLinks = (path) => {
    return new Promise((resolve, reject) => {
        if(!path) {
            reject('path not found')
        }
        fs.readFile(path, 'utf8', (error, result) => {
            if(error) {
                reject('file not found')
            } else {

            const regex = /\[(.+?)\]\((http.?:\/\/[^\)]*)\)/gm;
            
            const links = result.match(regex).map((item) => {
                const splited = item.split('](');
                return {
                    text: splited[0].slice(1),
                    href: splited[1].slice(0, -1),
                }
            })
            resolve(links);
        }
        })
    })}

module.exports = mdLinks