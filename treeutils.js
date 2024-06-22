let input=document.getElementById("input")
let dfsbutton=document.getElementById("dfsbutton");
let canvas = document.getElementById("Canvas");
let ctx=canvas.getContext('2d');
let speedbar=document.getElementById("speedbar");
let down=document.getElementById("Image");
const delay = ms => new Promise(res => setTimeout(res, ms));
function getTree(){
    arr=input.value;
    arr=arr.split(',');
    tree=constructTree(arr);
    return tree;
}

function getSpeed(){
    return (Number(speedbar.max)-Number(speedbar.value));
}

down.addEventListener("click",()=>{
    var url=canvas.toDataURL("image/tree.png");
    var tab=window.open('treeVis','binary tree image');
    tab.document.write("<title>Tree-Vis</title><a href='"+url+"' download='Treeimage.png'>Download</a><img src='"+url+"' alt='from canvas'/>");
})