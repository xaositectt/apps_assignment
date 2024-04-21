import { FeatureTitles } from "@/api/schema";
import { colors } from "@/style/theme";

type Colors = typeof colors;
type ColorValue = Colors[keyof Colors];
export type colorMap = Record<FeatureTitles, ColorValue>;

export const backgroundColorMap: colorMap = {
  [FeatureTitles.EXPERIENCE_REVIEW_SYSTEM]: colors.lightGreen,
  [FeatureTitles.LOCAL_EVENTS_AND_WEATHER_INTEGRATION]: colors.lightRed,
  [FeatureTitles.PERSONALIZED_ADVENTURE_FEED]: colors.lightYellow,
  [FeatureTitles.SOCIAL_SHARING_AND_PLANNING]: colors.lightIndigo,
  [FeatureTitles.SPONTANEITY_BOOSTER]: colors.lightPurple,
};

export const accentColorMap: colorMap = {
  [FeatureTitles.EXPERIENCE_REVIEW_SYSTEM]: colors.lightGreenAccent,
  [FeatureTitles.LOCAL_EVENTS_AND_WEATHER_INTEGRATION]: colors.lightRedAccent,
  [FeatureTitles.PERSONALIZED_ADVENTURE_FEED]: colors.lightYellowAccent,
  [FeatureTitles.SOCIAL_SHARING_AND_PLANNING]: colors.lightIndigoAccent,
  [FeatureTitles.SPONTANEITY_BOOSTER]: colors.lightPurpleAccent,
};

export const pointTextColorMap: colorMap = {
  [FeatureTitles.EXPERIENCE_REVIEW_SYSTEM]: colors.darkGreen,
  [FeatureTitles.LOCAL_EVENTS_AND_WEATHER_INTEGRATION]: colors.darkRed,
  [FeatureTitles.PERSONALIZED_ADVENTURE_FEED]: colors.darkYellow,
  [FeatureTitles.SOCIAL_SHARING_AND_PLANNING]: colors.darkIndigo,
  [FeatureTitles.SPONTANEITY_BOOSTER]: colors.darkPurple,
};
