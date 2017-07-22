import React from 'react'
export default class Cuadritos4 extends React.Component {
    
     constructor (props){
        //super es la forma del hijo de comunicar al padre que existe
        super(props);

        this.state = {
             color:'green',
             
           
        }
    }


    render(){
        return (
            
                <div style={{backgroundColor:this.state.color, width:"100px", height:"100px"}}></div>
              
            
        );
    }
}