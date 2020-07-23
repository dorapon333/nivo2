export const simulation = (graph, positiveIds, negativeIds, step) => {
  for (const node of graph.nodes) {
    node.values[0] = 0;
  }

  for (const node of graph.nodes) {
    for (const positiveId of positiveIds) {
      if (positiveId === node.id) {
        node.values[0] = 1;
      }
    }
    for (const negativeId of negativeIds) {
      if (negativeId === node.id) {
        node.values[0] = -1;
      }
    }
  }

  const adjacencyLists = {};
  for (const node of graph.nodes) {
    adjacencyLists[node.id] = [];
  }
  for (const link of graph.links) {
    adjacencyLists[link.source].push(link.target);
    adjacencyLists[link.target].push(link.source);
  }
  //step数まで行う
  for (let i = 1; i <= step; i++) {
    let count = 0;
    for (const node of graph.nodes) {
      for (const id of adjacencyLists[node.id]) {
        for (const node2 of graph.nodes) {
          if (id === node2.id) {
            if (node2.values[i] === 1) {
              count += 1;
            } else if (node2.values[i] === -1) {
              count -= 1;
            }
          }
        }
      }
      if (count > 0) {
        node[i] = 1;
      } else if (count < 0) {
        node[i] = -1;
      } else {
        node[i] = 0;
      }
    }
  }
};
