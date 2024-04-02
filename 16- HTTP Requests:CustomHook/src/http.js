export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();
  if (!response.ok) {
    const error = new Error("Failed to fetch places");
    throw error;
  }
  return resData.places;
}

export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  const resData = await response.json();
  if (!response.ok) {
    const error = new Error("Failed to fetch user places");
    throw error;
  }
  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places: places }), // shorter notation places
    headers: {
      "Content-Type": "application/json", // you should add the Content-Type header and set this to application/json to inform the backend that the data attached to this request will be in JSON format.
    },
  });

  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Failed to update use data");
  }
  return resData.message;
}
