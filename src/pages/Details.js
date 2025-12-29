import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
// Video Imports
import MoonVideo from "../assets/Videos/moon.mp4";
import SunVideos from "../assets/Videos/sunVideos.mp4";
import Rain1 from "../assets/Videos/rain1.mp4";
import Rain2 from "../assets/Videos/rain2.mp4";
import Thunder1 from "../assets/Videos/thunder1.mp4";
import Thunder2 from "../assets/Videos/thunder2.mp4";

// Recharts Imports
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

const API_KEY = "5c89ed4b438a783c36b5f62dedf6a02d";

const Details = () => {
  const location = useLocation();

  const city = location.state?.city || "Beirut";
  const country = location.state?.country || "LB";

  const [current, setCurrent] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [weatherVideo, setWeatherVideo] = useState(SunVideos);

  useEffect(() => {
    fetchWeatherData();
    fetchForecastData();
  }, [city, country]);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();

      if (data.weather) {
        setCurrent(data);
        // تحديث الفيديو بناءً على الطقس والوقت
        updateBackgroundVideo(
          data.weather[0].main,
          data.sys.sunrise,
          data.sys.sunset
        );
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const fetchForecastData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();

      if (data.list) {
        const chartData = data.list.slice(0, 8).map((item) => ({
          time: new Date(item.dt_txt).toLocaleTimeString("en-US", {
            hour: "numeric",
            hour12: true,
          }),
          temp: Math.round(item.main.temp),
          humidity: item.main.humidity,
          speed: Math.round(item.wind.speed),
        }));
        setForecastData(chartData);
      }
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };

  // ✅ منطق الفيديو المحسن (نفس منطق الصفحة الرئيسية)
  const updateBackgroundVideo = (weather, sunrise, sunset) => {
    const currentTime = new Date().getTime() / 1000;
    const isDay = currentTime >= sunrise && currentTime <= sunset;

    if (weather === "Rain" || weather === "Drizzle") {
      setWeatherVideo([Rain1, Rain2][Math.floor(Math.random() * 2)]);
      return;
    }

    if (weather === "Thunderstorm") {
      setWeatherVideo([Thunder1, Thunder2][Math.floor(Math.random() * 2)]);
      return;
    }

    if (weather === "Clouds") {
      setWeatherVideo(isDay ? SunVideos : MoonVideo);
      return;
    }

    if (weather === "Clear") {
      setWeatherVideo(isDay ? SunVideos : MoonVideo);
      return;
    }

    // Default Fallback
    setWeatherVideo(isDay ? SunVideos : MoonVideo);
  };

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
        <Link
          to="/home"
          state={{ country: country, city: city }} // الحفاظ على المدينة عند الرجوع
          className="text-decoration-none text-black"
        >
          ← Back to Home
        </Link>
      </button>

      {/* ✅ استبدلنا المكون Custom بالفيديو المباشر مع خاصية key */}
      {/* الـ key ضروري جداً ليعرف المتصفح إنه لازم يغير الفيديو */}
      <video
        key={weatherVideo}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      >
        <source src={weatherVideo} type="video/mp4" />
      </video>

      {/* طبقة شفافة فوق الفيديو لجمالية النص */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.35)",
          zIndex: -1,
        }}
      />

      {!current ? (
        <div className="text-white text-center">
          Loading weather details for {city}...
        </div>
      ) : (
        <>
          <div
            className="text-white mb-4 p-4 rounded-4 shadow"
            style={{
              background: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(20px)",
            }}
          >
            <h1 className="h2 fw-bold mb-2">Today Weather Details</h1>
            <p className="fs-5 opacity-75 mb-4">
              Complete information for {city}, {country}
            </p>

            <div className="row g-4">
              <div className="col-md-6">
                <div
                  className="d-flex justify-content-between align-items-center p-3 rounded-3 mb-3"
                  style={{ background: "rgba(255,255,255,0.10)" }}
                >
                  <span className="fs-5 opacity-75">Sunrise</span>
                  <span className="fs-4 fw-bold">
                    {new Date(current.sys.sunrise * 1000).toLocaleTimeString(
                      [],
                      { hour: "2-digit", minute: "2-digit" }
                    )}
                  </span>
                </div>
                <div
                  className="d-flex justify-content-between align-items-center p-3 rounded-3 mb-3"
                  style={{ background: "rgba(255,255,255,0.10)" }}
                >
                  <span className="fs-5 opacity-75">Sunset</span>
                  <span className="fs-4 fw-bold">
                    {new Date(current.sys.sunset * 1000).toLocaleTimeString(
                      [],
                      { hour: "2-digit", minute: "2-digit" }
                    )}
                  </span>
                </div>
                <div
                  className="d-flex justify-content-between align-items-center p-3 rounded-3 mb-3"
                  style={{ background: "rgba(255,255,255,0.10)" }}
                >
                  <span className="fs-5 opacity-75">Pressure</span>
                  <span className="fs-4 fw-bold">
                    {current.main.pressure} hPa
                  </span>
                </div>
                <div
                  className="d-flex justify-content-between align-items-center p-3 rounded-3 mb-3"
                  style={{ background: "rgba(255,255,255,0.10)" }}
                >
                  <span className="fs-5 opacity-75">Feels Like</span>
                  <span className="fs-4 fw-bold">
                    {Math.round(current.main.feels_like)}°C
                  </span>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="d-flex justify-content-between align-items-center p-3 rounded-3 mb-3"
                  style={{ background: "rgba(255,255,255,0.10)" }}
                >
                  <span className="fs-5 opacity-75">Humidity</span>
                  <span className="fs-4 fw-bold">{current.main.humidity}%</span>
                </div>
                <div
                  className="d-flex justify-content-between align-items-center p-3 rounded-3 mb-3"
                  style={{ background: "rgba(255,255,255,0.10)" }}
                >
                  <span className="fs-5 opacity-75">Clouds</span>
                  <span className="fs-4 fw-bold">{current.clouds.all}%</span>
                </div>
                <div
                  className="d-flex justify-content-between align-items-center p-3 rounded-3 mb-3"
                  style={{ background: "rgba(255,255,255,0.10)" }}
                >
                  <span className="fs-5 opacity-75">Wind</span>
                  <span className="fs-4 fw-bold">
                    {current.wind.speed} m/s
                  </span>
                </div>
                <div
                  className="d-flex justify-content-between align-items-center p-3 rounded-3 mb-3"
                  style={{ background: "rgba(255,255,255,0.10)" }}
                >
                  <span className="fs-5 opacity-75">Visibility</span>
                  <span className="fs-4 fw-bold">
                    {(current.visibility / 1000).toFixed(1)} km
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Temperature Chart */}
          <div
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-4 p-4 p-md-5 mb-4 shadow-lg text-white"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
              borderRadius: "25px",
            }}
          >
            <h2 className="fs-2 fw-bold mb-4 text-end">
              Temperature (Next 24h)
            </h2>
            <div style={{ width: "100%", height: "300px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={forecastData}>
                  <defs>
                    <linearGradient
                      id="tempGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="#fbbf24"
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor="#fbbf24"
                        stopOpacity={0.1}
                      />
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
            {/* Humidity Chart */}
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
                    <BarChart data={forecastData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(255,255,255,0.2)"
                      />
                      <XAxis dataKey="time" stroke="white" />
                      <YAxis stroke="white" />
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

            {/* Wind Speed Chart */}
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
                    <LineChart data={forecastData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(255,255,255,0.2)"
                      />
                      <XAxis dataKey="time" stroke="white" />
                      <YAxis stroke="white" />
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
        </>
      )}
    </div>
  );
};

export default Details;