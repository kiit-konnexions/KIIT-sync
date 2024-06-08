import Image from "next/image";

const HomeBody = () => {
  return (
    <div className="mt-5">
      <div className="text-[35px] text-[000000] font-semibold text-center mb-3">Some Heading</div>
      <div className="text-[20px] text-[000000] font-normal w-[80%] text-center mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus tristique lacus, efficitur porttitor orci fringilla ut. Curabitur volutpat purus at vestibulum sodales. Quisque nec nibh vitae justo semper tempus. Donec vulputate mauris massa, sed sodales magna blandit nec. Fusce eu neque ac purus tempus dapibus sit amet in quam. In hac habitasse platea dictumst. Nam sed sapien accumsan, sagittis.</div>
      <div className="flex justify-center mt-2">
      <div className="text-[20px] text-[#1F79FF] font-normal text-center mr-2">Learn More </div>
      <Image src="/BlueArrow.png" alt="" width={25} height={20}/>
      </div>
    </div>
  )
}

export default  HomeBody;