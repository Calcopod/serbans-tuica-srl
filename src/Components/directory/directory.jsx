import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.jsx';
import items from './directory.data.js';

import './directory.styles.scss'

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      // Sections
      items: items,
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.items.map( ({title, imageUrl, id, size}) => (
            <MenuItem title={title} imageUrl={imageUrl} size={size} key={id} />
          ))
        }
      </div>
    )
  }

}

export default Directory;