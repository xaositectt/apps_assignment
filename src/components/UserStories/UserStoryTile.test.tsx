import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { Priority, FeatureTitles } from "@/api/schema";

import UserStoryTile from "./UserStoryTile";

describe("UserStoryTile", () => {
  it("renders the components", () => {
    render(
      <UserStoryTile
        title="Test Story"
        description="This is a test description."
        feature={FeatureTitles.EXPERIENCE_REVIEW_SYSTEM}
        points={100}
        priority={Priority.Normal}
      />,
    );

    expect(screen.getByText("Test Story")).toBeInTheDocument();
    expect(screen.getByText("This is a test description.")).toBeInTheDocument();
    expect(
      screen.getByText(FeatureTitles.EXPERIENCE_REVIEW_SYSTEM),
    ).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByTestId("HorizontalRuleIcon")).toBeInTheDocument();
  });

  it("displays the high priority icon", () => {
    render(
      <UserStoryTile
        title="High Priority Story"
        description="This story has high priority."
        feature={FeatureTitles.EXPERIENCE_REVIEW_SYSTEM}
        points={200}
        priority={Priority.High}
      />,
    );

    expect(screen.getByTestId("KeyboardArrowUpIcon")).toBeInTheDocument();
  });
});
