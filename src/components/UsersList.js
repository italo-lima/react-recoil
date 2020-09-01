import React from "react";
import { useRecoilValue } from "recoil";

import { userNamesList } from "../atom/users";
import { userToFollowMap } from "../atom/users/selectors/followers";

export default function UsersList() {
  const users = useRecoilValue(userNamesList);
  const followerMap = useRecoilValue(userToFollowMap);

  return (
    <ul>
      {users.map((user) => (
        <li key={user}>
          {user} - ({followerMap[user]})
        </li>
      ))}
    </ul>
  );
}
