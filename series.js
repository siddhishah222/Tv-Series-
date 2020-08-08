import React, {Component} from 'react';
import 'whatwg-fetch';
import SeriesList from './SeriesList';
import Loader from './Loader';
import Greeting from './greeting';

class Series extends Component{
 state={
     series:[],
     seriesName:'',
     isFetching: false
 }

 //componentDidMount(){
    //  const series=["Engineering","Doctors"];
    //  setTimeout(()=>{
    //   // this.setState({series:series}); //second series is updated series and 1st is state series
    //    this.setState({series}); //as we are using same name for state and property we can write above line as this line
    // }, 2000);
    // 1

//   // fetch('http://api.tvmaze.com/search/shows?q=vikings')
//    // .then((response)=>response.json())
//    // //.then(json=> console.log(json))
//    // .then(json=>this.setState({series:json}))
// //  }

   onInputChange=e=>{
       this.setState({seriesName: e.target.value, isFetching:true})

    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
    .then((response)=>response.json())
    //.then(json=> console.log(json))
    .then(json=>this.setState({series:json, isFetching:false}))
   }
   //remove componentDidMount, add fetch code in hanlder with `URL` and ${e.target.value} is whatever user input

    render(){
        const{series,seriesName,isFetching}= this.state;

        return(
            <div>
                 <h5> 
                  The length of series: {this.state.series.length}
                 </h5>
                 <div>
                  <Greeting message="Explore all your favourite TV series here"/>

                     <input 
                        type="text" 
                        onChange={this.onInputChange}
                        value={seriesName}
                        />
                 </div>
                 {
                    !isFetching && series.length===0 && seriesName.trim()==='' && <p>Please enter the series name</p>
                 }
                 {
                    !isFetching && series.length===0 && seriesName.trim() !=='' && <p>Series is not found</p>
                 }

                 {
                     isFetching && <Loader/>
                 }
                 {
                    !isFetching && <SeriesList list={this.state.series}/>
                 }
           
            
           </div>
        );
    }
}

export default Series;