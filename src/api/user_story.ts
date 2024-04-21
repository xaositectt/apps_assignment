export enum Priority {
  High = "high",
  Normal = "normal",
}

export enum FeatureTitles {
  PERSONALIZED_ADVENTURE_FEED = "Personalized Adventure Feed",
  LOCAL_EVENTS_AND_WEATHER_INTEGRATION = "Local Events and Weather Integration",
  SPONTANEITY_BOOSTER = "Spontaneity Booster",
  SOCIAL_SHARING_AND_PLANNING = "Social Sharing and Planning",
  EXPERIENCE_REVIEW_SYSTEM = "Experience Review System",
}

export interface Feature {
  title: FeatureTitles;
  description: string;
  id: string;
}

export interface UserStory {
  id: string;
  title: string;
  description: string;
  hours: number;
  storyPoints: number;
  priority: Priority;
  isIncludedInScope: boolean;
  featureId: string;
}

export interface UserStoryApiResponse {
  features: Feature[];
  userStories: UserStory[];
}

const normalizeUserStoryData = (
  data: UserStoryApiResponse,
): UserStoryApiResponse => {
  const sortedFeatures = data.features.sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  const featureIdToSortedIndex: Record<string, number> = {};
  sortedFeatures.forEach((feature, index) => {
    featureIdToSortedIndex[feature.id] = index;
  });

  const sortedUserStories = data.userStories.sort((a, b) => {
    const indexA = featureIdToSortedIndex[a.featureId];
    const indexB = featureIdToSortedIndex[b.featureId];
    return indexA - indexB;
  });

  return {
    features: sortedFeatures,
    userStories: sortedUserStories,
  };
};

export const fetchUserStoryData = async (): Promise<UserStoryApiResponse> => {
  const userStoryEndpoint = process.env.USER_STORY_ENDPOINT;
  if (!userStoryEndpoint) {
    throw new Error("User stories API endpoint is not defined");
  }
  const response = await fetch(userStoryEndpoint);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: UserStoryApiResponse = await response.json();
  return normalizeUserStoryData(data);
};
