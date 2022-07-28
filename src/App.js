import './App.css';
import Row from './Row';
import requests from './requests';
import axios from './axios';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      {/*Nav*/}
      {/*Banner*/}
      <Banner />
      
      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} ></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} ></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies} ></Row>
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documetries" fetchUrl={requests.fetchDocumantaries} ></Row>
    </div>
  );
}

export default App;
