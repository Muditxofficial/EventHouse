import React from "react";
import { Menu, Header } from "semantic-ui-react";
import { Calendar } from "react-calendar";

export default function EventFilters({ loading, predicate, setPredicate }) {
  return (
    <>
      <Menu vertical size="large" style={{ width: "100%" }}>
        <Header icon="filter" attached color="teal" content="Filters" />
        <Menu.Item
          content="All Events"
          active={predicate.get("filter") === "all"}
          onClick={() => setPredicate("filter", "all")}
          disabled={loading}
        />
        <Menu.Item
          active={predicate.get("filter") === "isGoing"}
          onClick={() => setPredicate("filter", "isGoing")}
          disabled={loading}
          content="I'm going"
        />
        <Menu.Item
          active={predicate.get("filter") === "isHost"}
          onClick={() => setPredicate("filter", "isHost")}
          disabled={loading}
          content="I'm hosting"
        />
      </Menu>
      <Header icon="calendar" attached color="teal" content="Select date" />
      <Calendar
        onChange={(date) => setPredicate("startDate", date)}
        value={predicate.get("startDate") || new Date()}
        tileDisabled={() => loading}
      />
    </>
  );
}
