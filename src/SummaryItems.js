import React, { Component } from 'react'

class SummaryItems extends Component {
    
    render() {
        return (
            <div className="summary__option" key={this.props.featureHash}>
            <div className="summary__option__label">{this.props.feature} </div>
            <div className="summary__option__value">{this.props.selected.name}</div>
            <div className="summary__option__cost">
                {this.props.currency.format(this.props.selected.cost)}
            </div>
      </div>
        );
    }
}

export default SummaryItems;