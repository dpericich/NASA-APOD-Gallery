import React from 'react';
import {connect} from 'react-redux';

const SelectedImage = (props) => {
    return(
        <img src={props.imgData.url} alt={props.imgData.title} className="selected-image"/>
    )
}

const mapStateToProps = (state) => {
    return {imgData: state.img.spaceImg}
}

export default connect(mapStateToProps, null)(SelectedImage);