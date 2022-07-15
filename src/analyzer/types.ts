export interface CreateNewInstanceResponse {
  pass: boolean;
  conflicts: number;
  instanceReviewUrl?: string;
  instanceId: string;
}
