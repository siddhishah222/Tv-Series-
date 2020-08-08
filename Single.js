import React,{Component} from 'react';
import Loader from './Loader';

class Single extends Component{
    state={
        show: null
    }

    componentDidMount(){
        const {id} =this.props.match.params;

        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then((response)=>response.json())
        .then(json=>this.setState({show:json}))
    }
    render(){
        
        const{show} = this.state;
        console.log(show);

        return(
           
            <div>
                {/* <p>Single Series- the series id {this.props.match.params.id}</p>    */}
                {/* match.params.id will show id in the URL */}
                {  show===null && <Loader/>  }
                {  
                    show!== null && 
                    <div>
                        <p> {show.name} </p>
                         <p>Premiered-{show.premiered}</p>
                        <p>Rating-{show.rating.average}</p>
                        <p>Episodes-{show._embedded.episodes.length}</p>
                        <p>
                            <img alt="Show" src={show.image.medium}/>
                        </p>
                        <p>Links-{show._links.previousepisode.href}</p>
                 </div>
                }
            </div>
        )
    }
}

export default Single;