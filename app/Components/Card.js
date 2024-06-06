import Link from 'next/link';

const Card = ({ iconSrc, title, link }) => {
  return (
    <Link href={link}>
      <div className="bg-green-100 rounded-lg p-4 flex flex-col items-center justify-between h-48 w-48">
        <img src={iconSrc} alt={title} className="h-16 w-16 mb-4" />
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <span className="text-2xl">→</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
