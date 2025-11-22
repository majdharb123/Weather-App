import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Thunder2 from "../assets/Videos/thunder2.mp4";
import Thunder1 from "../assets/Videos/thunder1.mp4";
import MoonVideo from "../assets/Videos/moon.mp4";
import SunVideos from "../assets/Videos/sunVideos.mp4";
import Rain1 from "../assets/Videos/rain1.mp4";
import Rain2 from "../assets/Videos/rain2.mp4";
import BackgroundVideos from "../components/BackgroundVideos";
import Temp from "../components/Temp";
import Days from "../components/Days";
import Hourly from "../components/Hourly";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Cloud,
  CloudRain,
  Sun,
  CloudSnow,
  CloudDrizzle,
  CloudLightning,
  Moon
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  const FeatureDays = [
    {
      id: 1,
      Day: "Monday",
      Icon: <Sun size={32}  color="yellow" />,
      Condition: "Clear",
      TemperatureMorning: "31°",
      TemperatureNight: "29°",
    },
    {
      id: 2,
      Day: "Tuesday",
      Icon: <Sun size={32} color="yellow"  />,
      Condition: "clear",
      TemperatureMorning: "31°",
      TemperatureNight: "26°",
    },
    {
      id: 3,
      Day: "Wednesday",
      Icon: <Sun size={32} color="yellow" />,
      Condition: "clear",
      TemperatureMorning: "29°",
      TemperatureNight: "25°",
    },
    {
      id: 4,
      Day: "Thursday",
      Icon: <Sun size={32} color="yellow" />,
      Condition: "clear",
      TemperatureMorning: "29°",
      TemperatureNight: "25°",
    },
    {
      id: 5,
      Day: "Friday",
      Icon: <Sun size={32} color="yellow"/>,
      Condition: "clear",
      TemperatureMorning: "23°",
      TemperatureNight: "21°",
    },
  ];
  const feature = [
    {
      id: 1,
      time: "Now",
      icon: <Sun size={32} color="#facc15" />,
      degree: "31°c",
    },
    {
      id: 2,
      time: "1 pm",
      icon: <Sun size={32} color="#facc15" />,
      degree: "31°c",
    },
    {
      id: 3,
      time: "2 pm",
      icon: <Sun size={32} color="#facc15" />,
      degree: "32°c",
    },
    {
      id: 4,
      time: "3 pm",
      icon: <Sun size={32} color="#facc15" />,
      degree: "32°c",
    },
    {
      id: 5,
      time: "4 pm",
      icon: <Sun size={32} color="#facc15" />,
      degree: "29°c",
    },
    {
      id: 6,
      time: "5 pm",
      icon: <Sun size={32} color="#facc15" />,
      degree: "29°c",
    },
    {
      id: 7,
      time: "6 pm",
      icon: <Sun size={32} color="#facc15" />,
      degree: "27°c",
    },
    {
      id: 8,
      time: "7 pm",
      icon: <Moon size={32} color="#facc15" />,
      degree: "32°c",
    },
    {
      id: 9,
      time: "8 pm",
      icon: <Moon size={32} color="#facc15" />,
      degree: "29°c",
    },
    {
      id: 10,
      time: "9 pm",
      icon: <Moon size={32} color="#facc15" />,
      degree: "29°c",
    },
     {
      id: 11,
      time: "10 pm",
      icon: <Moon size={32} color="#facc15" />,
      degree: "27°c",
    },
  ];
  return (
    <div>
      <Navbar />
      <BackgroundVideos src={MoonVideo} />
      <Temp
        city="Tripoli"
        country="Lebanon"
        icon={<Sun size={70} color="yellow" />}
        temperature="30"
        condition="Clear"
        humidity="9 km"
        windSpeed="20"
        visibility="20"
        pressure="1018"
      />
      <div className="container">
        <div
          className="card text-white shadow-lg mb-4 p-3"
          style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
            borderRadius: "25px",
          }}
        >
          <h2 className="fs-4 fw-bold mb-3 text-white">Hourly Forecast</h2>
          <div
            className="d-flex flex-nowrap overflow-auto pb-2"
            style={{ gap: "1rem" }}
          >
            {feature.map((p) => (
              <div key={p.id} className="col-auto ">
                <Hourly Hour={p} />
              </div>
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
          {FeatureDays.map((p) => (
            <Days key={p.id} Days={p} />
          ))}
        </div>
      </div>
      <Footer/>
      
    </div>
  );
};
export default Home;
