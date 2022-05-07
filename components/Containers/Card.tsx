import Link from "next/link";
import { FaLink } from "react-icons/fa";

interface CardProps {
  children: React.ReactNode;
  title?: string;
  textOnly?: boolean;
  href?: string;
  hrefLocal?: boolean;
}

export default function Card({ children, title = "", textOnly = true, href = "", hrefLocal = false }: CardProps) {
  return (
    <div className="bg-gray-600 m-1 md:m-2 p-1 md:p-3 rounded-xl drop-shadow-lg hover:scale-105 transition-all">
      {title &&
        <p className="flex justify-center text-xl md:text-2xl font-bold mb-1 drop-shadow-lg">
          {title}
          {
            href !== ""
              ?
                <p className="text-xl md:text-2xl font-bold drop-shadow-lg ml-2">
                  {
                    hrefLocal
                      ? <Link href={href}><a><FaLink /></a></Link>
                      : <a href={href}><FaLink /></a>
                  }
                </p>
              : <></>
          }
        </p>
      }
      {' '}
      <div className="flex justify-center items-center text-l md:text-xl h-max">
        {
          textOnly
            ?
            <p className="text-center">
              {children}
            </p>
            : children
        }
      </div>
    </div>
  )
}