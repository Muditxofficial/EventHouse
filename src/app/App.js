import { Route, useLocation } from "react-router";
import { Container } from "semantic-ui-react";
import EventDashboard from "../features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../features/events/eventForm/EventForm";
import HomePage from "../features/home/HomePage";
import NavBar from "../features/nav/NavBar";
import ModalManager from "./common/modals/ModalManager";
import { ToastContainer } from "react-toastify";

import ErrorComponent from "./common/errors/ErrorComponent";

function App() {
  const { key } = useLocation();
  return (
    <>
      <ModalManager position="bottom-right" hideProgressBar />
      <ToastContainer />
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className="main">
              <Route exact path="/events" component={EventDashboard} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route
                key={key}
                path={["/createEvent", "/manage/:id"]}
                component={EventForm}
              />
              <Route path="/error" component={ErrorComponent} />
            </Container>
          </>
        )}
      />
    </>
    // <MapComp />
  );
}

export default App;
