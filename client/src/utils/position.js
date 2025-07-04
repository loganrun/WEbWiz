import { useState, useEffect } from "react";

const defaultSettings = {
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0
};

export const usePosition = (watch = true, settings = defaultSettings) => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({ coords, timestamp }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
      timestamp
    });
  };

  const onError = error => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }

    let watcher = null;
    if (watch) {
      watcher = geo.watchPosition(onChange, onError, settings);
    } else {
      geo.getCurrentPosition(onChange, onError, settings);
    }

    return () => watcher && geo.clearWatch(watcher);
  }, [settings]);

  return { ...position, error };
};
// export const usePosition = () => {
//   const [position, setPosition] = useState({});
//   const [error, setError] = useState(null);

//   const onChange = ({coords}) => {
//     setPosition({
//       latitude: coords.latitude,
//       longitude: coords.longitude,
//     });
//   };
//   const onError = (error) => {
//     setError(error.message);
//   };
//   useEffect(() => {
//     const geo = navigator.geolocation;
//     if (!geo) {
//       setError('Geolocation is not supported');
//       return;
//     }
//     const watcher = geo.watchPosition(onChange, onError);
//     return () => geo.clearWatch(watcher);
//   }, []);
//   return {...position, error};
// }
