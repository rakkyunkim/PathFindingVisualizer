
//run breath-first search algorithm on grid.
export function DFS(grid, startNode, endNode){
    const visitedNodesInOrder = [];
    if(startNode === endNode){
        return visitedNodesInOrder;
    }
    let stack = [startNode];

    while(stack){
        let currNode = stack.pop();
        const {row, col} = currNode;
        if(currNode.isWall) continue;
        currNode.isVisited = true;
        visitedNodesInOrder.push(currNode);

        if(currNode === endNode){
            return visitedNodesInOrder;
        }

        if(isNodeValid(row + 1, col, grid)){
            stack.push(grid[row + 1][col]);
            grid[row + 1][col].previousNode = currNode;
        }
        if(isNodeValid(row - 1, col, grid)){
            stack.push(grid[row - 1][col]);
            grid[row - 1][col].previousNode = currNode;
        }
        if(isNodeValid(row, col - 1, grid)){
            stack.push(grid[row][col - 1]);
            grid[row][col - 1].previousNode = currNode;
        }
        if(isNodeValid(row, col + 1, grid)){
            stack.push(grid[row][col + 1]);
            grid[row][col + 1].previousNode = currNode;
        }
    }
    
}
//check if neighbor is out of bounds, or visited already
function isNodeValid(row, col, grid) {
    //false if out of bounds OR visited
    if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col].isVisited){
        return false;
    }
  
    return true;
}
