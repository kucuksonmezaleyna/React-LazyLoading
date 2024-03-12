import logo from "./logo.svg";
import "./App.css";

import React, { Suspense } from "react";
function App() {
  const MyComponent = React.lazy(() => import("./MyComponent"));
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<p>Loading...</p>}>
          <MyComponent />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
