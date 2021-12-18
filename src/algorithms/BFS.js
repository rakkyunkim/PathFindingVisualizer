
//run breath-first search algorithm on grid.
export function BFS(grid, startNode, endNode){
    const visitedNodesInOrder = [];
    if(startNode === endNode){
        return visitedNodesInOrder;
    }
    let queue = [startNode];
    visitedNodesInOrder.push(startNode);
    startNode.isVisited = true;

    while(queue){
        let currNode = queue.shift();
        if(currNode.isWall) continue;
        let neighbors = getUnvisitedNeighbors(currNode, grid);

        for(let i = 0; i < neighbors.length; i++){
            if(neighbors[i].isWall) continue;
            queue.push(neighbors[i]);
            visitedNodesInOrder.push(neighbors[i]);
            neighbors[i].isVisited = true;
            neighbors[i].previousNode = currNode;
            if(neighbors[i] === endNode){
                return visitedNodesInOrder;
            }
        }
    }
    
}

// get all the surrounding neighbors of a node.
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

// back-track using previous node.
export function getNodesInShortestPathOrderBFS(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
  }
  