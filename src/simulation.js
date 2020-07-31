export const simulation = (graph, positiveIds, negativeIds, percent, step) => {
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
  const nodes = {};
  for (const node of graph.nodes) {
    nodes[node.id] = node;
  }
  let remainPercent = 100 - percent; //残りの割合

  for (let i = 1; i <= step; i++) {
    for (const node of graph.nodes) {
      let count = 0;
      let links = adjacencyLists[node.id].length;
      count += (node.values[i - 1] / (links + 1)) * percent;
      for (const id of adjacencyLists[node.id]) {
        const node2 = nodes[id];
        let calc = remainPercent / (links + 1);
        if (node2.values[i - 1] === 1) {
          count += 1 * calc;
        } else if (node2.values[i - 1] === -1) {
          count -= 1 * calc;
        }
      }
      if (count > 0) {
        node.values[i] = 1;
      } else if (count < 0) {
        node.values[i] = -1;
      } else {
        node.values[i] = 0;
      }
    }
  }

  return Object.assign({}, graph);
};
