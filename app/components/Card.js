const Card = (props) => {
  return (
    <div
      className={`w-full max-w-sm ${props.bgColor} border-gray-200 rounded-lg shadow sm:mx-2`}
    >
      <div className="flex flex-col items-center px-10 py-4 ">
        <img
          className="cursor-pointer w-32 h-28 mb- pt-2 mt-2 rounded-lg py-1 sm:w-28 sm:h-20"
          src={props.iconSrc}
          style={{ mixBlendMode: "multiply" }}
          alt={`${props.title} image`}
        />
      </div>
      <div className="flex justify-center text-lg font-semibold border-2  text-black cursor-pointer border-transparent rounded-lg hover:border-slate-400 w-fit h-fit mx-auto gap-1 items-center px-2 py-1 mb-4 sm:w-full sm:justify-between sm:text-sm">
        <h2>{props.title}</h2>
        <h2>--{">"}</h2>
      </div>
    </div>
  );
};

export default Card;
