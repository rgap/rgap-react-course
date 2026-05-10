import { useState, useEffect, useRef } from "react";

export function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Because the options object is often re-created on every render in the parent component
  // (e.g. useFetch(url, { headers: { Auth: '123' } })), 
  // putting it in the dependency array would cause an infinite loop!
  // We use a ref to store a stable copy of it.
  const optionsRef = useRef(options);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // We merge our abort signal with whatever options the user passed in!
        const fetchOptions = {
          ...optionsRef.current,
          signal: controller.signal
        };

        const response = await fetch(url, fetchOptions);
        
        if (!response.ok) throw new Error(`Error ${response.status}`);
        
        const json = await response.json();
        setData(json);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
    
  }, [url]); // Notice `options` is NOT in the dependency array to prevent loops!

  return { data, isLoading, error };
}
