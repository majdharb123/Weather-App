import "bootstrap/dist/css/bootstrap.min.css";
import SunVideos from "../assets/Videos/sunVideos.mp4";
import BackgroundVideos from "../components/BackgroundVideos";
import { Link } from "react-router-dom";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  LineChart,
  Line,
} from "recharts";
const Details = () => {
  return (
    <div className="container mt-3">
      <button
        className="btn btn-light mb-3 px-4 py-2"
        style={{
          background: "white",
          backdropFilter: "blur(20px)",
          width: "25%",
          borderRadius: "20px",
        }}
      >
        <Link to="/home" className="text-decoration-none text-black">
          {" "}
          ← Back to Home
        </Link>
      </button>
      <BackgroundVideos src={SunVideos} />
      <div
        className="text-white mb-4 p-4 rounded-4 shadow"
        style={{
          background: "rgba(255,255,255,0.10)",
          backdropFilter: "blur(20px)",
        }}
      >
        <h1 className="h2 fw-bold mb-2">Today Weather Details</h1>
        <p className="fs-5 opacity-75 mb-4">Complete information for Lebanon</p>

        <div className="row g-4">
          <div className="col-md-6">
            <div
              className="d-flex justify-content-between align-items-center p-3 rounded-3 mb-3"
              style={{ background: "rgba(255,255,255,0.10)" }}
            >
              <span className="fs-5 opacity-75">Sunrise</span>
              <span className="fs-4 fw-bold">6:24 AM</span>
            </div>

            <div
              className="d-flex justify-content-between align-items-center p-3 rounded-3 mb-3"
              style={{ background: "rgba(255,255,255,0.10)" }}
            >
              <span className="fs-5 opacity-75">Sunset</span>
              <span className="fs-4 fw-bold">5:42 PM</span>
            </div>

            <div
              className="d-flex justify-content-between align-items-center p-3 rounded-3 mb-3"
              style={{ background: "rgba(255,255,255,0.10)" }}
            >
              <span className="fs-5 opacity-75">UV Index</span>
              <span className="fs-4 fw-bold">5 (Moderate)</span>
            </div>

            <div
              className="d-flex justify-content-between align-items-center p-3 rounded-3 mb-3"
              style={{ background: "rgba(255,255,255,0.10)" }}
            >
              <span className="fs-5 opacity-75">Air Quality</span>
              <span className="fs-4 fw-bold">Good</span>
            </div>

            <div
              className="d-flex justify-content-between align-items-center p-3 rounded-3"
              style={{ background: "rgba(255,255,255,0.10)" }}
            >
              <span className="fs-5 opacity-75">Feels Like</span>
              <span className="fs-4 fw-bold">20°C</span>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="d-flex justify-content-between align-items-center p-3 rounded-3 mb-3"
              style={{ background: "rgba(255,255,255,0.10)" }}
            >
              <span className="fs-5 opacity-75">Precipitation</span>
              <span className="fs-4 fw-bold">20%</span>
            </div>

            <div
              className="d-flex justify-content-between align-items-center p-3 rounded-3 mb-3"
              style={{ background: "rgba(255,255,255,0.10)" }}
            >
              <span className="fs-5 opacity-75">Cloud Cover</span>
              <span className="fs-4 fw-bold">45%</span>
            </div>

            <div
              className="d-flex justify-content-between align-items-center p-3 rounded-3 mb-3"
              style={{ background: "rgba(255,255,255,0.10)" }}
            >
              <span className="fs-5 opacity-75">Dew Point</span>
              <span className="fs-4 fw-bold">12°C</span>
            </div>

            <div
              className="d-flex justify-content-between align-items-center p-3 rounded-3 mb-3"
              style={{ background: "rgba(255,255,255,0.10)" }}
            >
              <span className="fs-5 opacity-75">Moon Phase</span>
              <span className="fs-4 fw-bold">Waxing Crescent</span>
            </div>

            <div
              className="d-flex justify-content-between align-items-center p-3 rounded-3"
              style={{ background: "rgba(255,255,255,0.10)" }}
            >
              <span className="fs-5 opacity-75">Wind Direction</span>
              <span className="fs-4 fw-bold">NW</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-white bg-opacity-10 backdrop-blur-lg rounded-4 p-4 p-md-5 mb-4 shadow-lg text-white"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          borderRadius: "25px",
        }}
      >
        <h2 className="fs-2 fw-bold mb-4 text-end">
          Temperature Throughout the Day
        </h2>

        <div style={{ width: "100% ", height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={[
                { time: "12 AM", temp: 15 },
                { time: "3 AM", temp: 13 },
                { time: "6 AM", temp: 12 },
                { time: "9 AM", temp: 16 },
                { time: "12 PM", temp: 22 },
                { time: "3 PM", temp: 24 },
                { time: "6 PM", temp: 20 },
                { time: "9 PM", temp: 17 },
                { time: "12 AM", temp: 15 },
              ]}
            >
              <defs>
                <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#fbbf24" stopOpacity={0.1} />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.2)"
              />
              <XAxis dataKey="time" stroke="white" />
              <YAxis
                stroke="white"
                label={{
                  value: "°C",
                  angle: -90,
                  position: "insideLeft",
                  fill: "white",
                }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.8)",
                  border: "none",
                  borderRadius: "10px",
                  color: "white",
                }}
              />
              <Area
                type="monotone"
                dataKey="temp"
                stroke="#fbbf24"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#tempGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="row g-4 mb-4">
        <div className="col-12 col-md-6">
          <div
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-4 p-4 p-md-5 shadow-lg h-100"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
              borderRadius: "25px",
            }}
          >
            <h2 className="fs-4 fw-bold mb-4 text-end text-white">
              Humidity Levels
            </h2>
            <div style={{ width: "100%", height: 250 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { time: "6 AM", humidity: 75 },
                    { time: "9 AM", humidity: 65 },
                    { time: "12 PM", humidity: 55 },
                    { time: "3 PM", humidity: 50 },
                    { time: "6 PM", humidity: 60 },
                    { time: "9 PM", humidity: 70 },
                  ]}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.2)"
                  />
                  <XAxis dataKey="time" stroke="white" />
                  <YAxis
                    stroke="white"
                    label={{
                      value: "%",
                      angle: -90,
                      position: "insideLeft",
                      fill: "white",
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(0,0,0,0.8)",
                      border: "none",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  />
                  <Bar
                    dataKey="humidity"
                    fill="#60a5fa"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-4 p-4 p-md-5 shadow-lg h-100"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
              borderRadius: "25px",
            }}
          >
            <h2 className="fs-5 fw-bold mb-4 text-end text-white">
              Wind Speed
            </h2>
            <div style={{ width: "100%", height: 250 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { time: "6 AM", speed: 10 },
                    { time: "9 AM", speed: 12 },
                    { time: "12 PM", speed: 18 },
                    { time: "3 PM", speed: 20 },
                    { time: "6 PM", speed: 15 },
                    { time: "9 PM", speed: 12 },
                  ]}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.2)"
                  />
                  <XAxis dataKey="time" stroke="white" />
                  <YAxis
                    stroke="white"
                    label={{
                      value: "km/h",
                      angle: -90,
                      position: "insideLeft",
                      fill: "white",
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(0,0,0,0.8)",
                      border: "none",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="speed"
                    stroke="#34d399"
                    strokeWidth={3}
                    dot={{ fill: "#34d399", r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-white bg-opacity-10 backdrop-blur-lg rounded-4 p-4 p-md-5 shadow-lg mb-4"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          borderRadius: "25px",
          color:"white"
        }}
      >
        <h2 className="fs-3 fw-bold mb-4">Health and Safety</h2>

        <div className="d-grid gap-3">
          <div className="bg-white bg-opacity-10 rounded-3 p-3">
            <h4 className="fw-semibold fs-5 mb-2">Heat Advisory</h4>
            <p className="opacity-75 mb-0">
              Temperatures are comfortable. Stay hydrated if exercising
              outdoors.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 rounded-3 p-3">
            <h4 className="fw-semibold fs-5 mb-2">Allergy Forecast</h4>
            <p className="opacity-75 mb-0">
              Low pollen count today. Good news for allergy sufferers!
            </p>
          </div>

          <div className="bg-white bg-opacity-10 rounded-3 p-3">
            <h4 className="fw-semibold fs-5 mb-2">Driving Conditions</h4>
            <p className="opacity-75 mb-0">
              Excellent visibility. Roads should be clear except for possible
              wet conditions in the evening.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
