interface SideBarIconProps {
  icon: JSX.Element;
  text?: string;
  open?: boolean;
}

export default function SideBarIcon({ icon, text = "", open = false }: SideBarIconProps) {
  return (
    <div className={`sidebar-icon group ${open && "bg-green-600 text-white rounded-xl"}`}>
      {icon}
      { text && <span className="sidebar-tooltip group-hover:scale-100">{text}</span> }
    </div>
  );
};

/*
interface SideBarFolderProps {
  components: Array<JSX.Element>;
  text: string;
}

export function SideBarFolder({ components, text = "" }: SideBarFolderProps) {
  const [isOpen, setIsOpen] = useState(false);

  let styleClasses = "";
  if (isOpen) styleClasses = " bg-green-600 text-white rounded-xl";

  return (
    <>
      <div className={"sidebar-icon group" + styleClasses} onClick={()=>{setIsOpen(!isOpen)}}>
        { !isOpen && <FaFolder /> }
        { isOpen && <FaFolderOpen /> }
        { text && <span className="sidebar-tooltip group-hover:scale-100">{text}</span> }
      </div>
      <div className={"sidebar-folder group" + (isOpen ? " block" : " hidden")}>
        {components}
      </div>
    </>
  );
};
*/
