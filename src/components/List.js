import React, {Component} from 'react'
import {Link, BrowserRouter} from 'react-router-dom'


class List extends Component{
    
    render(){
        return(
            <div>
              <ul className="flexy">
                  <h3>MOBILE PHONES</h3>
                  <li className="flex1">Samsung</li>
                  <li className="flex1">Apple</li>
                  <li className="flex1">Tekno</li>
                  <li className="flex1">Huawei</li>
                  <li className="flex1">MTN</li>
                  <li className="flex1">AIRTEL</li>

                  <h3>GROCERIES</h3>
                  <li className="flex1">Samsung</li>
                  <li className="flex1">Apple</li>
                  <li className="flex1">Tekno</li>    
                  
              </ul>
            </div>
        )
    }
}
export default List;