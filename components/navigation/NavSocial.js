import React, { Component } from 'react';
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'react-share';

export default class NavSocial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener('scroll', function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  render() {
    const { is_visible } = this.state;
    return (
      <>
        {is_visible && (
          <div className='nav-side-social'>
            <TwitterIcon size={50} round={true} />
            <LinkedinIcon size={50} round={true} />
            <EmailIcon size={50} round={true} />
            <FacebookIcon size={50} round={true} />
          </div>
        )}
      </>
    );
  }
}
