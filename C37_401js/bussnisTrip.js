'use strict';

class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }
    addEdge(start, end, weight) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            return;
        }
        const adjacencies = this.adjacencyList.get(start);
        adjacencies.push(new Edge(end, weight));
    }

    getNeighbours(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            return;
        }
        return this.adjacencyList.get(vertex);
    }
}

function businessTrip(graph, cityArray) {
    let totalCost = 0;
    let check = false;
    for (let i = 0; i < cityArray.length - 1; i++) {
        let neighbors = graph.getNeighbours(cityArray[i]);
        console.log('neighbors',neighbors);
        for (let j = 0; j <= neighbors.length - 1; j++) {
            if (cityArray[i + 1] === neighbors[j].vertex) {
                totalCost += neighbors[j].weight;
                check = true;
            }
        }
        if (check === false) {
            totalCost = 0;
            check = false;
            return `False, $${totalCost}`;
        }
    }

    return `True, $${totalCost}`;
}
let graph = new Graph();
graph.addVertex("Pandora")
graph.addVertex("Arendelle")
graph.addVertex("Metroville")
graph.addVertex("Monstropolis")
graph.addVertex("Narnia")
graph.addVertex("Naboo")

graph.addEdge("Pandora", "Arendelle" ,150)
graph.addEdge("Metroville","Pandora" ,82)
graph.addEdge("Arendelle","Metroville",99)
graph.addEdge("Arendelle","Monstropolis",42)
graph.addEdge("Metroville","Monstropolis",150)
graph.addEdge("Metroville","Narnia",37)
graph.addEdge("Metroville","Naboo",26)
graph.addEdge("Monstropolis","Naboo",73)
graph.addEdge("Narnia","Naboo",250)

console.log(businessTrip( graph ,['Metroville', 'Pandora' ]));
console.log(businessTrip(graph,['Arendelle','Monstropolis', 'Naboo']));
console.log(businessTrip(graph,['Naboo', 'Pandora']));
console.log(businessTrip(graph,['Narnia', 'Arendelle', 'Naboo']));

module.exports = { Graph, businessTrip};