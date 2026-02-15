export type CrewRuntimeConfig = {
  intervalsApiUrl: string;
  intervalsApiKey: string;
  explicitMock: boolean;
  autoMock: boolean;
  useMockCrew: boolean;
};

export function getCrewRuntimeConfig(): CrewRuntimeConfig {
  const intervalsApiUrl = process.env.INTERVALS_API_URL || "";
  const intervalsApiKey = process.env.INTERVALS_API_KEY || "";

  const explicitMock = process.env.USE_MOCK_CREW === "1";
  const missingKeys = !intervalsApiUrl || !intervalsApiKey;
  const autoMock = process.env.NODE_ENV !== "production" && missingKeys;

  return {
    intervalsApiUrl,
    intervalsApiKey,
    explicitMock,
    autoMock,
    useMockCrew: explicitMock || autoMock,
  };
}
