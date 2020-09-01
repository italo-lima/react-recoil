import { selector } from "recoil";

import { userNamesList } from "../index";
import api from "../../../services/api";

export const userToFollowMap = selector({
  key: "userToFollowMap",
  get: async ({ get }) => {
    const listUsers = get(userNamesList);

    const responses = await Promise.all(
      listUsers.map((username) => api.get(`/users/${username}`))
    );

    const followerMap = {};

    responses.forEach((response) => {
      const { data: user } = response;
      followerMap[user.login] = user.followers;
    });

    return followerMap;
  },
});
