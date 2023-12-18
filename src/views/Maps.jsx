import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { convertDistance, findNearest, getDistance } from "geolib";
import { useGeolocated } from "react-geolocated";

export default function Maps() {
  const { coords } = useGeolocated();
  const position = {
    lat: Number(coords?.latitude),
    lng: Number(coords?.longitude),
  };

  console.log(
    convertDistance(
      getDistance(
        {
          latitude: Number(coords?.latitude),
          longitude: Number(coords?.longitude),
        },
        { latitude: -7.250445, longitude: 112.768845 }
      ),
      "km"
    )
  );

  console.log(coords);

  return (
    <>
      <div>kkk</div>

      {/* <APIProvider apiKey="AIzaSyB1tNYLeJOYBchrNNX2pre3J0ei5oumlMQ">
        <div style={{ height: "500px", width: "500px" }}>
          <Map center={position} zoom={10}>
            <Marker position={position} />
          </Map>
        </div>
      </APIProvider> */}
    </>
  );
}
