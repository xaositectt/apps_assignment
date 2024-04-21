"use client";
import { useCallback, useState } from "react";
import Stack from "@mui/material/Stack";

import { UserStoryApiResponse } from "@/api/user_story";

import FeatureFilters from "./FeatureFilters";
import UserStoryGrid from "./UserStoryGrid";
import UserStorySummary from "./UserStorySummary";

const UserStoryLayout = ({ data }: { data: UserStoryApiResponse }) => {
  const [selectedFeatureIds, setSelectedFeatureIds] = useState<string[]>(() =>
    data.features.map(({ id }) => id),
  );
  const { features, userStories } = data;

  const toggleFeature = useCallback((id: string) => {
    setSelectedFeatureIds((currentFeature) =>
      currentFeature.includes(id)
        ? currentFeature.filter((currentFeature) => currentFeature !== id)
        : [...currentFeature, id],
    );
  }, []);

  const totalPoints = userStories.reduce(
    (acc, userStory) => acc + userStory.storyPoints,
    0,
  );

  return (
    <Stack padding={4} gap={4}>
      <FeatureFilters
        features={features}
        selectedFeatureIds={selectedFeatureIds}
        onToggleFeature={toggleFeature}
      />
      <UserStorySummary totalPoints={totalPoints} />
      <UserStoryGrid
        features={features}
        selectedFeatureIds={selectedFeatureIds}
        userStories={userStories}
      />
    </Stack>
  );
};

export default UserStoryLayout;
