"use client";

export default function XMTPGroupChat() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        background: "linear-gradient(135deg, #6c2bd9, #ec4899)", // purple → hot pink
        color: "white",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "24px" }}>💦</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: "18px" }}>SweatBet Squad</div>
            <div style={{ fontSize: "12px", opacity: 0.9 }}>
              Bet 10 cUSD — Run/Ride 5 km by Sunday or lose your money
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: "11px",
            padding: "4px 8px",
            borderRadius: "999px",
            background: "rgba(15,23,42,0.4)",
            border: "1px solid rgba(248,250,252,0.2)",
          }}
        >
          🔒 On-chain • Celo
        </div>
      </header>

      {/* Challenge card */}
      <section
        style={{
          background: "rgba(15,23,42,0.45)",
          borderRadius: "16px",
          padding: "12px",
          marginBottom: "12px",
          border: "1px solid rgba(248,250,252,0.12)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
            fontSize: "13px",
          }}
        >
          <div>
            <div style={{ fontSize: "11px", opacity: 0.8 }}>Distance</div>
            <div style={{ fontWeight: 700 }}>5 km</div>
          </div>
          <div>
            <div style={{ fontSize: "11px", opacity: 0.8 }}>Deadline</div>
            <div style={{ fontWeight: 700 }}>Sunday 23:59</div>
          </div>
          <div>
            <div style={{ fontSize: "11px", opacity: 0.8 }}>Pot size</div>
            <div style={{ fontWeight: 700 }}>💰 40 cUSD</div>
          </div>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "4px",
          }}
        >
          <button
            style={{
              flex: 1,
              padding: "10px 12px",
              borderRadius: "999px",
              border: "none",
              fontWeight: 700,
              fontSize: "14px",
              background: "#facc15",
              color: "#1f2937",
              cursor: "pointer",
            }}
          >
            💰 BET 10 cUSD
          </button>
          <button
            style={{
              flex: 1,
              padding: "10px 12px",
              borderRadius: "999px",
              border: "1px solid rgba(248,250,252,0.6)",
              background: "transparent",
              fontWeight: 600,
              fontSize: "14px",
              color: "white",
              cursor: "pointer",
            }}
          >
            🏃 PROVE WORKOUT
          </button>
        </div>
      </section>

      {/* Chat area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "8px",
          borderRadius: "16px",
          background: "rgba(15,23,42,0.6)",
          border: "1px solid rgba(248,250,252,0.12)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            fontSize: "13px",
          }}
        >
          {/* Example fake messages */}
          <div style={{ alignSelf: "flex-start", maxWidth: "80%" }}>
            <div
              style={{
                background: "rgba(15,23,42,0.9)",
                padding: "8px 10px",
                borderRadius: "12px",
                borderBottomLeftRadius: "4px",
              }}
            >
              <strong>@amber</strong> 💦<br />
              I’m in. 5k by Sunday, let’s gooo.
            </div>
            <div style={{ fontSize: "10px", opacity: 0.7, marginTop: "2px" }}>
              10:21
            </div>
          </div>

          <div style={{ alignSelf: "flex-end", maxWidth: "80%" }}>
            <div
              style={{
                background: "#22c55e",
                padding: "8px 10px",
                borderRadius: "12px",
                borderBottomRightRadius: "4px",
                color: "#052e16",
              }}
            >
              @you placed a 10 cUSD bet ✅
            </div>
            <div style={{ fontSize: "10px", opacity: 0.7, marginTop: "2px", textAlign: "right" }}>
              10:22
            </div>
          </div>

          <div style={{ alignSelf: "flex-start", maxWidth: "80%" }}>
            <div
              style={{
                background: "rgba(15,23,42,0.9)",
                padding: "8px 10px",
                borderRadius: "12px",
                borderBottomLeftRadius: "4px",
              }}
            >
              <strong>@marco</strong> 🚲<br />
              Just synced Strava — 6.2 km ride ✅
            </div>
            <div style={{ fontSize: "10px", opacity: 0.7, marginTop: "2px" }}>
              11:03
            </div>
          </div>

          <div
            style={{
              alignSelf: "center",
              fontSize: "11px",
              opacity: 0.8,
              marginTop: "8px",
            }}
          >
            🤖 @sweatbet: Winners paid out. GG.
          </div>
        </div>

        {/* Input bar (UI only for now) */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "8px",
          }}
        >
          <input
            placeholder="Type a message, or use !bet / !prove..."
            style={{
              flex: 1,
              borderRadius: "999px",
              border: "none",
              padding: "10px 12px",
              fontSize: "13px",
              outline: "none",
            }}
          />
          <button
            style={{
              borderRadius: "999px",
              border: "none",
              padding: "0 14px",
              background: "#0ea5e9",
              color: "white",
              fontWeight: 700,
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
