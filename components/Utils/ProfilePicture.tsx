import Image from "next/image";
import pfp from "../../public/pfp.png";

/*
interface ProfilePictureProps {
  discordId: string;
}

export default function ProfilePicture({ discordId }: ProfilePictureProps) {
  const lanyard = useLanyard({
    userId: discordId,
  });

  return <div className="flex items-center justify-center h-64 w-64 mb-5">
    {lanyard.isValidating && <Spinner/>}
    {!lanyard.isValidating &&
      <Image
        src={`https://cdn.discordapp.com/avatars/${lanyard.data.data.discord_user.id}/${lanyard.data.data.discord_user.avatar}.png?size=256`}
        className="rounded-full"
        layout="fill"
        alt="pfp"
      />}
  </div>
}
*/

export default function ProfilePicture() {
  return (
    <div className="mb-5 h-64 w-64">
      <Image
        src={pfp}
        className="rounded-full"
        alt="pfp"
      />
    </div>
  )
}