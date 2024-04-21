import { UserStoryApiResponse } from "./schema";

export async function fetchUserStoryData(): Promise<UserStoryApiResponse> {
  const userStoryEndpoint = process.env.USER_STORY_ENDPOINT;
  if (!userStoryEndpoint) {
    throw new Error("User stories API endpoint is not defined");
  }
  const response = await fetch(userStoryEndpoint);

  // for the scope of this assignment, just an error but ideally handle different errrors f.e: show toaster with different messages, etc.
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const { features, userStories }: UserStoryApiResponse = await response.json();

  const sortedFeatures = features.sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  return {
    features: sortedFeatures,
    userStories,
  };
}
