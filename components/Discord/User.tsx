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
      <Card textOnly={false}>
        <div className="flex items-center justify-center w-64 h-64">
          {lanyard.isValidating
            ? <Spinner />
            :
            (
              lanyard.error
                ? <div>!</div>
                :
                (
                  <>
                    <div className="relative w-64 h-64">
                      <Image
                        src={`https://cdn.discordapp.com/avatars/${lanyard.data.data.discord_user.id}/${lanyard.data.data.discord_user.avatar}.png?size=512`}
                        className="rounded-full"
                        layout="fill"
                        alt="pfp"
                      />
                    </div>

                    <p>{lanyard.data.data.discord_user.username}</p>
                  </>
                )
            )
          }
        </div>
      </Card>
    </>
  )
}