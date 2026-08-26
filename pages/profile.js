import {useState} from 'react'
export default function Profile(){const[id]=useState(()=>Math.floor(100000+Math.random()*900000))
return<div style={{textAlign:'center',padding:'40px',background:'#f5f5f5',minHeight:'100vh'}}>
<h1 style={{color:'#00B656'}}>👤 Profile</h1>
<div style={{background:'white',padding:'30px',borderRadius:'15px',maxWidth:'400px',margin:'0 auto'}}>
<p style={{fontSize:'14px',color:'#999'}}>PLAYER ID</p>
<h2 style={{fontSize:'48px',color:'#00B656'}}>#{id}</h2>
<p style={{color:'#666'}}>Joined: Today</p>
</div>
<a href="/"><button style={{background:'#666',color:'white',padding:'10px 20px',border:'none',borderRadius:'8px',margin:'20px'}}>← Home</button></a>
</div>}
