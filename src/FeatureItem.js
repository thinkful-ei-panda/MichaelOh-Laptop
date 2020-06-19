import React, { Component } from 'react';
import slugify from 'slugify';

class FeatureItem extends Component {
    render() {
        return (
            <fieldset className="feature" key={this.props.featureHash}>
              <legend className="feature__name">
                <h3>{this.props.featureName}</h3>
              </legend>
            {this.props.features.map((item, idx) => 
              <div key={this.props.featureHash} className="feature__item">
            <input
              type="radio"
              id={slugify(JSON.stringify(item))}
              className="feature__option"
              name={slugify(this.props.featureName)}
              checked={item.name === this.props.selected[this.props.featureName].name}
              onChange={() => this.props.select(this.props.featureName, item)}
            />
            <label htmlFor={slugify(JSON.stringify(item))} className="feature__label">
              {item.name} ({this.props.currency.format(item.cost)})
            </label>
          </div>
            )
        }
            </fieldset>
        )
    }
}

export default FeatureItem;
       
    
