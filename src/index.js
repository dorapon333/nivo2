import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import { ResponsiveNetwork } from '@nivo/network'


const App = () => {
  const [data, setData] = useState({nodes : [], links: []})
  useEffect(() => {
    window
    .fetch('all.json')
    .then((response) => response.json())
    .then((data) =>{
      for (const node of data.nodes) {
        node.color = "blue";
        node.id = node.id.toString();
        node.radius = 8;      
      }
      for (const link of data.links ){
         link.color = "gray";  
         link.source = link.source.toString();//data.nodes[link.source].id
         link.target = link.target.toString();//data.nodes[link.target].id
         link.distance = 30;
      }
      setData(data)
    })
  },[]) 
  
  const newLinks = data.links.filter(function(item,index){   
     if(item.weight >=5){
      return true;
    }else{
      return false;
    }  });  

 function check(value){
     for(const links of newLinks){
       if(value.id === (links.source || links.target) ){  
         return value
       }
     }
   }
  const newNodes = data.nodes.filter(check)


   console.log(newNodes)
   console.log(newLinks)  


return (
    <div style={{width: '800px', height: '800px'}} >
      <ResponsiveNetwork        
        nodes={newNodes}    
        links={newLinks}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        repulsivity={6}
        iterations={30}
        nodeColor={function(t){return t.color}}
        nodeBorderWidth={1}
        nodeBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
        linkThickness={function(t){return 2*(2-t.source.depth)}}
        motionStiffness={160}
        motionDamping={12}      />
    </div>  )}
render(<App />, document.querySelector('#content'))