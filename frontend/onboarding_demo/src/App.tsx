import React from "react";
// import logo from "./logo.svg";
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
  // return (
  //   <div className="App">
  //     {/* <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header> */}
  //     <OnboardingListView />
  //     <OnboardingQuestionWrapper />
  //   </div>
  // );
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
