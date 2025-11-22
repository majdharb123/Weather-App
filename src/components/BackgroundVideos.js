const BackgroundVideos = ({ src }) => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
        objectFit: "cover",
        zIndex: "-1",
      }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};
export default BackgroundVideos;
