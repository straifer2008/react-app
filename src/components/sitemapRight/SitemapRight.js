import React, {Component} from 'react';
import './SitemapRight.less';

class SitemapRight extends Component {
    render() {
        return (
          <div onClick={this.props.onClick} className={`Sitemap ${this.props.hide ? 'Sitemap-hide': null}`}>
            <a className='sitemap_link'>
              <i className='fa fa-sitemap' aria-hidden='true' />
            </a>
          </div>
        )
    }
}

export default SitemapRight;
