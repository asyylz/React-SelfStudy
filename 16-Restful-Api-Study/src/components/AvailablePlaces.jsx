import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlace() {
      setIsFetching(true);
      try {
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();
        if (!response.ok) {
          const error = new Error("Failed to fetch places");
          throw error;
        }
        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({
          message:
            error.message || " Could not fetch places, please try again later.",
        });
      }
      setIsFetching(false);
    }
    fetchPlace();
  }, []);

  if (error) {
    return <Error title="An error occurred !" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      isLoading={isFetching}
      loadingText="Fetching place data..."
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
