import Image from "next/image";
import { useLanyard } from "react-use-lanyard";
import Card from "../Containers/Card";
import Spinner from "../Utils/Spinner";

interface UserProps {
  userId: string;
}

export default function User({ userId }: UserProps) {
  const lanyard = useLanyard({
    userId: userId,
  });
  return (
    <>
      <Card
        textOnly={false}
        title={lanyard.error || lanyard.isValidating ? "" : lanyard.data.data.discord_user.username}
        href={lanyard.error || lanyard.isValidating ? "" :
          (lanyard.data.data.kv.website ? lanyard.data.data.kv.website : `//discord.com/users/${lanyard.data.data.discord_user.id}`)}
      >
        <div className="flex items-center justify-center m-1 md:m-2">
          {lanyard.isValidating
            ? <Spinner />
            :
            (
              lanyard.error
                ? <div>!</div>
                :
                (
                  <>
                    <div className="relative w-32 h-32 md:w-64 md:h-64">
                      <Image
                        src={`https://cdn.discordapp.com/avatars/${lanyard.data.data.discord_user.id}/${lanyard.data.data.discord_user.avatar}.png?size=512`}
                        className="rounded-full"
                        layout="fill"
                        alt="pfp"
                      />
                    </div>
                  </>
                )
            )
          }
        </div>
      </Card>
    </>
  )
}