import { useEffect, useState } from "react";

// Inspiration from lecture 11 - custom hooks.

export default function useLocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    const storedValue = window.localStorage.getItem(key);
    if (storedValue) {
      setValue(storedValue);
    }
  }, [key]);
  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [key, value]);
  return [value, setValue];
}
