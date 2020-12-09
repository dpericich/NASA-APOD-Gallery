import './App.css';
import axios from 'axios';
import {connect} from 'react-redux';
import EntryPage from './components/entry-page/EntryPage';

const KEY = "yCdP2Ksp5Z28lqwFRQPOakIjlc1vcMqcYIUP6fuD";
const date = "2020-05-15" //YYYY-MM-DD
//https://api.nasa.gov/planetary/apod?api_key=yCdP2Ksp5Z28lqwFRQPOakIjlc1vcMqcYIUP6fuD

// const getPicture = () => {
//   axios.get(`https://api.nasa.gov/planetary/apod?api_key=${KEY}/&date=${date}`)
//   .then(response => {
//     console.log(response.data);
//     return response.data ;
//   })
//   .catch(err => console.log(`There was an error making this request: ${err.message}`))
// }

const getPicture = async () => {
  const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${KEY}&date=${date}`);
  if(response.status === 200) {
    console.log(response)
    console.log(response.data);
    return response.data
  } else {
    throw new Error("Htt response error: " + response.status)
  }
}

const nasaImage = getPicture()


function App({date}) {
  if(date) {
    return(
      <h1>{date}</h1>
      
    )
  } else {
    return(
      <EntryPage />
    )
  }
}

const mapStateToProps = (state) => {
  return {date: state.currentDate.date};
}

export default connect(mapStateToProps)(App);
