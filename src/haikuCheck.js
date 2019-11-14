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

    for(let j = 0; j < firstLine.length; j++) {
        let firstLineSyl = 0;
        if(firstLine[j].length < 3) {
            firstlineSyl++;
        } else {
            let vowels = firstLine[j].match(/[aeiou]/ig);
            firstLineSyl += vowels.length;
        }
        return firstLineSyl;
    }






    
}

