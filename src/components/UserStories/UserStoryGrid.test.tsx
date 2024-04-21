import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { FeatureTitles, Priority } from "@/api/user_story";

import UserStoryGrid from "./UserStoryGrid";

describe("UserStoryGrid", () => {
  const features = [
    {
      title: FeatureTitles.EXPERIENCE_REVIEW_SYSTEM,
      description: "foo foo",
      id: "feat1",
    },
    {
      title: FeatureTitles.LOCAL_EVENTS_AND_WEATHER_INTEGRATION,
      description: "bar bar",
      id: "feat2",
    },
  ];

  const userStories = [
    {
      id: "1",
      description: "Desc 1",
      featureId: "feat1",
      priority: Priority.High,
      storyPoints: 5,
      title: "Story 1",
      hours: 2,
      isIncludedInScope: true,
    },
    {
      id: "2",
      description: "Desc 2",
      featureId: "feat2",
      priority: Priority.Normal,
      storyPoints: 3,
      title: "Story 2",
      hours: 10,
      isIncludedInScope: true,
    },
  ];

  it("renders without any user stories", () => {
    render(
      <UserStoryGrid features={[]} userStories={[]} selectedFeatureIds={[]} />,
    );
    expect(screen.queryByTestId("UserStoryTile")).not.toBeInTheDocument();
  });

  it("renders no stories when no features are selected", () => {
    render(
      <UserStoryGrid
        features={features}
        userStories={userStories}
        selectedFeatureIds={[]}
      />,
    );
    expect(screen.queryByTestId("UserStoryTile")).not.toBeInTheDocument();
  });

  it("renders only stories from selected features", () => {
    render(
      <UserStoryGrid
        features={features}
        userStories={userStories}
        selectedFeatureIds={["feat1"]}
      />,
    );
    expect(screen.getByText("Story 1")).toBeInTheDocument();
    expect(screen.queryByText("Story 2")).not.toBeInTheDocument();
  });
});
