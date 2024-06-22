let elem=document.getElementById("linktxt");
function copylnk(){
    elem.select();
    elem.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(elem.value).then(()=>{
        alert("copied");
    });
}