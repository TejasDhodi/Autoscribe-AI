export type OnboardingData = {
  roles?: string[];
  workspaceName: string;
  teamName: string;
  industry: string;
  logo?: string;
  teamMembers: Array<{ email?: string; role?: string }>;
};
