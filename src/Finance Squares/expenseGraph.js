//craete the graph node template
import { accountRecords } from "./AccountingRecords";
class GraphNode{
    constructor(expenseName){
        this.nodeName=expenseName;
        this.nodeId=0;

    }
    setNodeId(id){
        this.nodeId=id;
    }
}


let nodeArray=[];
//create as many nodees as the length of the accountRecords
let item=1;
accountRecords.forEach((account)=>{
    let temp= new GraphNode(account.accountName);
    temp.setNodeId(item);
    item++;
    nodeArray.push(temp)
})
console.log(nodeArray)




function undefinedRemover(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===undefined){
            arr.splice(i,1);
        }
    }
}

let nodes=nodeArray.length;
// let elements=[1,2,3,4,5,6,7,8];
let rows=nodes
let columns=nodes-1;

let adjList=[];
for(let i=0;i<nodes;i++){
    adjList[i]=[];
    for(let j=0;j<nodes;j++){
        if(nodeArray[i]!==nodeArray[j]){
            adjList[i][j]=nodeArray[j];
        }
    }
    undefinedRemover(adjList[i]);
}
console.log(adjList)

function searchId(id){
    for(let i=0;i<nodeArray.length;i++){
        if(nodeArray[i].nodeId == id){
            return nodeArray[i]
        }
        
    }
}

//now our graph is ready for use
//implement travesal algorithms
//1. DFS 
function autofill(arr,num,val){
    for(let i=0;i<num;i++){
        arr[i]=val;
    }
}
let visited = [];
autofill(visited,nodes,false);

function dfs(starting,visited,adjList){
    console.log(searchId(starting))
    visited[starting]=true;
    for(let i=0;i<adjList[starting-1].length;i++){
        if(visited[adjList[starting-1][i].nodeId]===false){
            dfs(adjList[starting-1][i].nodeId,visited,adjList)
            // console.log("Terry is back from visiting: ",adjList[starting-1][i])
        }
        // else{
        //     console.log("Node has alrady been visited")
        // }
        // console.log(visited[adjList[starting-1][i]])
    }
}
dfs(34,visited,adjList)






export {nodeArray}