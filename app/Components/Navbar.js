import Link from 'next/link';
import Card from './Card';
const Navbar = () => {
  return (
    <nav>
    <div className='flex justify-between items-center py-3 px-3'>
        <div className='flex gap-1'>
     <h1 className='font-bold text-xl'>KiiT </h1> <h1 className='text-xl'> Sync</h1>
     </div>
     <img src="https://ksac.kiit.ac.in/wp-content/uploads/2020/10/icon-1.png" alt="" className='w-auto h-12'/>
    </div>
    <main className="flex justify-center">
        <div className="flex gap-4">
          <Card iconSrc="/student.svg" title="Students" link="/students" />
          <Card iconSrc="/teacher-stroke-rounded.svg" title="Teachers" link="/teachers" />
        </div>
      </main>
    </nav>
    
  );
};

export default Navbar;
