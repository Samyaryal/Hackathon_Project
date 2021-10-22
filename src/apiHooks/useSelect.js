import { useState, useEffect } from 'react';

export default function useSelect(name) {
  let baseUrl = `https://open-api.myhelsinki.fi/v1/${name}/`
  // if (name === 'activities') {
  //   baseUrl = `${baseUrl}${name}/?limit=55`;
  // } else {
  //   baseUrl = `${baseUrl}${name}/?language_filter=en&?limit=55&start=500`;
  // }

  const [data, setData] = useState();
  console.log("data here check", data)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const response = await fetch(baseUrl);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [baseUrl]);
  return { data, loading, error };
}
