import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Temp from "../components/Temp";
import Days from "../components/Days";
import Hourly from "../components/Hourly";

import MoonVideo from "../assets/Videos/moon.mp4";
import SunVideos from "../assets/Videos/sunVideos.mp4";
import Rain1 from "../assets/Videos/rain1.mp4";
import Rain2 from "../assets/Videos/rain2.mp4";
import Thunder1 from "../assets/Videos/thunder1.mp4";
import Thunder2 from "../assets/Videos/thunder2.mp4";

import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Moon,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

const API_KEY = "5c89ed4b438a783c36b5f62dedf6a02d";

const defaultCities = {
  LB: "Beirut",
  SY: "Damascus",
  PS: "Gaza",
  TR: "Istanbul",
  USA: "Washington",
  FR: "Paris",
  IT: "Rome",
  AU: "Canberra",
  DE: "Berlin",
  RU: "Moscow",
};

const Home = () => {
  const location = useLocation();

  // منجيب البلد والمدينة (اذا وجدت) من الرابط
  const country = location.state?.country || "LB";
  const incomingCity = location.state?.city; // المدينة القادمة من صفحة Details

  // 1. التعديل الأول: القيمة الأولية بتشوف اذا في مدينة جاية، اذا لا بتاخد الافتراضية
  const [city, setCity] = useState(incomingCity || defaultCities[country]);

  const [current, setCurrent] = useState(null);
  const [hourly, setHourly] = useState([]);
  const [daily, setDaily] = useState([]);
  const [video, setVideo] = useState(SunVideos);
  const [searchTrigger, setSearchTrigger] = useState(false);

  // 2. التعديل الثاني: منع إعادة تعيين المدينة إذا كنا راجعين من Details
  useEffect(() => {
    // فقط إذا ما في مدينة جاية بالرابط (يعني جايين من Welcome مش من Details)
    // منرجع للمدينة الافتراضية
    if (!incomingCity) {
      setCity(defaultCities[country]);
    }
  }, [country, incomingCity]);

  useEffect(() => {
    fetchCurrentWeather();
    fetchForecast();
  }, [searchTrigger, country, city]); // city is a dependency here

  const fetchCurrentWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      if (!data.weather) return;
      setCurrent(data);
      const isDay = data.dt >= data.sys.sunrise && data.dt <= data.sys.sunset;
      handleVideo(data.weather[0].main, isDay);
    } catch (error) {
      console.error("Error fetching current weather:", error);
    }
  };

  // const fetchForecast = async () => {
  //   try {
  //     const res = await fetch(
  //       `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${API_KEY}`
  //     );
  //     const data = await res.json();
  //     if (!data.list) return;

  //     const filteredHourly = data.list.filter((item) => {
  //       const date = new Date(item.dt_txt);
  //       return date > new Date();
  //     });

  //     const formattedHourly = filteredHourly.slice(0, 8).map((h) => {
  //       const date = new Date(h.dt_txt);
  //       return {
  //         ...h,
  //         formattedTime: date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
  //       };
  //     });
  //     setHourly(formattedHourly);

  //     const dailyMap = {};
  //     data.list.forEach((reading) => {
  //       const dateStr = reading.dt_txt.split(" ")[0];
  //       if (!dailyMap[dateStr]) {
  //         dailyMap[dateStr] = {
  //           dt_txt: reading.dt_txt,
  //           weather: reading.weather,
  //           min: reading.main.temp_min,
  //           max: reading.main.temp_max
  //         };
  //       } else {
  //         dailyMap[dateStr].min = Math.min(dailyMap[dateStr].min, reading.main.temp_min);
  //         dailyMap[dateStr].max = Math.max(dailyMap[dateStr].max, reading.main.temp_max);
  //       }
  //     });

  //     const todayDate = new Date().getDate();
  //     const processedDaily = Object.values(dailyMap)
  //       .filter(day => {
  //           const dayDate = new Date(day.dt_txt).getDate();
  //           return dayDate !== todayDate;
  //       })
  //       .slice(0, 5);

  //     setDaily(processedDaily);
  //   } catch (error) {
  //     console.error("Error fetching forecast:", error);
  //   }
  // };

  const fetchForecast = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      if (!data.list) return;

      // فلترة الساعات (Hourly) للساعات القادمة فقط
      const filteredHourly = data.list.filter((item) => {
        const date = new Date(item.dt_txt);
        return date > new Date(); // استبعاد الساعات التي مرت
      });

      const formattedHourly = filteredHourly.slice(0, 8).map((h) => {
        const date = new Date(h.dt_txt);
        return {
          ...h,
          formattedTime: date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
      });
      setHourly(formattedHourly);

      // فلترة الأيام (Daily) لتضمين 5 أيام فقط بعد اليوم الحالي
      const dailyMap = {};

      data.list.forEach((reading) => {
        const dateStr = reading.dt_txt.split(" ")[0];

        if (!dailyMap[dateStr]) {
          dailyMap[dateStr] = {
            dt_txt: reading.dt_txt,
            weather: reading.weather,
            min: reading.main.temp_min,
            max: reading.main.temp_max,
          };
        } else {
          dailyMap[dateStr].min = Math.min(
            dailyMap[dateStr].min,
            reading.main.temp_min
          );
          dailyMap[dateStr].max = Math.max(
            dailyMap[dateStr].max,
            reading.main.temp_max
          );
        }
      });

      // تحديد اليوم الحالي
      const todayDate = new Date().toLocaleDateString("en-US");

      // استخراج 5 أيام بدءًا من اليوم التالي
      const processedDaily = Object.values(dailyMap)
        .filter(
          (day) =>
            new Date(day.dt_txt).toLocaleDateString("en-US") !== todayDate
        ) // استبعاد اليوم الحالي
        .slice(0, 5); // أخذ 5 أيام فقط بعد اليوم الحالي

      // في حالة الحصول على أقل من 5 أيام، يتم إضافة اليوم الذي يلي آخر يوم متاح
      if (processedDaily.length < 5) {
        const missingDays = 5 - processedDaily.length;
        const lastDay = new Date(
          processedDaily[processedDaily.length - 1].dt_txt
        );
        for (let i = 1; i <= missingDays; i++) {
          const nextDay = new Date(lastDay);
          nextDay.setDate(lastDay.getDate() + i);
          processedDaily.push({
            dt_txt: nextDay.toISOString(),
            weather: [{ main: "Clear" }],
            min: 20,
            max: 25,
          });
        }
      }

      setDaily(processedDaily);
    } catch (error) {
      console.error("Error fetching forecast:", error);
    }
  };

  const handleVideo = (weather, isDay) => {
    if (weather === "Clear") {
      setVideo(isDay ? SunVideos : MoonVideo);
      return;
    }
    if (weather === "Rain") {
      setVideo([Rain1, Rain2][Math.floor(Math.random() * 2)]);
      return;
    }
    if (weather === "Thunderstorm") {
      setVideo([Thunder1, Thunder2][Math.floor(Math.random() * 2)]);
      return;
    }
    if (weather === "Clouds") {
      setVideo(isDay ? SunVideos : MoonVideo);
      return;
    }
    setVideo(isDay ? SunVideos : MoonVideo);
  };

  const getIcon = (weather, isDay, size = 32) => {
    switch (weather) {
      case "Rain":
        return <CloudRain size={size} color="#38bdf8" />;
      case "Snow":
        return <CloudSnow size={size} color="#bae6fd" />;
      case "Thunderstorm":
        return <CloudLightning size={size} color="#facc15" />;
      case "Clouds":
        return <Cloud size={size} color="#e5e7eb" />;
      case "Clear":
      default:
        return isDay ? (
          <Sun size={size} color="#facc15" />
        ) : (
          <Moon size={size} color="#facc15" />
        );
    }
  };

  const handleSearch = (city) => {
    setCity(city);
    setSearchTrigger(!searchTrigger);
  };
  const isCurrentDay = current
    ? current.dt >= current.sys.sunrise && current.dt <= current.sys.sunset
    : true;

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <video
        key={video}
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
        <source src={video} type="video/mp4" />
      </video>
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.35)",
          zIndex: -1,
        }}
      />

      {current && (
        <Temp
          city={current.name}
          country={current.sys.country}
          temperature={Math.round(current.main.temp)}
          condition={current.weather[0].main}
          humidity={current.main.humidity}
          windSpeed={current.wind.speed}
          pressure={current.main.pressure}
          visibility={current.visibility / 1000}
          icon={getIcon(current.weather[0].main, isCurrentDay, 70)}
        />
      )}

      <div className="container">
        <div
          className="card text-white shadow-lg mb-4 p-3"
          style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
            borderRadius: "25px",
          }}
        >
          <h2 className="fs-4 fw-bold mb-3">Hourly Forecast</h2>
          <div
            className="d-flex flex-nowrap overflow-auto pb-2"
            style={{ gap: "1rem" }}
          >
            {hourly.map((h, i) => (
              <Hourly
                key={i}
                Hour={{
                  time: h.formattedTime,
                  degree: Math.round(h.main.temp) + "°C",
                  icon: getIcon(h.weather[0].main, h.sys.pod === "d"),
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div
          className="card text-white shadow-lg mb-4 p-3"
          style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
            borderRadius: "25px",
          }}
        >
          <h2 className="fs-4 fw-bold mb-3">5-Day Forecast</h2>
          {daily.map((d, i) => (
            <Days
              key={i}
              Days={{
                Day: new Date(d.dt_txt).toLocaleDateString("en-US", {
                  weekday: "long",
                }),
                Condition: d.weather[0].main,
                TemperatureMorning: Math.round(d.max) + "°",
                TemperatureNight: Math.round(d.min) + "°",
                Icon: getIcon(d.weather[0].main, true),
              }}
            />
          ))}
        </div>
      </div>
      <Footer city={city} country={country} />
    </div>
  );
};

export default Home;
