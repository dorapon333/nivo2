import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import { ResponsiveNetwork } from '@nivo/network'
import { ResponsiveLine } from '@nivo/line'


//ネットワーク図
const NetworkChart = () => {
  const [data, setData] = useState({nodes : [], links: []})
  useEffect(() => {
    window
    .fetch('all.json')
    .then((response) => response.json())
    .then((data) =>{
      for (const node of data.nodes) {
        node.id = node.id.toString();
        node.radius = 5;      
      }
      for (const link of data.links ){
        link.color = "gray";  
        link.source = link.source.toString();//data.nodes[link.source].id
        link.target = link.target.toString();//data.nodes[link.target].id
        link.distance = 20;
      }
      setData(data)
    })
  },[]) 

  const newLinks = data.links.filter(function(item,index){   
    if(item.weight >=5){
      return true;
    }else{
      return false;
    }
  });  

 function check(value){
   for(const links of newLinks){
     if(  (value.id === links.source) || (value.id === links.target)){  
       return value
      }
    }
  }
  
  const newNodes = data.nodes.filter(check)
 

  
  console.log("これはNewWorkChartで使用するnewNodesの出力です");
  console.log(newNodes)
  
return (
  <div style={ {"width": "1000px", "height" : "1000px"}} >
    <ResponsiveNetwork        
      nodes={newNodes}    
      links={newLinks}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      repulsivity={3}
      iterations={50}
      nodeColor={(node) =>{
        const t = 20;
        if ( node.values[t] === 1 ){
          return "red"
        }else if( node.values[t]  === 0){
          return "gray"
        }else if( node.values[t] === -1){
          return "blue"
        }
      }}

      linkColor={(link) =>{
        return "gray"
      }}
      nodeBorderWidth={1}
      nodeBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
      linkThickness={(link) =>{
        return 2
      }}
      motionStiffness={160}
      motionDamping={12}
      />
    </div> 
  )
}







//折れ線グラフ
const LineChart = () => {

  const [data, setData] = useState({nodes : [], links: []})
  useEffect(() => {
    window
    .fetch('all.json')
    .then((response) => response.json())
    .then((data) =>{
      for (const node of data.nodes) {
        node.id = node.id.toString();
        node.radius = 5;      
      }
      for (const link of data.links ){
        link.color = "gray";  
        link.source = link.source.toString();//data.nodes[link.source].id
        link.target = link.target.toString();//data.nodes[link.target].id
        link.distance = 20;
      }
      setData(data)
    })
  },[]) 

  const newLinks = data.links.filter(function(item,index){   
    if(item.weight >=5){
      return true;
    }else{
      return false;
    }
  });  

 function check(value){
   for(const links of newLinks){
     if(  (value.id === links.source) || (value.id === links.target)){  
       return value
      }
    }
  }
  
  const newNodes = data.nodes.filter(check)

  //ここからLineChart用のデータの作成
  const step=50
  const LineNodes = newNodes
  //各ステップごとの-1,0,1の数を数えるcountの作成し０で初期化
  var count = { minus: {}, non: {},plus:{} }
  for (var d = 0; d < step; d++) {
    count.minus[d] = 0;
    count.non[d] = 0;
    count.plus[d]= 0;
  }
  //countに対して、実際に-1,0,1の数を数えて代入
  const valueset= Array.from(new Set(LineNodes.map(({ values }) => values)));
  for (var v =0; v < step; v++) {
    for(const j of valueset){
      if (j[v] === -1) {
        count.minus[v] += 1;
       // console.log("minus+")
      } else if(j[v] === 0){
        count.non[v] += 1;
        //console.log("non+")
      }else  if(j[v] === 1){
        count.plus[v] += 1;
        //console.log("plus+")
      }
    }
 }

//数えられたcountに対して、それを割合に変換する
var num=1.0;
 for(var i=0; i< 3 ; i++){
   for(var j=0; j<step; j++){
     num=1.0;
     if(i===0){
      num = count.minus[j]/ LineNodes.length * 100
      count.minus[j] = Math.round(num * 10) / 10
      console.log("minus::"+ count.minus[j])
     }else if(i===1){
      num = count.non[j]/ LineNodes.length * 100
      count.non[j] = Math.round(num * 10) / 10
      console.log("non::"+count.non[j])
     }else{
      num = count.plus[j]/ LineNodes.length * 100
      count.plus[j] = Math.round(num * 10) / 10
      console.log("plus::"+count.plus[j])
     }
   }
 }

//欲しいデータの形に作った配列等を代入する
const alldata=[]
 function dataset () {
  return Object.entries(count).map(([key,values]) => {
    var stepcount=0;
    return {
      id: key,
     // color: "gray",
      data: Object.values(values).map((d) => {
        return {
          x: stepcount++,
          y: d,
        };
      }),
    };
  });
}
const result = (dataset(alldata))
console.log(result)
return (
  <div style={ {"width": "1000px", "height" : "500px"}} >
    <ResponsiveLine        
      data={result}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 0, max: 100, stacked: true, reverse: false }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle'
      }}
      axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -40,
          legendPosition: 'middle'
      }}
     colors={{ scheme: 'nivo' }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
          {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemBackground: 'rgba(0, 0, 0, .03)',
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
      />
  </div> 
  )
}



const App = () => {
  return(
    <div>
      <NetworkChart/>  
      
      <LineChart/>
      
       
    </div>
  )
}
render(<App />, document.querySelector('#content'))