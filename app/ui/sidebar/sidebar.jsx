
import { memo } from "react";
import "./sidebar.modual.css";
import { MdDashboard
         ,MdSupervisorAccount,
         MdProductionQuantityLimits,
         MdAttachMoney,



 } from "react-icons/md";


const menuItems = [
  { title: "Dashboard",
    path:"/dashboard", icon: <MdDashboard />

   },
  { title: "users",
     path: "/dashboard/users", icon:<MdSupervisorAccount />

  },

  { title: "products",
     path: "/dashboard/products", icon: <MdProductionQuantityLimits />
     },

  { title: "transactions",
     path: "/dashboard/transactions", icon:<MdAttachMoney />

 }
];
const Sidebar = () => {
  return (
    <div className="container">
      <div className="user">
        <img className="userimage" src="./download (1).png" alt="Sidebar Image" width="50"
        height="50" />
        <div className="userDetail">
            <span className="username"></span>
            hello siderbar</div>  
            <span className="user
            title"></span>
      </div>
      <ul>
        {menuItems.map((item)=>(
          <li key={item.title} className="menuItem">
            <a href={item.path} className="menuLink">
              <span className="icon">{item.icon}</span>
              <span className="title">{item.title}</span>
            </a>
           
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default memo(Sidebar);
