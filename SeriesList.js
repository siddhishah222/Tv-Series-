import React from 'react';
import  './SeriesList.css';
import {Link} from 'react-router-dom';

// const seriesList=(props)=>{
//     return(
//         <div >
//             <ul className="seriesList"> 
//                     {props.list.map(series=>(
//                         <li key={series.show.id}>
//                             {series.show.name}
//                         </li>
//                     ))}
               
//             </ul>
//         </div>
//     )
// }

//    OR

const SeriesListItem=({series})=>(   //({series}) is important to pass below in line 38
    <li>
        <Link to={`/series/${series.show.id}`}>
            {series.show.name}     
            {/* to make that word linkable      */}
        </Link>
              
    </li>
)
//aadded additional function comp to reduce the code

const seriesList=(props)=>{
    return(
        <div >
            <ul className="seriesList"> 
                    {props.list.map(series=>(
                      <SeriesListItem key={series.show.id} series={series}/> 
                    ))}
               
            </ul>
        </div>
    )
}

export default seriesList;