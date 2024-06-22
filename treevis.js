class Tree{
    constructor(val=0){
        this.val=val;
        this.left=null;
        this.right=null;
    }

    height() {
        if(this.left!=null && this.right!=null )    
            return Math.max(this.left.height(),this.right.height())+1;
        else if(this.left)
            return this.left.height()+1;
        else if(this.right)
            return this.right.height()+1;
        else
            return 1;

    }
}


function constructTree(arr){
    let tree=new Tree(arr[0])
    let i=1;
    let q=[tree];
    while(i<arr.length){
        node=q.shift();
        if(node==null)
            continue;
        if(arr[i]!='null'){
            node.left=new Tree(arr[i]);
            q.push(node.left);
        }
        i+=1;
        if(i>=arr.length)
            break;
        if(arr[i]!='null'){
            node.right=new Tree(arr[i]);
            q.push(node.right);
        }
        i+=1;
    }
    return tree;
}

let scale=window.devicePixelRatio;
let colors=["#0099ff",'#9802dc',"#45cc56","#5605aa"];
function visualizeTree(ctx,tree,ptr,start=0,end=null,height=1,parentPos=null,offset=null){
    if(tree.val=="null")
        return;
    if(end==null){
        end=tree.height();
        canvas.width=250*end*scale;
        canvas.height=100*end*scale;
        offset=canvas.width-(300*end)+200*canvas.style.width;
        end=end*end-1;
        
            
    }
    let mid=Math.floor((start+end)/2);
    let radius=15;
    let circlePosition={x:offset+mid*(radius*2),y:height*3*radius};
    if(start==end)
        mid=start;
    if(tree.left!=null)
        visualizeTree(ctx,tree.left,ptr,start,mid,height+1,circlePosition,offset);
    if(tree.right!=null)
        visualizeTree(ctx,tree.right,ptr,mid+1,end,height+1,circlePosition,offset);
    if(parentPos!=null){
        ctx.beginPath();
        ctx.strokeStyle="#000199";
        ctx.moveTo(parentPos.x,parentPos.y);
        ctx.lineTo(circlePosition.x,circlePosition.y);
        ctx.stroke();
    }
    ctx.fillStyle="#9a9b9c";
    for(i=0;i<ptr.length;i++){
        if(ptr[i]==tree){
            ctx.fillStyle=colors[i%colors.length];
        }
    }
    ctx.beginPath();
    ctx.arc(circlePosition.x,circlePosition.y,radius,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(circlePosition.x,circlePosition.y,radius,0,2*Math.PI);
    ctx.stroke();
    s=tree.val+'';
    let size=15-(s.length);
    if (size<5)
        size=5;
    ctx.fillStyle="black";
    ctx.font=size+"px Arial";
    ctx.fillText(tree.val,circlePosition.x-5-s.length,circlePosition.y+4);
    return;
}




