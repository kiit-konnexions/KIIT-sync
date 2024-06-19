"use client";

const ViewFeatureButton = ({ open, setOpen }) => {
  return (
   
    <button
      onClick={() => setOpen(!open)}
      className={`mt-8 bg-black text-white w-[207px] h-[50px] z-20 rounded-3xl text-[15px] mx-auto shadow-slate-700 shadow-lg ${!open && "relative bottom-24"}`}
    >
      {open ? "View less features" : "View all features"}
    </button>
    
  );
};

export default ViewFeatureButton;
