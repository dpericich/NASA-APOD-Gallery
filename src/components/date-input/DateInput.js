import React from 'react';
import {connect} from 'react-redux';
import {updateDate} from '../../actions/index';


class DateInput extends React.Component {
     state = {selectedDate: ""};

    updateInputDate = (e) => {
        this.setState({selectedDate: e.target.value}, () => this.props.updateDate(this.state.selectedDate))
    }

    render() {
        return( 
                <input type="date" className="date-input__input" value={this.state.selectedDate} onChange={this.updateInputDate}/>
        )
    }

}

const mapDispatchToProps = {updateDate};

const mapStateToProps = (state) => {
    return {
        date: state.currentDate.date,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateInput);