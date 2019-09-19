import React, { Component } from 'react';
import Button from 'antd/es/button';
import './App.css';

class About extends Component {
    render() {
        return (
            <div className="App">
                <Button type="primary">Button</Button>
            </div>
        );
    }
}

export const AboutPage = {
  pageContent: <About/>,
  pageBreadCrumb: [
      {text: 'Home', link: '/'},
      {text: 'About', link: '/About'}
  ]
};

export default About;
