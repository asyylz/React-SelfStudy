import { useState, useEffect } from "react";
import Data from "../helper/Data";

function LocalStoragePostGet(key, defaultValue) {
  // Ensure that weekDataKey is a string
  if (typeof key !== "string") {
    throw new Error("The weekDataKey parameter must be a string.");
  }

  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);

      return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch (error) {
      console.error("Error retrieving value from local storage:", error);

      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting value in local storage:", error);
    }
  }, [key, value]);

  return [value, setValue];
}

export default LocalStoragePostGet;
