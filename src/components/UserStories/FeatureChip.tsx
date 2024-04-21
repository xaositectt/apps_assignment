"use client";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

import { backgroundColorMap } from "./utils";

import { FeatureTitles } from "@/api/user_story";

export interface FeatureChipProps {
  feature: FeatureTitles;
  onClick: (feature: string) => void;
  isActive: boolean;
}

const StyledChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean; feature: FeatureTitles }>(({ isActive, feature }) => ({
  backgroundColor: isActive ? backgroundColorMap[feature] : "transparent",
}));

const FeatureChip = ({
  feature,
  onClick,
  isActive = false,
}: FeatureChipProps) => {
  // workaround to avoid the ripple animation
  const disableRipple = { disableRipple: true };
  return (
    <StyledChip
      isActive={isActive}
      feature={feature}
      label={feature}
      onClick={() => onClick(feature)}
      {...disableRipple}
    />
  );
};

export default FeatureChip;
