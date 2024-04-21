import Stack from "@mui/material/Stack";

import { Feature } from "@/api/user_story";

import FeatureChip from "./FeatureChip";

interface FeatureSelectionProps {
  features: Feature[];
  selectedFeatureIds: string[];
  onToggleFeature: (id: string) => void;
}

const FeatureFilters = ({
  features,
  selectedFeatureIds,
  onToggleFeature,
}: FeatureSelectionProps) => (
  <Stack direction="row" flexWrap="wrap" spacing={1}>
    {features.map(({ title, id }) => (
      <FeatureChip
        key={title}
        feature={title}
        isActive={selectedFeatureIds.includes(id)}
        onClick={() => onToggleFeature(id)}
      />
    ))}
  </Stack>
);

export default FeatureFilters;
