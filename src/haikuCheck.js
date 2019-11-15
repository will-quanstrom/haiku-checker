export function Poem(text) {
    this.text = text;
}


Poem.prototype.checkLines = function () {
    let writing = this.text
    writing = writing.split('\n');
    for(let i = 0; i < writing.length; i++) {
        if(writing.indexOf("") != -1) {
            let index = writing.indexOf("");
            writing.splice(index, 1, );

        } else if(writing.indexOf(" ") != -1) {
            let index = writing.indexOf(" ");
            writing.splice(index, 1, );
        }
    }
    if(writing.length == 3){
    return 'Your poem has 3 lines!';
    } else {
        return 'Your poem does not have 3 lines!';
    }
}

Poem.prototype.checkSyllables = function () {
    let writing = this.text
    writing = writing.split('\n');
    for(let i = 0; i < writing.length; i++) {
        if(writing.indexOf("") != -1) {
            let index = writing.indexOf("");
            writing.splice(index, 1, );

        } else if(writing.indexOf(" ") != -1) {
            let index = writing.indexOf(" ");
            writing.splice(index, 1, );
        }
    }
    let firstLine = writing.slice(0, 1);
    let secondLine = writing.slice(1, 2);
    let thirdLine = writing.slice(2, 3);

    let firstLineSyl = 0;
    for(let j = 0; j < firstLine.length; j++) {
        if(firstLine[j].length <= 3) { firstLineSyl++;  } else {                        
        let word = firstLine[j].replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   
        word = word.replace(/^y/, '');                                 
        firstLineSyl += word.match(/[aeiouy]{1,2}/g).length; 
    }
    }
    let secondLineSyl = 0;
    for(let k = 0; k < secondLine.length; k++) {
        if(secondLine[k].length <= 3) { secondLineSyl++;  } else {                        
        let word2 = secondLine[k].replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   
        word2 = word2.replace(/^y/, '');                                 
        secondLineSyl += word2.match(/[aeiouy]{1,2}/g).length;                    
    }
    }
    let thirdLineSyl = 0;
    for(let l = 0; l < thirdLine.length; l++) {
        if(thirdLine[l].length <= 3) { thirdLineSyl++;  } else {                        
        let word3 = thirdLine[l].replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   
        word3 = word3.replace(/^y/, '');                                 
         thirdLineSyl += word3.match(/[aeiouy]{1,2}/g).length;                    
    }
    }
        return [firstLineSyl, secondLineSyl, thirdLineSyl];

}

