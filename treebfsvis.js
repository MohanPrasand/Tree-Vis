bfsbutton.addEventListener("click",async()=>{
   tree=getTree();
    q=[tree];
    while(q.length>0){
        node=q.shift();
        if (node==null)
            continue;
        q.push(node.left,node.right);
        visualizeTree(ctx,tree,[node]);
        await delay(getSpeed());
    }
})