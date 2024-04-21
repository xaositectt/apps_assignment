import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { colors } from "@/theme";

const UserStorySummary = ({ totalPoints }: { totalPoints: number }) => (
  <Stack alignItems="center" direction="row" justifyContent="space-between">
    <Typography>Please check your user stories:</Typography>
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
      {`${totalPoints} SPs`}
    </Typography>
  </Stack>
);

export default UserStorySummary;
