/* eslint-disable react/prop-types */

import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const LeafletMap = ({ profile, showModal, onHide }) => {
  const [coords, setCoords] = useState(null);

  const getCoordinatesFromLocation = async (location) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          location
        )}&format=json`
      );
      const data = await res.json();

      if (data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        setCoords([lat, lon]);
      } else {
        console.log("Location not found");
        setCoords(null);
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      setCoords(null);
    }
  };

  useEffect(() => {
    if (profile && profile.location) {
      getCoordinatesFromLocation(profile.location);
    }
  }, [profile]);

  return (
    <Modal show={showModal} onHide={onHide} size="lg" centered>
      <Modal.Body>
        {coords ? (
          <MapContainer
            center={coords}
            zoom={10}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Mahesh</a> Solanke'
            />

            {coords && (
              <Marker position={coords}>
                <Popup>{profile.name}</Popup>
              </Marker>
            )}
          </MapContainer>
        ) : (
          <div>Loading....</div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default LeafletMap;
