import Link from "next/link";
import Modal from "../UI/Modal";
import {menus} from '../../data/LinkData'

interface Iprops{
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
