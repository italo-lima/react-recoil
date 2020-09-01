import React from "react";

import CharacterCounter from "../components/CharacterCounter";
import UsersPage from "../components/UsersPage";

export default function Home() {
  return (
    <>
      <h1>Síncrono</h1>
      <CharacterCounter />

      <h1>Assíncrono</h1>
      <UsersPage />
    </>
  );
}
