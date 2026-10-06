type TurnstileResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export const verifyToken = async (token: string) => {
  const secret = process.env.TURNSTILE_SECRET_KEY ?? process.env.SECRET_KEY;

  if (!secret) {
    throw new Error("Captcha is not configured");
  }

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: JSON.stringify({
      token,
      secret,
    }),
    headers: {
      "content-type": "application/json",
    },
    signal: AbortSignal.timeout(10_000),
  });

  if (!res.ok) {
    throw new Error("Captcha verification failed");
  }

  const data = (await res.json()) as TurnstileResponse;

  if (!data.success) {
    throw new Error("Captcha verification failed");
  }

  return data;
};
