import React from "react";

import { Link } from "react-router-dom";
import { Button, Icon, Item, Label, List, Segment } from "semantic-ui-react";

import EventListAttendee from "./EventListAttendee";
import { format } from "date-fns";
import { deleteEventInFirestore } from "../../../app/firestore/firestoreService";
const EventListItem = ({ event }) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header>{event.title}</Item.Header>
              <Item.Description>Hosted by {event.hostedBy}</Item.Description>
              {event.isCancelled && (
                <Label
                  ribbon="right"
                  color="red"
                  content="this event is being cancelled"
                />
              )}
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" />
          {format(event.date, "MMMM d, yyyy h:mm a")}
          <Icon name="marker" />
          {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((x) => (
            <EventListAttendee key={x.id} attendee={x} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
        <Button
          onClick={() => deleteEventInFirestore(event.id)}
          color="red"
          floated="right"
          content="Delete"
        />
        <Button
          as={Link}
          to={`/events/${event.id}`}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;
