import React from 'react';
import './Contact.css';
import ContactSVG from '../SVG/Contact.js';
import $ from 'jquery';

function Contact() {
  var $animation_elements = $('.ContactContainer');
  console.log($animation_elements);
  var $window = $(window);
  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    console.log("Hello I am getting here");
    console.log(window_top_position);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
      console.log(element_bottom_position);
      console.log(window_bottom_position);

      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });
  }
  return (
    <React.Fragment>
    <div className="ContactContainer">
      <div className="ContactSVG">
        <ContactSVG />
      </div>
      <div className="EmailForm ">
        <form className="Form">
          <input className="Email" type="text" name="Email" placeholder="Email"></input>
          <div className="formGroup">
          <input className="Name" type="text" name="FirstName" placeholder="First Name"></input>
          <input className="Name" type="text" name="LastName" placeholder="Last Name"></input>
          </div>
          <textarea name="message" className="Message" placeholder="Message"></textarea>
          <button type="button" className="Button">SEND</button>
        </form>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Contact;
