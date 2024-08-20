// 'use client'
import Image from "next/image";

const Social = () => {
  return (
    <>
      <div className="flex flex-wrap space-y-4 space-y-reverse">
        <a
          target="_blank"
          href={"https://www.instagram.com/peagace/"}
          className="mr-5"
        >
          <Image
            src={"/assets/icons/social/instagram.svg"}
            alt="Instagram"
            width={24}
            height={24}
            className="duration-400 transition ease-out hover:brightness-0"
          />
        </a>

        <a
          target="_blank"
          href={"https://twitter.com/peagace_"}
          className="mr-5"
        >
          <Image
            src={"/assets/icons/social/twitter-x.svg"}
            alt="Twitter-X"
            width={24}
            height={24}
            className="duration-400 transition ease-out hover:brightness-0"
          />
        </a>

        <a
          target="_blank"
          href={"https://www.behance.net/peagace"}
          className="mr-5"
        >
          <Image
            src={"/assets/icons/social/behance.svg"}
            alt="Behance"
            width={24}
            height={24}
            className="duration-400 transition ease-out hover:brightness-0"
          />
        </a>

        <a
          target="_blank"
          href={"https://www.linkedin.com/in/phalencarbatista/"}
          className="mr-5"
        >
          <Image
            src={"/assets/icons/social/linkedin.svg"}
            alt="LinkedIn"
            width={24}
            height={24}
            className="duration-400 transition ease-out hover:brightness-0"
          />
        </a>

        <a
          target="_blank"
          href={"https://discordapp.com/users/286355001876545536"}
          className="mr-5"
        >
          <Image
            src={"/assets/icons/social/discord.svg"}
            alt="Discord"
            width={24}
            height={24}
            className="duration-400 transition ease-out hover:brightness-0"
          />
        </a>

        <a
          target="_blank"
          href={"https://open.spotify.com/user/12176495314?si=34fb2f883fac4c61"}
        >
          <Image
            src={"/assets/icons/social/spotify.svg"}
            alt="Spotify"
            width={24}
            height={24}
            className="duration-400 transition ease-out hover:brightness-0"
          />
        </a>
      </div>
    </>
  );
};

export default Social;
