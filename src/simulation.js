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
  //istep(全ステップ)を捜査
  for (let i = 1; i <= step; i++) {
    //各ステップにおいて全ノードを捜査
    for (const node of graph.nodes) {
      let count = 0;
      let links = adjacencyLists[node.id].length; //繋がっているノード数
      //前の自分の状態に設定した自分の意思をかけたもの
      count += node.values[i - 1] * percent;
      //繋がっているノードについてのfor
      for (const id of adjacencyLists[node.id]) {
        //node2は繋がっているノードのこと
        const node2 = nodes[id];
        //残りの割合を繋がっているノード数で割ることで１つあたりの割合を計算
        let calc = remainPercent / links;
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
      } else if (count === 0) {
        node.values[i] = 0;
      }
    }
  }

  return Object.assign({}, graph);
};
