import { siteName, authorName, siteDescription, siteUrl } from "../lib/seo";

export function OgCard() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background:
          "linear-gradient(135deg, #050816 0%, #0f172a 48%, #022c22 100%)",
        color: "white",
        padding: "56px",
        fontFamily: "Inter, Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "40px",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "36px",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "-120px",
          top: "-120px",
          width: "360px",
          height: "360px",
          borderRadius: "999px",
          background: "rgba(52, 211, 153, 0.18)",
          filter: "blur(12px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "-100px",
          bottom: "-120px",
          width: "340px",
          height: "340px",
          borderRadius: "999px",
          background: "rgba(56, 189, 248, 0.16)",
          filter: "blur(12px)",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: "14px", zIndex: 1 }}>
        <div
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "999px",
            background: "#34d399",
            boxShadow: "0 0 30px rgba(52, 211, 153, 0.8)",
          }}
        />
        <span style={{ fontSize: "24px", fontWeight: 700 }}>{siteName}</span>
      </div>

      <div style={{ zIndex: 1, maxWidth: "920px" }}>
        <div
          style={{
            display: "inline-flex",
            padding: "10px 18px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "#d1fae5",
            fontSize: "22px",
            fontWeight: 600,
            marginBottom: "28px",
          }}
        >
          Available for new projects
        </div>
        <div
          style={{
            fontSize: "88px",
            lineHeight: 1,
            fontWeight: 800,
            letterSpacing: "-0.06em",
            marginBottom: "18px",
          }}
        >
          {authorName}
        </div>
        <div
          style={{
            fontSize: "44px",
            lineHeight: 1.1,
            color: "#a7f3d0",
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          Front-End Developer
        </div>
        <div
          style={{
            fontSize: "28px",
            lineHeight: 1.45,
            maxWidth: "880px",
            color: "rgba(255,255,255,0.82)",
          }}
        >
          {siteDescription}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          zIndex: 1,
          fontSize: "22px",
          color: "rgba(255,255,255,0.72)",
        }}
      >
        <span>{siteUrl.replace("https://", "")}</span>
        <span>React | Next.js | Tailwind CSS</span>
      </div>
    </div>
  );
}
