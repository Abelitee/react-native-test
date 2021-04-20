import { useState, useEffect } from "react";

export const useFetch = (url, method, bearer, dependencies) => {
  const [loading, setLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    setLoading(true);
    console.log("sending http request");
    fetch(url, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: bearer,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("reaponse");
        }
        return response.json();
      })
      .then((responseJson) => {
        setLoading(false);
        setFetchedData(responseJson);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, dependencies);
  return [loading, fetchedData];
};
