import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";


import FeatureFilters from "./FeatureFilters";
import { backgroundColorMap } from "./utils";

import { FeatureTitles } from "@/api/user_story";

describe("FeatureFilters", () => {
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

  it("renders FeatureChips", () => {
    render(
      <FeatureFilters
        features={features}
        selectedFeatureIds={[]}
        onToggleFeature={() => {}}
      />,
    );

    const chips = screen.getAllByRole("button");
    expect(chips.length).toBe(features.length);
    expect(chips[0]).toHaveTextContent(features[0].title);
  });

  it("sets the isActive prop on FeatureChip based on selectedFeatureIds", () => {
    render(
      <FeatureFilters
        features={features}
        selectedFeatureIds={[features[0].id]}
        onToggleFeature={() => {}}
      />,
    );

    const chips = screen.getAllByRole("button");
    expect(chips[0]).toHaveStyle(
      `background-color: ${backgroundColorMap[FeatureTitles.EXPERIENCE_REVIEW_SYSTEM]}`,
    );
    expect(chips[1]).toHaveStyle(`background-color: transparent`);
  });

  it("calls onToggleFeature when a FeatureChip is clicked", async () => {
    const mockToggleFeature = jest.fn();
    render(
      <FeatureFilters
        features={features}
        selectedFeatureIds={[]}
        onToggleFeature={mockToggleFeature}
      />,
    );

    const chips = screen.getAllByRole("button");
    await userEvent.click(chips[0]);
    expect(mockToggleFeature).toHaveBeenCalledWith(features[0].id);
  });
});
