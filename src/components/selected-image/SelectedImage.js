import React from 'react';
import {connect} from 'react-redux';

const SelectedImage = (props) => {
    if (props.loading) {
        return <h2>Loading...</h2>;
    } else {
        return(
            <img src={props.imgData.url} alt={props.imgData.title} className="selected-image"/>
        )
    }
}

const mapStateToProps = (state) => {
    return {imgData: state.img.spaceImg, loading: state.loading}
}

export default connect(mapStateToProps, null)(SelectedImage);