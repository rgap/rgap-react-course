import { useState, useEffect, useCallback } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // We add a piece of state just to trigger a re-render!
  const [trigger, setTrigger] = useState(0);

  // We wrap refetch in useCallback so it doesn't change on every render
  const refetch = useCallback(() => {
    setTrigger(prev => prev + 1);
  }, []);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch(url, { signal: controller.signal });
        
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
    
  // We added 'trigger' to the dependency array!
  // When refetch() is called, trigger increments, and this effect re-runs!
  }, [url, trigger]); 

  // Return the refetch function alongside the state
  return { data, isLoading, error, refetch };
}
