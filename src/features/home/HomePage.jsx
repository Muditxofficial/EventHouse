import React from "react";
import {
  Container,
  Header,
  Image,
  Segment,
  Button,
  Icon,
} from "semantic-ui-react";

const HomePage = ({ history }) => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            style={{ marginBottom: 12 }}
          />
          EventHouse - Where Things Get Done
        </Header>
        <Button onClick={() => history.push("/events")} size="huge" inverted>
          Get started
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
