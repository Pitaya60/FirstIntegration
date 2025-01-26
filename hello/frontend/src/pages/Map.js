import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 51.780087, 
  lng: 19.401316,
};

function Map() {
  const onLoad = (map) => {
    console.log('Map loaded:', map);
  };

  const onError = (error) => {
    console.error('Error loading the map:', error);
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Map</h2>
      <LoadScript
        googleMapsApiKey="AIzaSyDgbVqpQrQxA38-RTYkGCTEjimIJT_qkMo"
        onError={onError}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;
