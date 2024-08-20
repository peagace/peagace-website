import Image from "next/image";
import Link from "next/link";

const Project = ({ id, title, description, tags, image, alt, link }) => {
  return (
    <>
      <Link
        href={link}
        scroll={false}
        className="group grid grid-cols-12 gap-5 bg-lightgray px-5 pb-10 pt-20 duration-[800ms] ease-[cubic-bezier(0,.97,.34,1)] hover:rounded-xl hover:bg-project-gradient  lg:gap-10"
      >
        <p className="col-span-2 text-eighteen text-newgray group-hover:text-newblack lg:col-span-1">
          {id}
        </p>
        <p className="col-span-10 text-twentyfour uppercase text-newblack duration-[800ms] ease-[cubic-bezier(0,.97,.34,1)] group-hover:tracking-[0.4rem] group-hover:text-black lg:col-span-3">
          {title}
        </p>
        <p className="col-span-12 text-base text-newblack lg:col-span-3">
          {description}
        </p>
        <div className="col-span-12 lg:col-span-4 lg:col-start-9">
          <div className="flex flex-wrap self-start">{tags}</div>
        </div>
        <div className="col-span-12">
          <Image
            src={image}
            alt={alt}
            width={40000}
            height={720}
            quality={100}
            unoptimized="true"
            priority
            style={{
              objectFit: "cover",
              // minHeight: "740px",
              // maxHeight: "740px",
            }}
            className="max-h-[720px] min-h-[720px] rounded-xl border border-outlinegray bg-cover bg-local duration-[800ms] ease-[cubic-bezier(0,.97,.34,1)] group-hover:translate-y-[20px] group-hover:rounded-[100px] group-hover:border-[5px]"
          />
        </div>
      </Link>
    </>
  );
};

export default Project;
