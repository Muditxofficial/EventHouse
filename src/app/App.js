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
import AccountPage from "../features/auth/AccountPage";
import { useSelector } from "react-redux";
import LoadingComponent from "./layout/LoadingComponent";
import ProfilePage from "../features/profile/profilePage/ProfilePage";

function App() {
  const { key } = useLocation();
  const { initialized } = useSelector((state) => state.async);
  if (!initialized) return <LoadingComponent content="Loading app..." />;
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
              <Route path="/account" component={AccountPage} />
              <Route path="/profile/:id" component={ProfilePage} />
            </Container>
          </>
        )}
      />
    </>
    // <MapComp />
  );
}

export default App;
