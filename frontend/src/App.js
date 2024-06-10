import * as React from "react";
import { createBrowserHistory } from "history";
import { NotificationContainer } from "react-notifications";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

import "./styles/animation.css";
import "react-notifications/lib/notifications.css";

const history = createBrowserHistory();

export default function App() {
  return (
    <div>
      <NotificationContainer />
      <Router history={history}>
        <AppRoutes />
      </Router>
    </div>
  );
}
