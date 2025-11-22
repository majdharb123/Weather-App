import { Droplets, Wind, Eye, Gauge } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
const Temp = ({
  city,
  country,
  icon,
  temperature,
  condition,
  humidity,
  windSpeed,
  visibility,
  pressure,
}) => {
  return (
    <div className="container my-5">
      <div
        className="card text-white shadow-lg p-4 mb-4"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          borderRadius: "25px",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="display-4 fw-bold">{city}</h1>
            <p className="lead">{country}</p>
          </div>

          {icon}
        </div>
        <div className="d-flex align-items-end mb-4">
          <span className="display-1 fw-bold">{temperature}°</span>
          <span className="fs-2 mb-3 ms-2">C</span>
        </div>

        <div className="fs-3 mb-4 text-capitalize">{condition}</div>

        <div className="row g-3">
          <div className="col-6 col-md-3">
            <div
              className="p-3 h-100"
              style={{
                background: "rgba(255,255,255,0.2)",
                borderRadius: "15px",
              }}
            >
              <div className="d-flex align-items-center gap-2 mb-2">
                <Droplets size={20} />
                <span className="small opacity-75">Humidity</span>
              </div>
              <div className="fs-3 fw-semibold">{humidity}%</div>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div
              className="p-3 h-100"
              style={{
                background: "rgba(255,255,255,0.2)",
                borderRadius: "15px",
              }}
            >
              <div className="d-flex align-items-center gap-2 mb-2">
                <Wind size={20} />
                <span className="small opacity-75">Wind Speed</span>
              </div>
              <div className="fs-3 fw-semibold">{windSpeed} km/h</div>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div
              className="p-3 h-100"
              style={{
                background: "rgba(255,255,255,0.2)",
                borderRadius: "15px",
              }}
            >
              <div className="d-flex align-items-center gap-2 mb-2">
                <Eye size={20} />
                <span className="small opacity-75">Visibility</span>
              </div>
              <div className="fs-3 fw-semibold">{visibility} km</div>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div
              className="p-3 h-100"
              style={{
                background: "rgba(255,255,255,0.2)",
                borderRadius: "15px",
              }}
            >
              <div className="d-flex align-items-center gap-2 mb-2">
                <Gauge size={20} />
                <span className="small opacity-75">Pressure</span>
              </div>
              <div className="fs-3 fw-semibold">{pressure} mb</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Temp;
