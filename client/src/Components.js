/*
** Reusable components
*/
import React from "react";
import {
  Badge,
  Chip,
  Collection,
  CollectionItem,
  Icon
} from "react-materialize";
import "./components.css";
import { Link } from "react-router-dom";

function Avatar(props) {
  return (
    <div className="avatar circle">
      <img src={props.avatar} alt="avatar" />
    </div>
  );
}

function UserDescription(props) {
  return (
    <div>
      <h3>{props.username}</h3>
      <Chip>
        <Badge className="rep-badge">{props.rep}</Badge>
        Rep
      </Chip>
    </div>
  );
}

export const ProfileHeader = props => {
  return (
    <div className="center-align">
      <Avatar avatar={"/img/" + props.user.avatar} />
      <UserDescription username={props.user.username} rep={props.user.rep} />
    </div>
  );
};

export const ProfileSettings = () => {
  return (
    <div id="profile-settings">
      <Collection>
        <CollectionItem>
          <Link to="/profile/avatar">
            Change Avatar<Badge>
              <Icon>account_box</Icon>
            </Badge>
          </Link>
        </CollectionItem>
        <CollectionItem>
          <Link to="/profile/email">
            Change E-mail<Badge>
              <Icon>mail</Icon>
            </Badge>
          </Link>
        </CollectionItem>
        <CollectionItem>
          <Link to="/profile/password">
            Change Password<Badge>
              <Icon>lock</Icon>
            </Badge>
          </Link>
        </CollectionItem>
      </Collection>
    </div>
  );
};
