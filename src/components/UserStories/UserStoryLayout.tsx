"use client";
import { useCallback, useState } from "react";
import Stack from "@mui/material/Stack";

import { UserStoryApiResponse } from "@/api/user_story";

import FeatureFilters from "./FeatureFilters";
import UserStoryGrid from "./UserStoryGrid";

const UserStoryLayout = ({ data }: { data: UserStoryApiResponse }) => {
  const [selectedFeatureIds, setSelectedFeatureIds] = useState<string[]>(() =>
    data.features.map(({ id }) => id),
  );
  const { features, userStories } = data;

  const toggleFeature = useCallback((id: string) => {}, []);

  return (
    <Stack padding={4} gap={4}>
      <FeatureFilters
        features={features}
        selectedFeatureIds={selectedFeatureIds}
        onToggleFeature={toggleFeature}
      />
      <UserStoryGrid
        features={features}
        selectedFeatureIds={selectedFeatureIds}
        userStories={userStories}
      />
    </Stack>
  );
};

export default UserStoryLayout;
