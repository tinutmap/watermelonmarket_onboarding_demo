import React from "react";
import "./App.css";
import { OnboardingListView } from "./Onboarding/OnboardingListView";
import { OnboardingQuestionWrapper } from "./Onboarding/OnboardingForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

let router = createBrowserRouter([
  {
    path: "/*",
    Component() {
      return <OnboardingQuestionWrapper />;
    },
  },
  {
    path: "/seller_intake_survey_results",
    Component() {
      return <OnboardingListView />;
    },
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </div>
  );
}

export default App;
