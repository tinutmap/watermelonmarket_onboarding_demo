import React, { JSX } from "react";
import { useAsync, ResponseStatus } from "../lib/useAsync";
import {
  OnboardingDataEntryGetType,
  getOnboardingDataList,
} from "./OnboardingData.query";

export const OnboardingListView = (): JSX.Element => {
  const { data, status } = useAsync<OnboardingDataEntryGetType[]>(
    getOnboardingDataList,
    []
  );
  switch (status) {
    case ResponseStatus.Pending: {
      return <p>Loading...</p>;
    }
    case ResponseStatus.Reject: {
      throw new Error(data.toString());
    }
    case ResponseStatus.Resolved: {
      return (
        <>
          <h1>Hello</h1>
          <table>
            <thead>
              <tr>
                {Object.keys(data[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((datum) => {
                return (
                  <tr key={datum.id}>
                    {Object.values(datum).map((value, key) => (
                      <td key={datum.id + key}>{value}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      );
    }
  }
};
