import React, { Component } from 'react'
import FeatureItem from './FeatureItem'

class Feature extends Component {

    render() {
        return (
            <div className="App">
                <h2>Customize Your Laptop</h2>
                {Object.keys(this.props.features).map((feature, idx) =>
                <FeatureItem featureHash = {feature + '-' + idx}
                             selected={this.props.selected}
                             currency={this.props.currency} key={idx}
                             featureName={feature}
                             features={this.props.features[feature]}select={this.props.select}
                             // eslint-disable-next-line react/jsx-no-duplicate-props
                             select={this.props.select}/>)}
            </div>
        );
    }
}

export default Feature;