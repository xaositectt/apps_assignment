import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { colors } from "@/theme";

import labels from "@/messages/en.json"

const UserStorySummary = ({ totalPoints }: { totalPoints: number }) => (
  <Stack alignItems="center" direction="row" justifyContent="space-between">
    <Typography>{labels.summaryMessage}</Typography>
    <Typography
      borderRadius={1}
      color={colors.darkGreen}
      paddingX={1}
      paddingY={0.5}
      fontSize={12}
      fontWeight="bold"
      marginLeft={1}
      sx={{ background: colors.lightGreenAccent }}
    >
      {`${totalPoints} ${labels.storyPoints}`}
    </Typography>
  </Stack>
);

export default UserStorySummary;
