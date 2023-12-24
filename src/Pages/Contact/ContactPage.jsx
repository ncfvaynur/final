import React from "react";
import MainSection from "../../Components/Main/MainSection";
import "./style.css";
import Contact from "../../Components/Contacts/Contact";
import SendMessage from "./SendMessage";

const ContactPage = () => {
  return (
    <>
      <MainSection className="contactMain" title="Contacts" />
      <div className="m-0 g-5 py-5 row contacts">
        <Contact
          className="border-0"
          icon="fa-solid fa-location-dot"
          title="Location"
          desc_1="29 Nicolas str"
          desc_2=" New York, 987597-50"
        />
        <Contact
          icon="fa-solid fa-phone"
          title="Phones"
          desc_1="0(800) 890-90-609"
          desc_2="0(800) 890-90-620"
        />
        <Contact
          icon="fa-solid fa-envelope"
          title="Email"
          desc_1="sale@like-themes.com"
          desc_2="tech@like-themes.com"
        />

        <Contact
          icon="fa-solid fa-rotate"
          title="Working Hours"
          desc_1="Wednesday - Sunday "
          desc_2=" 7:00 AM - 5:00 PM"
        />
      </div>

      <div style={{filter: "grayscale(100%)"}} className="map">
     


        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d387179.18477109616!2d-74.216713!3d40.699579!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1682716945803!5m2!1sen!2sus"
          width="100%"
          height="100%"
        ></iframe>
      </div>

        <SendMessage/>

    </>
  );
};

export default ContactPage;
