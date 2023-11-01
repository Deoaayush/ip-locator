import { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map({ latitude, longitude }) {
    const center = useMemo(() => ({ lat: latitude, lng: longitude }), [latitude, longitude]);
    console.log(center);

    return (
        <MapContainer className='map-container' center={center} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center}>
                <Popup>
                    {latitude}, {longitude}
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;
