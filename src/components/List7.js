import React, {Component} from 'react'


class List7 extends Component{



    
    render(){
        return(
            <div className="flefle">
                <li>Account</li>
                <li>Orders</li>
                <li>Saved Items</li>
                <button style={{width:"100px", height:"27px", marginTop:"13px",fontWeight:"bold", background:"orange"}}><a href="/login" style={{textDecoration:"none", color:"white"}}>LOGOUT</a></button>
            </div>
        )
    }
}
export default List7;