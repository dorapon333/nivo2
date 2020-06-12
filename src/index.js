import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import { ResponsiveNetwork } from '@nivo/network'


const NetworkChart = () => {
  const [data, setData] = useState({nodes : [], links: []})
  useEffect(() => {
    window
    .fetch('all.json')
    .then((response) => response.json())
    .then((data) =>{
      for (const node of data.nodes) {

        //node.color = "blue";
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
    }  });  

 function check(value){
     for(const links of newLinks){
       if(  (value.id === links.source) || (value.id === links.target)){  
         return value
       }
     }
   }
  const newNodes = data.nodes.filter(check)

  


   console.log(newNodes)
   console.log(newLinks)  


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
          return "blue"
        }else if( node.values[t]  === 0){
          return "gray"
        }else if( node.values[t] === -1){
          return "red"
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
      motionDamping={12}      />
    </div> 
  )
}


const App = () => {
  return(
    <div>
      <NetworkChart/>   
    </div>
  )
}
render(<App />, document.querySelector('#content'))