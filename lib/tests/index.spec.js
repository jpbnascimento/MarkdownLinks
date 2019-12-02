const mdLinks = require('../index.js');

describe("mdLinks", () => {
    it("is a function", () => {
      expect(typeof mdLinks).toBe("function");
    });

    test("async callback", () => {
     return mdLinks('/Users/Yara/Desktop/MarkdownLinks/lib/tests/test.md')
     .then((Response) => {
        expect(Response).toEqual([{text: "Node.js", href: "https://nodejs.org/"}, {text: "Node.js", href: "http://nodejs.org/"} ]);
      })  
    });

    test('return a file error ', () => {
      return  mdLinks('/Users/Yara/Desktop/MarkdownLinks/lib/tes/test.md')
       .catch((response) => {
         expect(response).toEqual('file not found')
       })
     });

     test('return a error messenger', () => {
      return  mdLinks('')
       .catch((response) => {
         expect(response).toEqual('path not found')
       })
     });

});
