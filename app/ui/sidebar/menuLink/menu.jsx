import { memo } from 'react';
import Link from "next/link";
import Style from "./menuLInk.module.css";

const MenuLInk = () => {
  return (
    <div>
      
      <Link href={item.path } className={Style.containor}>
      {item.icon}
      {item.title}

      </Link>
    </div>

  );
};

export default memo(MenuLInk);