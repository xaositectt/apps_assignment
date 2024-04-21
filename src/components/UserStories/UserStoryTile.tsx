import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import { FeatureTitles, Priority } from "@/api/schema";
import { colors } from "@/style/theme";

import { backgroundColorMap, accentColorMap, pointTextColorMap } from "./utils";

const StyledCard = styled(Card)<{ feature: FeatureTitles }>(
  ({ feature, theme }) => ({
    display: "flex",
    alignItems: "stretch",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: theme.spacing(4),
    height: `calc(100% - ${theme.spacing(4)})`,
    padding: theme.spacing(2),
    backgroundColor: backgroundColorMap[feature],
    borderColor: `2px solid ${accentColorMap[feature]}`,
    borderRadius: theme.spacing(2),
    boxShadow: "none",
    "&:hover": {
      boxShadow: "0px 4px 20px 0px #00000026,0px 1px 4px 0px #00000026",
    },
  }),
);

export interface UseStoryTileProps {
  title: string;
  description: string;
  feature: FeatureTitles;
  points: number;
  priority: Priority;
}

const UserStoryTile = ({
  title,
  description,
  feature,
  points,
  priority,
}: UseStoryTileProps) => (
  <StyledCard aria-label={title} feature={feature}>
    <Stack>
      <Typography fontWeight="bold">{title}</Typography>
      <Typography sx={{ color: colors.grey }}>{description}</Typography>
    </Stack>
    <Stack alignItems="center" direction="row" justifyContent="space-between">
      <Typography fontSize={12} sx={{ color: colors.grey }}>
        {feature}
      </Typography>
      <Stack direction="row" alignItems="center">
        {priority === Priority.High ? (
          <KeyboardArrowUpIcon sx={{ color: colors.grey }} />
        ) : (
          <HorizontalRuleIcon sx={{ color: colors.grey }} />
        )}
        <Typography
          borderRadius={1}
          color={pointTextColorMap[feature]}
          paddingX={1}
          paddingY={0.5}
          fontSize={12}
          fontWeight="bold"
          marginLeft={1}
          sx={{ background: accentColorMap[feature] }}
        >
          {points}
        </Typography>
      </Stack>
    </Stack>
  </StyledCard>
);

export default UserStoryTile;
