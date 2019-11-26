function mdLinks(){
    const regex = /\[(.+?)\]\((https?:\/\/[^\)]*)\)/gm;
    const str = `[github](https://github.com/jpbnascimento/)
    [pontofrio](https://m.pontofrio.com.br/)
    maria feia
    jaqueline feia
    jessica linda 
    [google](https://www.google.com/)`;
    let m;

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        
        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
        });
    }
}

mdLinks();