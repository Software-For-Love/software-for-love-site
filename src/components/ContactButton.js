import React from 'react';
//import "../sass/components/_donation-form.scss";

export default class ContactButton extends React.Component {
  render() {
    return (
         <div className="Contact-Button" style={{textAlign: 'center', fontSize: '2em'}}>
            <a class="btn" href="/contact">Contact Us</a>
        </div>
    )
  }
}