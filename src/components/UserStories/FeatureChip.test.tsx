import "@testing-library/jest-dom";

import { render, screen, fireEvent } from "@testing-library/react";

import { FeatureTitles } from "@/api/user_story";

import FeatureChip from "./FeatureChip";
import { backgroundColorMap } from "./utils";

describe("FeatureChip", () => {
  const mockOnClick = jest.fn();

  it("renders correctly with isActive=false", () => {
    render(
      <FeatureChip
        feature={FeatureTitles.EXPERIENCE_REVIEW_SYSTEM}
        onClick={mockOnClick}
        isActive={false}
      />,
    );

    const chip = screen.getByRole("button");
    expect(chip).toHaveStyle(`background-color: transparent`);
    expect(chip).toHaveTextContent(FeatureTitles.EXPERIENCE_REVIEW_SYSTEM);
  });

  it("renders correctly with isActive=true", () => {
    render(
      <FeatureChip
        feature={FeatureTitles.EXPERIENCE_REVIEW_SYSTEM}
        onClick={mockOnClick}
        isActive={true}
      />,
    );

    const chip = screen.getByRole("button");
    expect(chip).toHaveStyle(
      `background-color: ${backgroundColorMap[FeatureTitles.EXPERIENCE_REVIEW_SYSTEM]}`,
    );
  });

  it.only("calls onClick handler when clicked", () => {
    render(
      <FeatureChip
        feature={FeatureTitles.EXPERIENCE_REVIEW_SYSTEM}
        onClick={mockOnClick}
        isActive={true}
      />,
    );

    const chip = screen.getByRole("button");
    fireEvent.click(chip);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith(
      FeatureTitles.EXPERIENCE_REVIEW_SYSTEM,
    );
  });
});
