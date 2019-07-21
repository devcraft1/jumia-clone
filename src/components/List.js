import React, {Component} from 'react'


class List extends Component{
    
    render(){
        return(
            <div>
              <ul className="flexy">
                  <div>
                  <p style={{fontSize: "12px"}}>MOBILE PHONES</p>
                  <li className="flex1">Samsung</li>
                  <li className="flex1">Apple</li>
                  <li className="flex1">Tekno</li>
                  <li className="flex1">Huawei</li>
                  <li className="flex1">MTN</li>
                  <li className="flex1">AIRTEL</li>

                  <p style={{fontSize: "12px"}}>GROCERIES</p>
                  <li className="flex1">Samsung</li>
                  <li className="flex1">Apple</li>
                  <li className="flex1">Tekno</li>   
                  </div>
                  <div>
                  <p style={{fontSize: "12px"}}>MOBILE PHONES</p>
                  <li className="flex1">Samsung</li>
                  <li className="flex1">Apple</li>
                  <li className="flex1">Tekno</li>
                  <li className="flex1">Huawei</li>
                  <li className="flex1">MTN</li>
                  <li className="flex1">AIRTEL</li>

                  <p style={{fontSize: "12px"}}>GROCERIES</p>
                  <li className="flex1">Samsung</li>
                  <li className="flex1">Apple</li>
                  <li className="flex1">Tekno</li>  
                  <li className="flex1">Apple</li>
                  <li className="flex1">Tekno</li>
                  <li className="flex1">Huawei</li>
                  <li className="flex1">MTN</li>
                  <li className="flex1">AIRTEL</li>
                  </div>
              </ul>
            </div>
        )
    }
}
export default List;