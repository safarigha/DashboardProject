import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Popup,
  Marker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface WeatherMapProps {
  onSelectLocation: (coords: { lat: number; lon: number }) => void;
  weatherData: any;
}

const WeatherMap: React.FC<WeatherMapProps> = ({
  onSelectLocation,
  weatherData,
}) => {
  const MapClickHandler = () => {
    useMapEvents({
      click(e: any) {
        const { lat, lng } = e.latlng;
        onSelectLocation({ lat, lon: lng });
      },
    });
    return null;
  };

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      className="h-[500px] w-full rounded"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapClickHandler />
      {weatherData && (
        <Marker position={[weatherData.coord.lat, weatherData.coord.lon]}>
          <Popup>
            <div
              className="gap-x-6 gap-y-1 text-sm text-gray-600 font-bold"
              style={{
                direction: "rtl",
                textAlign: "right",
                fontFamily: "IranYekan",
              }}
            >
              <h3>{weatherData.name}</h3>
              <p>دما: {Math.round(weatherData.main.temp - 273.15)}°C</p>
              <p>وضعیت: {weatherData.weather[0].description}</p>
            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default WeatherMap;
