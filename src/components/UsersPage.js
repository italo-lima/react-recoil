import React, { useState } from "react";
import { useRecoilState } from "recoil";

import { userNamesList } from "../atom/users";
import UsersList from "./UsersList";

function UserInput() {
  const [input, setInput] = useState("");
  const [usernames, setUsernames] = useRecoilState(userNamesList);

  function onChange(e) {
    setInput(e.target.value.trim().toLowerCase());
  }

  function handleSubmit() {
    setUsernames([...usernames, input]);
    setInput("");
  }

  return (
    <div>
      <input type="text" value={input} onChange={onChange} />

      <button onClick={handleSubmit}>Add User</button>
    </div>
  );
}

export default function UsersPage() {
  return (
    <div>
      <UserInput />
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <UsersList />
      </React.Suspense>
    </div>
  );
}
