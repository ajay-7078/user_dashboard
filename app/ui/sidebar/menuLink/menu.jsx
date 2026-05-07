"use client";

import { memo } from 'react';
import Link from "next/link";
import Style from "./menuLInk.module.css";

const MenuLInk = () => {

const pathname = usePathname();
  return (
    <div>
      
      <Link href={item.path } className={ `${Style.menuLink} ${pathname === item.path ? Style.active : ""}` }>
      {item.icon}
      {item.title}

      </Link>
    </div>

  );
};

export default memo(MenuLInk);