import logo from './logo.svg';
import './App.css';
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';

import { FaCheck } from "react-icons/fa";
import Card from './components/Card';
 const data = [
    {
      plan: "FREE",
      price: "$0",
      user: "Single User",
      userEnabler:true,
      storage: "5GB Storage",
      storageEnabler:true,
      publicproject: "Unlimited Public Projects",
      publicprojectEnabler:true,
      access: "Community Access",
      accessEnabler:true,
      privateprojects: "Unlimited private projects",
      privateprojectsEnabler:false,
      support: "Dedicated Phone Support",
      supportEnabler:false,
      domain: "Free Subdomain",
      domainEnabler:false,
      reports: "Monthly Status Reports",
      reportsEnabler:false,
      clr: "blue",
    },
    {
      plan: "PLUS",
      price: "$9",
      user: "5 User",
      userEnabler:true,
      storage: "50GB Storage",
      storageEnabler:true,
      publicproject: "Unlimited Public Projects",
      publicprojectEnabler:true,
      access: "Community Access",
      accessEnabler:true,
      privateprojects: "Unlimited private projects",
      privateprojectsEnabler:true,
      support: "Dedicated Phone Support",
      supportEnabler:true,
      domain: "Free Subdomain",
      domainEnabler:true,
      reports: "Monthly Status Reports",
      reportsEnabler:false,
      clr: "blue",
    },
    {
      plan: "PRO",
      price: "$0",
      user: "Unlimited User",
      userEnabler:true,
      storage: "150GB Storage",
      storageEnabler:true,
      publicproject: "Unlimited Public Projects",
      publicprojectEnabler:true,
      access: "Community Access",
      accessEnabler:true,
      privateprojects: "Unlimited private projects",
      privateprojectsEnabler:true,
      support: "Dedicated Phone Support",
      supportEnabler:true,
      domain: "Free Subdomain",
      domainEnabler:true,
      reports: "Monthly Status Reports",
      reportsEnabler:true,
      clr: "blue",
    },
  ];

function App() {
  return (
    <div className="App">

      <section className='pricing'>
        
     
     {data.map((e)=>{
       
return<Card card={e}/>

     })
   
    }
    

    
    </section>
    </div>
  );
}

export default App;
