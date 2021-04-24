import React, { Component } from 'react'
import PreviewCollection from '../../Components/preview-collection/prev-collection.component'
import { SHOP_DATA } from './shop.data'

class ShopPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: SHOP_DATA,
    }
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {
          collections.map( ({id, ...otherCollProps }) => (
            <PreviewCollection key={id} {...otherCollProps} />
          ))
        }
      </div>
    )
  }
}

export default ShopPage