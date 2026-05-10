import { useState, useEffect } from "react";

export function useFetch(url) {
  // 1. Manage the Big Three states
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 2. Setup the AbortController for cleanup
    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch(url, { signal: controller.signal });
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        
        const json = await response.json();
        setData(json);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // 3. Return the cleanup function
    return () => {
      controller.abort();
    };
    
  // 4. Re-run whenever the URL changes
  }, [url]); 

  // 5. Return the state so components can use it
  return { data, isLoading, error };
}
