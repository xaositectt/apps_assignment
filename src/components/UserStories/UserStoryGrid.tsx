import { useMemo } from "react";
import Grid from "@mui/material/Grid";

import { Feature, FeatureTitles, UserStory } from "@/api/schema";

import UserStoryTile from "./UserStoryTile";

interface UserStoryGridProps {
  features: Feature[];
  userStories: UserStory[];
  selectedFeatureIds: string[];
}

const UserStoryGrid = ({
  features,
  userStories,
  selectedFeatureIds,
}: UserStoryGridProps) => {
  const featureTitleMap: Record<string, FeatureTitles> = useMemo(
    () =>
      features.reduce(
        (acc, feature) => ({ ...acc, [feature.id]: feature.title }),
        {},
      ),
    [features],
  );

  // to avoid double iteration, create a map of user stories for feature
  const featureForUserStoryMap = useMemo(
    () =>
      userStories.reduce<Record<string, UserStory[]>>((acc, userStory) => {
        const { featureId } = userStory;
        if (acc[featureId]) {
          acc[featureId] = [...acc[featureId], userStory];
        } else {
          acc[featureId] = [userStory];
        }
        return acc;
      }, {}),
    [userStories],
  );

  // helper map to sort the user stories by feature
  const featureIdToSortedIndex: Record<string, number> = {};
  features.forEach((feature, index) => {
    featureIdToSortedIndex[feature.id] = index;
  });
  const filteredUserStories = useMemo(
    () =>
      selectedFeatureIds
        .reduce<UserStory[]>((acc, featureId) => {
          const storiesForFeature = featureForUserStoryMap[featureId] || [];
          return [...acc, ...storiesForFeature];
        }, [])
        .sort((a, b) => {
          const indexA = featureIdToSortedIndex[a.featureId];
          const indexB = featureIdToSortedIndex[b.featureId];
          return indexA - indexB;
        }),
    [featureForUserStoryMap, selectedFeatureIds],
  );

  return (
    <Grid container spacing={2}>
      {filteredUserStories.map(
        ({ description, featureId, priority, storyPoints, title }) => (
          <Grid item key={title} xs={12} md={6} lg={3}>
            <UserStoryTile
              description={description}
              feature={featureTitleMap[featureId]}
              points={storyPoints}
              priority={priority}
              title={title}
            />
          </Grid>
        ),
      )}
    </Grid>
  );
};

export default UserStoryGrid;
