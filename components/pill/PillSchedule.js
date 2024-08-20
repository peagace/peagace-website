const PillSchedule = ({ text }) => {
  return (
    <>
      <div className="mt-5 flex max-w-max rounded-full px-3 pb-[3px] pt-[5px] outline outline-1 outline-acid">
        <div className="mr-3 h-[14px] min-h-[14px] w-[14px] min-w-[14px] rounded-full bg-acid"></div>
        <p className="text-pill uppercase text-newblack">{text}</p>
      </div>
    </>
  );
};

export default PillSchedule;
