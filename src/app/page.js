// Untuk Next.js (App Router: src/app/page.js)
// Ganti kalau perlu ke src/pages/index.js kalau project lo pakai Pages Router

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "radial-gradient(ellipse at top, #212336 60%, #101019 120%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter, Arial, sans-serif",
        color: "#fff",
        padding: "0 12px",
      }}
    >
      <div
        style={{
          maxWidth: 460,
          width: "100%",
          borderRadius: 32,
          boxShadow: "0 8px 40px #23234e90",
          background:
            "linear-gradient(125deg, #26264e 65%, #7f5af0 150%, #23234e 100%)",
          padding: 50,
          marginTop: -50,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "4px 18px",
            borderRadius: 20,
            background: "#1f1f2e",
            color: "#a99fff",
            fontWeight: 600,
            fontSize: 14,
            letterSpacing: 1,
            marginBottom: 22,
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          AI-POWERED REAL ESTATE
        </div>
        <h1
          style={{
            fontSize: 40,
            fontWeight: 800,
            margin: "8px 0 18px",
            background:
              "linear-gradient(92deg, #fff 65%, #7f5af0 120%, #14e0c7 200%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          VESPERA.AI
        </h1>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "#a99fff",
            margin: "0 0 18px 0",
            letterSpacing: 1,
          }}
        >
          The Ultimate Appointment Setter for Realtors
        </h2>
        <p
          style={{
            fontSize: 16.5,
            color: "#e7e6f7",
            margin: "0 0 18px 0",
            lineHeight: 1.7,
            fontWeight: 500,
          }}
        >
          🚀 **Dominate the market.**  
          ⚡️ AI-powered voice & WhatsApp agent.<br />
          📈 Real-time dashboard, instant lead qualification.<br />
          🏆 15-20 qualified listing booked in your calendar/mo<br />
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            margin: "18px 0",
          }}
        >
          <a
            href="mailto:hello@vespera.ai"
            style={{
              background: "linear-gradient(92deg,#7f5af0,#14e0c7)",
              color: "#fff",
              fontWeight: 700,
              borderRadius: 16,
              padding: "13px 36px",
              fontSize: 17,
              letterSpacing: 1,
              textDecoration: "none",
              boxShadow: "0 2px 16px #7f5af050",
              transition: "filter .18s",
              filter: "brightness(1)",
            }}
            onMouseOver={e => (e.target.style.filter = "brightness(1.18)")}
            onMouseOut={e => (e.target.style.filter = "brightness(1)")}
          >
            Get Early Access
          </a>
          <a
            href="https://instagram.com/vesperarealty"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#101019",
              color: "#a99fff",
              fontWeight: 600,
              border: "1.5px solid #7f5af0",
              borderRadius: 16,
              padding: "13px 28px",
              fontSize: 17,
              textDecoration: "none",
              transition: "border .18s",
            }}
          >
            Instagram
          </a>
        </div>
        <div
          style={{
            fontSize: 13,
            color: "#888ac3",
            marginTop: 24,
            letterSpacing: 1,
          }}
        >
          © {new Date().getFullYear()} VESPERA.AI — Rise Above the Rest.
        </div>
      </div>
    </main>
  );
}
