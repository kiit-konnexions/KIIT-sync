const RequestFeature = ({ open }) => {
  return (
    <div
      className={`flex gap-1 z-20 mx-auto mb-5 ${!open ? "relative bottom-10" : "relative top-10"} `}
    >
      <div>Got an idea?</div>
      <div className="text-blue-700 cursor-pointer">Request a feature</div>
    </div>
  );
};

export default RequestFeature;
