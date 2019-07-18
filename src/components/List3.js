import React, {Component} from 'react'


class List3 extends Component{



    
    render(){
        return(
            <div className="flefle">
                <button style={{width:"100px", height:"27px", marginTop:"13px",fontWeight:"bold", background:"orange"}}><a href="/login" style={{textDecoration:"none", color:"white"}}>LOGIN</a></button>
                 <p style={{fontSize:"12px"}}>New Customer?<a href="/login" >Sign Up</a></p>
            </div>
        )
    }
}
export default List3;