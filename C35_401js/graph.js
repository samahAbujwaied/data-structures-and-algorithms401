'use strict';
class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this._adjacencyList = new Map();
    }
    addVertexNode(vertex) {
        this._adjacencyList.set(vertex, []);
    }

    addDirectedEdge(startVertex, endVertex, weight) {
        if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
            console.log("NOT FOUND!");
            return;
        }
        const adjacencies = this._adjacencyList.get(startVertex);
        adjacencies.push(new Edge(endVertex, weight));
    }

    getNeighbours(vertex) {
        if (!this._adjacencyList.has(vertex)) {
            console.log("NOT FOUND!");
            return;
        }
        return this._adjacencyList.get(vertex);
    }

    printAll() {
        for (const [vertex, edge] of this._adjacencyList.entries()) {
            console.log(' vertex : ', vertex , ' Edge : ' , edge);
          
        }
    }
    getNodes() {
        return this._adjacencyList.entries();
    }

    size() {
        return this._adjacencyList.size
    }
    included(vertex) {
        return this._adjacencyList.get(vertex) ? true : false;
    }
    isEmpty() {
        return this._adjacencyList.size > 0 ? false : null
    }

}

module.exports ={ Graph ,Vertex}

// const graph = new Graph();

// const two = new Vertex(20);
// const three = new Vertex(30);
// const six = new Vertex(60);
// const seven = new Vertex(70);
// const eight = new Vertex(80);

// graph.addVertexNode(two);
// graph.addVertexNode(three);
// graph.addVertexNode(six);
// graph.addVertexNode(seven);
// graph.addVertexNode(eight);

// graph.addDirectedEdge(two, six ,1);
// graph.addDirectedEdge(two, three,2);
// graph.addDirectedEdge(three, seven,4);
// graph.addDirectedEdge(eight, two,3);
// graph.addDirectedEdge(three, six,2);
// graph.printAll()

// console.log(graph.getNeighbours(two));

