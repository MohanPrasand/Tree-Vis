
dfsbutton.addEventListener("click",async()=>{
    tree=getTree();
    q=[tree];
    while(q.length>0){
        node=q.pop();
        if (node==null)
            continue;
        q.push(node.right,node.left);
        visualizeTree(ctx,tree,[node]);
        await delay(getSpeed());
    }
})