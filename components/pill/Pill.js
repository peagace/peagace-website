const Pill = ({ text }) => {
  return (
    <>
      <div className="mb-5 mr-5 max-w-max rounded-full px-3 pb-[3px] pt-[5px] outline outline-1 outline-outlinegray">
        <p className="text-pill uppercase text-newblack">{text}</p>
      </div>
    </>
  );
};

export default Pill;
