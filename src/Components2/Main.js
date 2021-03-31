import './Main.css'
// import img1 from '../Images/img (1).jpg'
// import img2 from '../Images/img (2).jpg'
// import img3 from '../Images/img (3).jpg'
// import img4 from '../Images/img (4).jpg'
import React from 'react'
// import Loading from '../Components/Loading'
import facebook from '../images/facebook.svg'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'



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
        fetch('https://my-json-server.typicode.com/erithayer/data/general')
            .then(response => response.ok ? response.json() : Promise.reject() )
            .then(data => this.setState({
                general:data,
                loading:false
            }))
    }

    handleClick = (item) => {
        this.props.history.push(`/details/${item.link}`)

    }

    handleFacebookClick = (event, item) => {
        event.stopPropagation()
        const itemFacebook = item.facebook
        // this.props.history.push(itemFacebook)
        window.open(itemFacebook)
        
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
                                {/* <div className="icon"><img src={facebook} alt=""/></div> */}
                                <i className='icons'>
                                    <FaFacebookSquare onClick={(event) => this.handleFacebookClick(event,item)} className='faicon' style={{color:'#385d98'}} size={32}/>
                                    <FaTwitterSquare style={{color:'#00acee'}} size={32}/>
                                    <FaInstagramSquare style={{color:'#8a3ab9'}} size={32}/>
                                </i>
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