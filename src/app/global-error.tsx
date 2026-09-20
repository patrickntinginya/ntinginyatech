"use client";

/**
 * Last-resort error page. It replaces the root layout, so it has no site styles and stays deliberately plain.
 */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#EAF0E9", color: "#0A2A30" }}>
        <main style={{ maxWidth: 640, margin: "0 auto", padding: "96px 24px" }}>
          <h1 style={{ fontSize: 36, lineHeight: 1.15, margin: 0 }}>Something went wrong.</h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, marginTop: 16 }}>
            The website could not load. Please try again in a moment.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              marginTop: 24,
              padding: "12px 24px",
              fontSize: 16,
              fontWeight: 600,
              color: "#FFFFFF",
              background: "#0A2A30",
              border: 0,
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
