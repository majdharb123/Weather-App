import "bootstrap/dist/css/bootstrap.min.css";
const Hourly = ({ Hour }) => {
  return (
    <div
      className="card text-white shadow-lg mb-4 p-3 "
      style={{
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(20px)",
        borderRadius: "25px",
      }}
    >

      <div className="d-flex flex-nowrap overflow-auto pb-2 " style={{ gap: "1rem" }}>
        <div
          className="flex-shrink-0 text-center p-3 "
          style={{
            background: "rgba(255,255,255,0.2)",
            borderRadius: "15px",
            minWidth: "80px",
          }}
        >
          <div className="fw-semibold mb-2">{Hour.time}</div>
          <div className="d-flex justify-content-center mb-2">{Hour.icon}</div>
          <div className="fs-5 fw-bold">{Hour.degree}</div>
        </div>
      </div>
    </div>
  );
};
export default Hourly;
