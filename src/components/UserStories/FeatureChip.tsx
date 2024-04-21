"use client";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

import { backgroundColorMap, accentColorMap } from "./utils";

import { FeatureTitles } from "@/api/schema";
import { colors } from "@/style/theme";

export interface FeatureChipProps {
  feature: FeatureTitles;
  onClick: (feature: string) => void;
  isActive: boolean;
}

const StyledChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean; feature: FeatureTitles }>(({ isActive, feature }) => ({
  backgroundColor: isActive ? backgroundColorMap[feature] : "transparent",
  boxShadow: isActive
    ? `inset 0 0 0 1px ${accentColorMap[feature]}`
    : `inset 0 0 0 1px ${colors.black}`,
  boxSizing: "border-box",
  "&:hover": {
    backgroundColor: isActive ? backgroundColorMap[feature] : "transparent",
  },
  transition: "background-color 0.3s ease, box-shadow 0.5s ease",
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
