import React from 'react';
import { connect } from 'react-redux';

const ImageInfo = (props) => {
    if (props.loading) {
        return <h2>Loading...</h2>;
    } else {
        return(
            <div className="image-info">
                <div className="image-info__title">
                    <div className="image-info__title--text"> {props.imgData.title} |</div>
                <div className="image-info__title--date"> | {props.date}</div>
                </div>
                <div className="image-info__description">{props.imgData.explanation}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //
    return {date: state.currentDate.date, imgData: state.img.spaceImg, loading: state.loading};
}

export default connect(mapStateToProps)(ImageInfo);