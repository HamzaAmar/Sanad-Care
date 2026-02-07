export interface FeedbackDTO {
  _id: string;
  name: string;
  message: string;
  job: string | null;
  rating: number;
}
