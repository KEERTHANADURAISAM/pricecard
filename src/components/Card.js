import React from "react";

function Card(props) {
    console.log(props);
    return(
        <div className="card-body">
        <div className="heading">
        <h5 className="text-muted">{props.card.plan}</h5>
        <h6 className="card-price text-center">{props.card.price}<span className="period">/month</span></h6>
        </div>
        <hr/>
        <ul className="ul-fa">
            
<li className={props.card.userEnabler?"":"text-muted"}><span className="fa-li"><i className={props.card.userEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.card.plan==="FREE"?<>{props.card.user}</>:<b>{props.card.user}</b>}</li>
<li  className={props.card.storageEnabler?"":"text-muted"}><span className="fa-li"><i className={props.card.storageEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.card.storage}</li>
<li  className={props.card.publicprojectEnabler?"":"text-muted"}><span className="fa-li"><i className={props.card.publicprojectEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.card.publicproject}</li>
<li  className={props.card.accessEnabler?"":"text-muted"}><span className="fa-li"><i className={props.card.accessEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.card.access}</li>      
<li  className={props.card.privateprojectsEnabler?"":"text-muted"}><span className="fa-li"><i className={props.card.privateprojectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.card.privateprojects}</li>
<li  className={props.card.supportEnabler?"":"text-muted"}><span className="fa-li"><i className={props.card.supportEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.card.support}</li>
<li  className={props.card.domainEnabler?"":"text-muted"}><span className="fa-li"><i className={props.card.domainEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.card.plan==="PRO"?<><b>Unlimited</b> {props.card.domain}</>:<>{props.card.domain}</>}</li>
<li  className={props.card.reportsEnabler?"":"text-muted"}><span className="fa-li"><i className={props.card.reportsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.card.reports}</li>
        </ul>
        <div className="btn-style">
<button className="btn">BUTTON</button>
</div>
        </div>
    )
}
export default Card