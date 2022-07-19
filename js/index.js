
var paragraph = document.getElementsByClassName('paras')


for(var i=0 ; i<5 ; i++){
    paragraph[i].style.display = "none"
}

function DisplayBlock(){
    for(var i=0 ; i<5 ; i++){
        paragraph[i].style.display = "block"
    }
}

function Displaynone(){
    for(var i=0 ; i<5 ; i++){
        paragraph[i].style.display = "none"
    }
}
