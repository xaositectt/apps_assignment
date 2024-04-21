import fetchMock from "jest-fetch-mock";

import { FeatureTitles, fetchUserStoryData, Priority } from "./user_story";

fetchMock.enableMocks();

beforeEach(() => {
  process.env.USER_STORY_ENDPOINT = "https://mock_api.com";
  fetchMock.resetMocks();
});

export const mockData = {
  features: [
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
  ],
  userStories: [
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
  ],
};

describe("fetchUserStoryData", () => {
  it("fetches user stories and features data successfully", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const normalizedMockResponse = await fetchUserStoryData();

    expect(fetchMock).toHaveBeenCalledWith(process.env.USER_STORY_ENDPOINT);
    expect(normalizedMockResponse.features[0].title).toEqual(
      mockData.features[0].title,
    );
    expect(normalizedMockResponse.userStories[0].featureId).toEqual("feat1");
  });

  it("throws an error when the fetch fails", async () => {
    fetchMock.mockReject(new Error("Failed to fetch data"));
    await expect(fetchUserStoryData).rejects.toThrow("Failed to fetch data");
  });
});
