import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import { signOutFirebase } from "../../app/firestore/firebaseService";

const SignedInMenu = () => {
  const history = useHistory();
  const { currentUserProfile } = useSelector((state) => state.profile);

  async function handleSignOut() {
    try {
      history.push("/");
      await signOutFirebase();
    } catch (error) {
      toast.error(error);
    }
  }
  return (
    <div style={{ paddingTop: "1.5%" }}>
      <Menu.Item position="right">
        <Image
          avatar
          spaced="right"
          src={currentUserProfile?.photoURL || "/assets/user.png"}
        />
        <Dropdown pointing="top left" text={currentUserProfile?.displayName}>
          <Dropdown.Menu>
            <Dropdown.Item
              as={Link}
              to="/createEvent"
              text="Create Event"
              icon="plus"
            />
            <Dropdown.Item
              as={Link}
              to={`/profile/${currentUserProfile?.id}`}
              text="My profile"
              icon="user"
            />
            <Dropdown.Item
              text="My account"
              icon="settings"
              as={Link}
              to="/account"
            />
            <Dropdown.Item
              onClick={handleSignOut}
              text="Sign out"
              icon="power"
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
};

export default SignedInMenu;
