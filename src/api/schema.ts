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
