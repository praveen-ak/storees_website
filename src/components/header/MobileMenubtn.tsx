import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function MobileMenubtn({ onClick }:any) {
  return (
    <button className="p-2" onClick={onClick}>
      <FontAwesomeIcon className="text-2xl" icon={faBars} />
    </button>
  );
}