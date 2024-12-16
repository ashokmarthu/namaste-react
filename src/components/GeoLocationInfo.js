import React from "react";
import { useDispatch } from "react-redux";
import { setGeoLocationInfo } from "../reducers/userSlice";
import { OPTIONS } from "../utils/constants";
const GeoLocationInfo = () => {
  const dispatch = useDispatch();
  const handleLocation = () => {
    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      dispatch(setGeoLocationInfo({ latitude, longitude }));
    };
    const error = () => {
      console.log("unable retrieve location");
    };
    navigator.geolocation.getCurrentPosition(success, error, OPTIONS);
  };
  return <button onClick={handleLocation}>Get My GPS Location</button>;
};

export default GeoLocationInfo;
