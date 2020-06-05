import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import { ResponsiveNetwork } from '@nivo/network'


const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    window
    .fetch('all.json')
    .then((response) => response.json())
    .then((data) =>{
      setData(data)
    })
  },[])

 const newData = data.filter(function(item,index){
    if(item.nodes.values!== 1){
      return true;
    }else{
      return false;
    }
   
  });
 


  
  
  

  return (
    <div style={{width: '800px', height: '800px'}} >
      <ResponsiveNetwork
        data={newData}
        test0={console.log("コンソール出力テスト！")}
        

        
        nodes={data.nodes}
        test1={console.log(data.length)}
        links={data.values}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        repulsivity={6}
        iterations={60}
        nodeColor={function(t){return t.color}}
        nodeBorderWidth={1}
        nodeBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
        linkThickness={function(t){return 2*(2-t.source.depth)}}
        motionStiffness={160}
        motionDamping={12}
        
      />
    </div>
    
    
  )

  
}
render(<App />, document.querySelector('#content'))
