import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) return JSON.parse(savedValue);
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
