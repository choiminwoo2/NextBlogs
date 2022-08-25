import Link from "next/link";
import Modal from "../UI/Modal";

interface menuItems {
  url: string;
  menu: string;
}
const menus: menuItems[] = [
  { url: "/", menu: "Home" },
  { url: "/skills", menu: "Skills" },
  { url: "/projects", menu: "Project" },
];
export interface Iprops{
    onClose: () => void
}
const Menu = (props :Iprops) => {
  return (
    <Modal onClose={props.onClose}>
      <ul onClick={props.onClose}>
        {menus.map((menuObj) => (
          <li key={menuObj.menu}>
            <Link href={menuObj.url}>{menuObj.menu}</Link>
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default Menu;
