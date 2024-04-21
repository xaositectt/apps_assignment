"use client";
import { useCallback, useState } from "react";
import Stack from "@mui/material/Stack";

import { UserStoryApiResponse } from "@/api/user_story";

import FeatureFilters from "./FeatureFilters";

const UserStoryLayout = ({ data }: { data: UserStoryApiResponse }) => {
  const [selectedFeatureIds, setSelectedFeatureIds] = useState<string[]>(() =>
  data.features.map(({ id }) => id),
);
  const { features } = data;

  const toggleFeature = useCallback((id: string) => {}, []);

  return (
    <Stack padding={4} gap={4}>
      <FeatureFilters
        features={features}
        selectedFeatureIds={selectedFeatureIds}
        onToggleFeature={toggleFeature}
      />
    </Stack>
  );
};

export default UserStoryLayout;
