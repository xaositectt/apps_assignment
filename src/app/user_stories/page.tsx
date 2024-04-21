import { fetchUserStoryData } from "@/api/user_story";

import UserStoryLayout from "../../components/UserStories/UserStoryLayout";

const UserStories = async () => {
  const data = await fetchUserStoryData();
  return (
    <main>
      <UserStoryLayout data={data} />
    </main>
  );
};

export default UserStories;
