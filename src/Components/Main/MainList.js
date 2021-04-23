import './MainList.css'
import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import Loading from '../Loading'



class MainList extends React.PureComponent {
    constructor(){
        super()
        this.state = {
            loading: false,
            general: []
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(nextProps.click);
    //     console.log(this.props.click);
    //     if(nextProps.click === this.props.click)
    //     return false;  
    //   }

    componentDidMount() {
        this.setState({
            loading: true,
        })
        
        fetch('https://api.erithay.com/things')
            .then(response => response.ok ? response.json() : Promise.reject() )
            .then(data =>  this.setState({
                loading: false,
                general: data
            }))
            
    }

    handleCardClick = (item) => {
        this.props.history.push(`/details/${item.link}`)

    }

    handleFacebookClick = (event, item) => {
        event.stopPropagation()
        const itemFacebook = item.facebook
        window.open(itemFacebook)
        
    }
    render(){
        const {click} = this.props
        const {general, loading} = this.state
        if(loading){
            return <Loading />
        }
        return(
            <div  className={click ? "Container active" : "Container"}>
              <div className="cards">
                {general.map(item => {
                    return(
                        <div className="card card1" key={item.ID} onClick={()=>this.handleCardClick(item)} >
                            <div className="container">
                                <img src={item.img} alt="" className="Image"/>
                            </div>                              
                            <div className="details">
                                <h3> {item.name} {item.surName}</h3>
                                <p>{item.sex}</p>
                               
                            </div>
                            
                        </div>
                    )
                })}
                
                
            </div>
        </div>
    )
        }
        
}
    


export default MainList