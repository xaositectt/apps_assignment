import { FeatureTitles } from "@/api/user_story";
import { colors } from "@/theme";

type Colors = typeof colors;
type ColorValue = Colors[keyof Colors];

export const backgroundColorMap: Record<FeatureTitles, ColorValue> = {
  [FeatureTitles.EXPERIENCE_REVIEW_SYSTEM]: colors.lightGreen,
  [FeatureTitles.LOCAL_EVENTS_AND_WEATHER_INTEGRATION]: colors.lightRed,
  [FeatureTitles.PERSONALIZED_ADVENTURE_FEED]: colors.lightYellow,
  [FeatureTitles.SOCIAL_SHARING_AND_PLANNING]: colors.lightIndigo,
  [FeatureTitles.SPONTANEITY_BOOSTER]: colors.lightPurple,
};
