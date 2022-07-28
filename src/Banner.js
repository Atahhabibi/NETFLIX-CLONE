
import React,{useState ,useEffect} from 'react'
import axios from './axios';
import requests from './requests';
const base_url="https://image.tmdb.org/t/p/original/";
function Banner() {

    const [movie, setmovie] = useState([]);

    useEffect(() => {
       async function fetchData(){
           const request=await axios.get(requests.fetchNetflixOriginals)
           setmovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])

       }

       fetchData();
    }, [])

    console.log(movie);

  return (
    <header className='banner' style={{
        
        backgroundSize:"cover",
        backgroundImage:`url("${base_url}${movie?.backdrop_path}")`, backgroundPosition:'center center'}}
        
    >
    
        <div className='banner__contents'>
            <h1>
                {movie?.title||movie?.name||movie?.original_name}
            </h1>

           <div className='banner__buttons'>

           <button className='banner_button'>Play</button>
               <button className='banner_button'>My List</button>
               
               

           </div>

        </div>
      

    </header>
  )
}

export default Banner