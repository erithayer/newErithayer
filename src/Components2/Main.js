import './Main.css'
// import img1 from '../Images/img (1).jpg'
// import img2 from '../Images/img (2).jpg'
// import img3 from '../Images/img (3).jpg'
// import img4 from '../Images/img (4).jpg'
import React from 'react'
// import Loading from '../Components/Loading'

class Main extends React.Component {
    constructor(props){
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
        fetch('http://my-json-server.typicode.com/haykavagian/erithayerData/general')
            .then(response => response.ok ? response.json() : Promise.reject() )
            .then(data => this.setState({
                general:data,
                loading:false
            }))
    }

    handleClick = (item) => {
        this.props.history.push(`/details/${item.link}`)

    }

    render(){
       
            // console.log(this.state.general[0]?.img, 'render')
        const {general} = this.state
        return(
        <div className="Container">
            <div className="cards">
                {general.map(item => {
                    // console.log(item)
                    return(
                        <div className="card card1" key={item.rank} onClick={()=>this.handleClick(item)} >
                            <div className="container">
                                <img src={item.img} alt="" className="Image"/>
                            </div>                              
                            <div className="details">
                                <h3>{item.rank}. {item.firstName} {item.lastName}</h3>
                                <p>{item.position}</p>
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