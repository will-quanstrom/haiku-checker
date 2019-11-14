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

