// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Dashboard from "./Dashboard/dashboard";
// import Signup from "./signup/signup";
// import Login from "./login/login";
// import AgentDashboard from "./Agent/AgentDashboard";
// import EmailVerification from "./signup/EmailVerification";
// import ForgotPassword from "./ForgotPassword/ForgotPassword";
// import ResetPassword from "./Reset/ResetPassword";
// import ProfileSetupUI from "./profile/ProfileSetupUI";
// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/signup" component={Signup} />
//         <Route path="/email-verify/:token" component={EmailVerification} />
//         <Route path="/login" component={Login} />
//         <Route path="/forgot-password" component={ForgotPassword} />
//         <Route path="/reset-password/:email/:token" component={ResetPassword} />
//         <Route path="/profile" component={ProfileSetupUI} />
//         <Route path="/agents" component={AgentDashboard} />

//         <Route
//           exact
//           path="/total-pages"
//           render={() => <div>{AgentDashboard}</div>}
//         />
//         <Route exact path="/" component={Dashboard} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;

import React from "react";
// import "./App.css";

function App() {
  return (
    <div className="container mx-auto px-4">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">WearAi</h1>
      </header>

      <main className="flex flex-col items-center justify-center mt-4">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Login to your account</h2>

          <div className="mb-4">
            <label
              htmlFor="mobileNumber"
              className="block text-gray-700 font-bold mb-2"
            >
              Enter Mobile No.
            </label>
            <input
              type="text"
              id="mobileNumber"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <button className="w-full bg-green-500 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
            Continue
          </button>

          <div className="mt-4 text-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2">
              OR
            </span>
          </div>

          <div className="flex flex-col  flex justify-center mt-4">
            <button className=" bg-gray-200 text-black-500 px-4 py-2 rounded-md font-bold hover:bg-blue-100 focus:outline-none focus:ring focus:ring-blue-300">
              Continue with Google
            </button>

            <button className="  mt-4 bg-gray-200 text-black px-4 py-2 rounded-md font-bold hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 ml-4">
              Continue with Facebook
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
