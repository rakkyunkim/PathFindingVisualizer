import React, {Component} from 'react';
import Node from './Node/Node';
import {dijkstra, getNodesInShortestPathOrder} from '../algorithms/dijkstra';
import {BFS, getNodesInShortestPathOrderBFS} from '../algorithms/BFS';

import './PathfindingVisualizer.css';

let START_NODE_ROW = 10;
let START_NODE_COL = 15;
let FINISH_NODE_ROW = 10;
let FINISH_NODE_COL = 35;

const GRID_ROW = 30;
const GRID_COL = 60;

export default class PathfindingVisualizer extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      mouseIsPressed: false,
      startNodePressed: false,
      finishNodePressed: false,
      visualFinished: false,
      visualInProgress: false
    };
  }

  //set the grid when the program starts running. 
  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({grid});
  }

  //set up the wall with the mouse click.
  handleMouseDown(row, col) {
    if(this.state.visualInProgress) return;
    if(row === START_NODE_ROW && col === START_NODE_COL){
      this.setState({startNodePressed: true, mouseIsPressed: true});
    } else if(row === FINISH_NODE_ROW && col === FINISH_NODE_COL){
      this.setState({finishNodePressed: true, mouseIsPressed: true});
    }else{
      const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
      this.setState({grid: newGrid, mouseIsPressed: true});
    }
  }

  //dragging feature
  handleMouseEnter(row, col) {
    if(this.state.visualInProgress) return;
    if (!this.state.mouseIsPressed) return;
    if (this.state.startNodePressed === true){
      const newGrid = getNewGridWithStartNode(this.state.grid, row, col);
      this.setState({grid: newGrid});
    }else if(this.state.finishNodePressed === true){
      const newGrid = getNewGridWithFinishNode(this.state.grid, row, col);
      this.setState({grid: newGrid});
    }
    else{
      const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
      this.setState({grid: newGrid});
    }
  }
  handleMouseLeave(row, col) {
    if (this.state.startNodePressed){
      const newGrid = this.state.grid.slice();
      const node = newGrid[row][col];
      const newNode = {
        ...node,
        isStart: !node.isStart,
      };
      newGrid[row][col] = newNode;
      this.setState({grid: newGrid});
    } else if (this.state.finishNodePressed){
      const newGrid = this.state.grid.slice();
      const node = newGrid[row][col];
      const newNode = {
        ...node,
        isFinish: !node.isFinish,
      };
      newGrid[row][col] = newNode;
      this.setState({grid: newGrid});
    }
  }

  handleMouseUp() {
    this.setState({mouseIsPressed: false});
    this.setState({startNodePressed: false});
    this.setState({finishNodePressed: false});
  }

  animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 1; i < visitedNodesInOrder.length; i++) {
      //if reached the finish node, start animating shortest path
      if (i === visitedNodesInOrder.length - 1) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 5 * i);
        return;
      }
      //change the style to visited node.
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-visited';
      }, 5 * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 1; i < nodesInShortestPathOrder.length - 1; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-shortest-path';
      }, 50 * i);
    }
    this.setState({visualInProgress: false});
    this.setState({visualFinished: true});
  }

  visualizeDijkstra() {
    if(this.state.visualInProgress === true) return;
    if(this.state.visualFinished){
      //reset
      this.reset(true);
      this.setState({visualFinished: false});
    }
    this.setState({visualInProgress: true});
    const {grid} = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  visualizeBFS(){
    if(this.state.visualInProgress === true) return;
    if(this.state.visualFinished){
      //reset
      this.reset(true);
      this.setState({visualFinished: false});
    }
    this.setState({visualInProgress: true});
    const {grid} = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = BFS(grid, startNode, finishNode);
    const nodesInShortestPathOrderBFS = getNodesInShortestPathOrderBFS(finishNode);
    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrderBFS);
  }
  //reset the grid
  reset(withWall){
    if(withWall){
      for (const row of this.state.grid) {
        for (const node of row) {
          node.isVisited = false;
          node.previousNode = null;
          node.distance = Infinity;
          if(!node.isWall && !node.isStart && !node.isFinish){
            document.getElementById(`node-${node.row}-${node.col}`).className =
              'node node';
          }
        }
      }
    }else{
      for (const row of this.state.grid) {
        for (const node of row) {
          node.isVisited = false;
          node.previousNode = null;
          node.distance = Infinity;
          node.isWall = false;
          if(!node.isStart && !node.isFinish){
            document.getElementById(`node-${node.row}-${node.col}`).className =
              'node node';
          }
        }
      }
    }
  }
  render() {
    const {grid, mouseIsPressed} = this.state;

    return (
      <>
        <button onClick={() => this.visualizeDijkstra()}>
          Visualize Dijkstra's Algorithm
        </button>
        <button onClick={() => this.visualizeBFS()}>
          Visualize BFS Algorithm
        </button>
        <button onClick={() => this.reset(true)}>
          Reset Board w/ Walls
        </button>
        <button onClick={() => this.reset(false)}>
          Reset Everything
        </button>
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div className="row" key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const {row, col, isFinish, isStart, isWall} = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      onMouseEnter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={() => this.handleMouseUp()}
                      onMouseLeave={(row, col) => this.handleMouseLeave(row, col)}
                      row={row}></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < GRID_ROW; row++) {
    const currentRow = [];
    for (let col = 0; col < GRID_COL; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};

//shallow copy grid and set the node into wall or unwall it.
const getNewGridWithWallToggled = (grid, row, col) => {
  if(row === START_NODE_ROW && col === START_NODE_COL) return grid;
  if(row === FINISH_NODE_ROW && col === FINISH_NODE_COL) return grid;
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

const getNewGridWithStartNode = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isStart: !node.isStart,
  };
  START_NODE_ROW = row;
  START_NODE_COL = col;
  newGrid[row][col] = newNode;
  return newGrid;
};
const getNewGridWithFinishNode = (grid, row, col) =>{
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isFinish: !node.isFinish,
  };
  FINISH_NODE_ROW = row;
  FINISH_NODE_COL = col;
  newGrid[row][col] = newNode;
  return newGrid;
}