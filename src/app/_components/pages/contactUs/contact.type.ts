export type FormState = {
  code?: "invalid_data" | "captcha_failed" | "rate_limited" | "send_failed" | "success";
  status?: "idle" | "success" | "error";
};

export type StatusProps = "idle" | "success" | "error" | "expired" | "solved";
