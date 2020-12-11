import React from 'react';
import {connect} from 'react-redux';
import {apiImageCall, updateDate} from '../../actions/index';


class DateInput extends React.Component {
     state = {selectedDate: ""};

    updateInputDate = async (e) => {
        await this.setState({selectedDate: e.target.value}, () => this.props.updateDate(this.state.selectedDate));
        await this.props.apiImageCall();
    }

    render() {
        return( 
                <input type="date" className="date-input__input" value={this.state.selectedDate} onChange={this.updateInputDate}/>
        )
    }
}

const mapDispatchToProps = {updateDate, apiImageCall};

const mapStateToProps = (state) => {
    return {
        date: state.currentDate.date,
        img: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateInput);