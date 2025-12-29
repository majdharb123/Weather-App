const Hourly = ({ Hour }) => {
  return (
    <div
      className="flex-shrink-0 text-center p-3"
      style={{
        background: "rgba(255,255,255,0.2)",
        borderRadius: "15px",
        minWidth: "80px",
      }}
    >
      {/* هنا التعديل الأساسي: عرض الوقت بشكل صحيح */}
      <div className="fw-semibold mb-2">{Hour.time}</div>
      
      <div className="d-flex justify-content-center mb-2">{Hour.icon}</div>
      <div className="fs-5 fw-bold">{Hour.degree}</div>
    </div>
  );
};

export default Hourly;