"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            fontFamily: "system-ui, sans-serif",
            gap: "1rem",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <h1 style={{ margin: 0 }}>Something went wrong</h1>
          <p style={{ margin: 0 }}>An unexpected error occurred while loading the page.</p>
          <button
            type="button"
            onClick={reset}
            style={{
              backgroundColor: "#0f766e",
              border: "none",
              borderRadius: "0.5rem",
              color: "#fff",
              cursor: "pointer",
              fontSize: "1rem",
              padding: "0.75rem 1.5rem",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
