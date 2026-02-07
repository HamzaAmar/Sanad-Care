export interface ActionResponse {
  message: string;
  data: unknown | null;
  status: "Success" | "Error" | "Idle";
  submittionID: string;
}
