import { fetchUserStoryData } from "@/api/user_story";

const UserStories = async () => {
  const data = await fetchUserStoryData();
  console.log(data)
  return (
    <main>hello world</main>
  );
};

export default UserStories;
