
export function astar(grid, startNode, endNode){
    const visitedNodesInOrder = [];
    const openSet = [];

    if(startNode === endNode){
        return visitedNodesInOrder;
    }
    startNode.gCost = 0;
    endNode.hCost = 0;

    visitedNodesInOrder.push(startNode);
    openSet.push(startNode);

    while(openSet.length > 0){
        let node = openSet[0];
        
        for(let i = 1; i < openSet.length; i++){
            if(openSet[i].fCost === Infinity) continue;
            //choose the node with the lowest fCost.
            if(openSet[i].fCost < node.fCost){
                node = openSet[i];
            }
            //if fCost is the same, choose the node with lower hCost.
            else if(openSet[i].fCost === node.fCost){
                if(openSet[i].hCost < node.hCost){
                    node = openSet[i];
                }
            }
        }

        const index = openSet.indexOf(node);
        if (index > -1) {
            openSet.splice(index, 1);
        }
        node.isVisited = true;

        if(node === endNode){
            return visitedNodesInOrder;
        }
        const neighbors = getUnvisitedNeighbors(node, grid);

        for(let i = 0; i < neighbors.length; i++){
            if(neighbors[i].isWall){
                continue;
            }
            const newCostToNeighbor = node.gCost + GetDistance(node, neighbors[i]);
            if(newCostToNeighbor < neighbors[i].gCost || openSet.indexOf(neighbors[i]) === -1){
                neighbors[i].gCost = newCostToNeighbor;
                neighbors[i].hCost = GetDistance(neighbors[i], endNode);
                neighbors[i].fCost = neighbors[i].gCost + neighbors[i].hCost;
                neighbors[i].previousNode = node;
                visitedNodesInOrder.push(neighbors[i]);
                if(openSet.indexOf(neighbors[i]) === -1){
                    openSet.push(neighbors[i]);
                }
            }
        }
    }
}
//g cost: distance from the starting node
//h cost: distance from the end node
//f cost: g cost + h cost

function getUnvisitedNeighbors(node, grid) {
    const neighbors = [];
    //extract column and row number from current node.
    const {col, row} = node;
      //insert neighboring nodes if not out of bounds
  
      if (row > 0) neighbors.push(grid[row - 1][col]);
      if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
      if (col > 0) neighbors.push(grid[row][col - 1]);
      if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  
    //only store neighbor that isn't visited yet.
    return neighbors.filter(neighbor => !neighbor.isVisited);
}

function GetDistance(nodeA, nodeB) {
    const dstCol = Math.abs(nodeA.col - nodeB.col); //x
    const dstRow = Math.abs(nodeA.row - nodeB.row); //y

    return dstCol + dstRow;
    /*if (dstCol > dstRow)
        return 14*dstRow + 10* (dstCol-dstRow);
    return 14*dstCol + 10 * (dstRow-dstCol);*/
}

