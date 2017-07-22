import React from 'react'
export default class Cuadritos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color:this.props.colorList
        }
        
    }
    _handleClick = (e) =>{
        let colorName = e.target.id;
        alert(colorName);
    }
    render(){
        return <div>
                {
                    this.props.colorList.map((color, key) => {
                        return <div id={color} className="square" key={color.toString()} style={{backgroundColor:color, width:"200px", height:"200px"}} onClick={this._handleClick}></div>
                    })
                }
        </div>
    }
}