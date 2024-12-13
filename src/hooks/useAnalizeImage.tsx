import { useState } from "react";

export const useAnalizeImage = () => {
  const [response, setResponse] = useState<null | any>(null);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const fetcher = (imageBase64: string) => {
    if (!imageBase64) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://localhost:5000/api/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: imageBase64 }),
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setResponse(data);
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  };

  return { fetcher, response, error, loading };
};
