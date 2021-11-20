import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const Map = () => {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey:"AIzaSyCAIBpPAdiemLqK4fbYZiwUANLADXQMWeU",
        id: 'google-map-script',
      });

    return (
        <div className = 'map'>
           {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{width: '100%', height: '100%'}}
                    center={{
                        lat: -13.000709346230256, 
                        lng: -38.50786052961612
                    }}
                    zoom={17}
                >
                    <Marker
                        position={{
                            lat:  -13.000709346230256, 
                            lng:  -38.50786052961612
                        }}
                        />
                </GoogleMap>
            ) : <></>
        }
        </div>
    )
}

export default Map;