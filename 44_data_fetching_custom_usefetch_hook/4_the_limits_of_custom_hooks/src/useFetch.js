import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!url) return;
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        console.log(`🌐 [NETWORK CALL] Fetching data from: ${url}`);
        const response = await fetch(url, { signal: controller.signal });
        const json = await response.json();
        setData(json);
      } catch (err) {
        if (err.name !== "AbortError") console.error(err);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url]); 

  return { data };
}
