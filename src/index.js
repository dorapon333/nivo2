import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import { ResponsiveNetwork } from '@nivo/network'
import { ResponsiveLine } from '@nivo/line'

//ネットワーク図
const NetworkChart = (props) => {
  
  const step = props.step 
  const newNodes=props.newNodes
  const newLinks=props.newLinks
return (
  <div style={ {"width": "1000px", "height" : "1000px"}} >

    <ResponsiveNetwork        
      nodes={newNodes}    
      links={newLinks}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      repulsivity={3}
      iterations={50}
      nodeColor={(node) =>{
        if ( node.values[step] === 1 ){
          return "red"
        }else if( node.values[step]  === 0){
          return "gray"
        }else if( node.values[step] === -1){
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
const LineChart = (props) => {
  const step = 50//props.step 
  const newNodes=props.newNodes


  const LineNodes = newNodes
  //各ステップごとの-1,0,1の数を数えるcountの作成し０で初期化
  var count = { Negative: {}, Neutral: {},Positive:{} }
  for (var d = 0; d < step; d++) {
    count.Negative[d] = 0;
    count.Neutral[d] = 0;
    count.Positive[d]= 0;
  }
  //countに対して、実際に-1,0,1の数を数えて代入
  const valueset= Array.from(new Set(LineNodes.map(({ values }) => values)));
  for (var v =0; v < step; v++) {
    for(const j of valueset){
      if (j[v] === -1) {
        count.Negative[v] += 1;
      } else if(j[v] === 0){
        count.Neutral[v] += 1;
      }else  if(j[v] === 1){
        count.Positive[v] += 1;
      }
    }
 }

//数えられたcountに対して、それを割合に変換する
var num=1.0;
 for(var i=0; i< 3 ; i++){
   for(var j=0; j<step; j++){
     num=1.0;
     if(i===0){
      num = count.Negative[j]/ LineNodes.length * 100
      count.Negative[j] = Math.round(num * 10) / 10
     }else if(i===1){
      num = count.Neutral[j]/ LineNodes.length * 100
      count.Neutral[j] = Math.round(num * 10) / 10
     }else{
      num = count.Positive[j]/ LineNodes.length * 100
      count.Positive[j] = Math.round(num * 10) / 10
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
//console.log(result)

return (
  <div style={ {"width": "1000px", "height" : "500px"}} >
    <ResponsiveLine
            
      data={result}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 0, max: 100, stacked: false, reverse: false }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'TimeStep',
          legendOffset: 36,
          legendPosition: 'middle'
      }}
      axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'ratio',
          legendOffset: -40,
          legendPosition: 'middle'
      }}
     colors={(data) =>{
      if ( data.id === "Negative"){
        return "blue"
      }else if( data.id  === "Neutral"){
        return "gray"
      }else {
        return "red"
      }
    }}
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
  const [step, setStep] = useState(20);
  const handleSubmit = (event) =>{
    event.preventDefault()
    setStep(+event.target.elements.step.value)
  }

//data set
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
        link.source = link.source.toString();
        link.target = link.target.toString();
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

  //次数について
  function Degcount(value){
    var Degc = 0;
    for(const links of newLinks){
      if(  (value.id === links.source) || (value.id === links.target)){  
        Degc++;
      }
    }
    if(Degc > 1){
      value.Degree= Degc
      return value
    }
  }
  var DegNodes = []
  DegNodes = newNodes.filter(Degcount)
  console.log(DegNodes.value)
  DegNodes.sort(
    function(a,b){
      return (
        a.Degree > b.Degree ? -1 : 1
      );
    }
  );
  DegNodes.slice(0,99)
  console.log(DegNodes)
  



  return(
  
     
    <div>
      <head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css"></link></head>


{/*配置　途中*/} 
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-3">     
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child box">
                <p className="title">Positive</p>
                <p className="subtitle">プルダウンメニュー作成</p>

                <div className="control">
                  <div className="select">
                    <select>
                      <option>Select dropdown</option>
                      <option>With options</option>
                    </select>
                  </div>
                </div>
              </article>

              <article className="tile is-child box">
                <p className="title">Negative</p>
                <p className="subtitle">プルダウンメニュー作成</p>
                
                <div className="control">
                  <div className="select">
                    <select>
                      <option>Select dropdown</option>
                      <option>With options</option>
                    </select>
                  </div>
                </div>
              </article>

            </div>
          </div>

          <div className="tile">
            <div className="tile is-parent is-vertical">

              <article className="tile is-child box">
                <p className="title">Step</p>
                <p className="subtitle">step設定</p>
                {/*ステップ数更新作成*/}
                <form  onSubmit = {handleSubmit}>
                  <input  name = "step" type="number"  defaultValue = {step}/>
                  <button type = "submit"> 
                    ステップ数を変更する！
                  </button>
                </form>
                <p>現在のステップ数　{step}</p>
              </article>

              <article className="tile is-child box">
                <p className="title">Model</p>
                <p className="subtitle">出力するモデルを選択（？）</p>
                {/*選択肢ボタン作成*/} 
                <button className="button">ネットワーク</button>
                <button className="button">折れ線グラフ</button>
                <button className="button">ネットワーク・折れ線グラフ</button>
              </article>

            </div>
          </div>

          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child box">
                <p className="title">Start</p>
                <p className="subtitle">Startボタン作成</p>          
                <button className="button is-danger is-active">Start
                </button> 
                  <div className="content">
                  <p>スタートボタンを押すと右の図に反映されます</p>
                  </div>
              </article>
            </div>
          </div>

        </div>


        <div className="tile is-parent">
          <div className="tile">
            <article className="tile is-parent is-vertical">
            
                <p className="title">ネットワーク</p>
                <p  className="subtitle">コメント</p>
                <NetworkChart     step = {step} newNodes = {newNodes} newLinks = {newLinks}/>  
            
            </article>
            <article className="tile is-child is-vertical">
                <p className="title">折れ線グラフ</p>
                <p  className="subtitle">コメント</p>
                <LineChart   step = {step} newNodes = {newNodes} newLinks = {newLinks}/>   
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
render(<App />, document.querySelector('#content'))

