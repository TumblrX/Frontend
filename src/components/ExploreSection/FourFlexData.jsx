import React from 'react'

function FourFlexData(props) {
    const {posts}=props
    return (
        <div style={{display:"flex",flexWrap:"wrap"}}>
            <div style={{display:"flex"}}>
                {posts.map((item,index)=>{
                    if(index%4==0){
                      return   <div key={index}>{item}</div>
                    }
                })}
            </div>
            <div style={{display:"flex"}}>
                {posts.map((item,index)=>{
                    if(index%4==1){
                      return   <div key={index}>{item}</div>
                    }
                })}
            </div>
            <div style={{display:"flex"}}>
                {posts.map((item,index)=>{
                    if(index%4==2){
                       return  <div key={index}>{item}</div>
                    }
                })}
            </div>
            <div style={{display:"flex"}}>
                {posts.map((item,index)=>{
                    if(index%4==3){
                       return  <div key={index}>{item}</div>
                    }
                })}
            </div>
        </div>
    )
}

export default FourFlexData
