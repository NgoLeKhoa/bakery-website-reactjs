import React from "react";

class GoogleMaps extends React.Component {
    render() {
        return(
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.644765827814!2d106.6990189!3d10.7797855!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe84f59936ced5b45!2sNotre%20Dame%20Cathedral%20of%20Saigon!5e0!3m2!1sen!2s!4v1594401329363!5m2!1sen!2s" 
                width="100%"
                height="450px"
                title="maps"
            />
        )
    }
}

export default GoogleMaps;