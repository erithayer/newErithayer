import './Main.css'
import img1 from '../Images/img (1).jpg'
import img2 from '../Images/img (2).jpg'
import img3 from '../Images/img (3).jpg'
import img4 from '../Images/img (4).jpg'
import React from 'react'
import Loading from '../Components/Loading'

class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            loading: false,
            general: []
        }
    }



    componentDidMount() {
        this.setState({
            loading: true,
        })
        // console.log(this.state.general)
        fetch('http://localhost:3000/general')
            .then(response => response.ok ? response.json() : Promise.reject() )
            .then(data => this.setState({
                general:data,
                loading:false
            }))
    }



    render(){
       
            console.log(this.state.general[0]?.img, 'render')
        const {general} = this.state
        return(
        <div className="Container">
            <div className="Grid-container">
                {general.map(item => {
                    console.log(item)
                    return(
                        <div className="Item Item1">
                                <img src={item.img} alt="" className="Image"/>
                          
                            <div className="Details">
                                <h4>{item.userId}. {item.title} {item.lastName}</h4>
                            </div>
                            
                        </div>
                    )
                })}
                
                
            </div>
        </div>
    )
        }
        
}
    


export default Main