import './App.css';
import {connect} from 'react-redux';
import SelectedImage from './components/selected-image/SelectedImage';
import GalleryFrame from './components/gallery-frame/GalleryFrame';
import EntryPage from './components/entry-page/EntryPage';
import DateInput from './components/date-input/DateInput';
import ImageInfo from './components/image-info/ImageInfo';

//NASA Key
// const KEY = "yCdP2Ksp5Z28lqwFRQPOakIjlc1vcMqcYIUP6fuD";

//https://api.nasa.gov/planetary/apod?api_key=yCdP2Ksp5Z28lqwFRQPOakIjlc1vcMqcYIUP6fuD

// const getPicture = () => {
//   axios.get(`https://api.nasa.gov/planetary/apod?api_key=${KEY}/&date=${date}`)
//   .then(response => {
//     console.log(response.data);
//     return response.data ;
//   })
//   .catch(err => console.log(`There was an error making this request: ${err.message}`))
// }

// const getPicture = async () => {
//   const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${KEY}&date=${date}`);
//   if(response.status === 200) {
//     console.log(response)
//     console.log(response.data);
//     return response.data
//   } else {
//     throw new Error("Htt response error: " + response.status)
//   }
// }

// const nasaImage = getPicture()


function App({date}) {
  if(date) {
    return(
      <div className="main-page__container">
        <SelectedImage />
        <div className="main-page__content">
          <ImageInfo />
          <DateInput />
        </div>
        <GalleryFrame /> 
      </div>      
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
