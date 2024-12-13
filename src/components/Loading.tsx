export const Loading = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100px",
    }}
  >
    <div
      style={{
        width: "24px",
        height: "24px",
        border: "3px solid rgba(0, 0, 0, 0.2)",
        borderTop: "3px solid #000",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    ></div>
    <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
  </div>
);
