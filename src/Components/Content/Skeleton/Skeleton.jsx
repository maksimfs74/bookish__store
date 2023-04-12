import React from "react"
import ContentLoader from "react-content-loader";
import s from './Skeleton.module.scss';

const Skeleton = (props) => (
  <ContentLoader className={s.skeleton}
    speed={2}
    width={480}
    height={400}
    viewBox="0 0 480 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="665" cy="940" r="8" /> 
    <rect x="680" y="935" rx="5" ry="5" width="220" height="10" /> 
    <circle cx="523" cy="427" r="8" /> 
    <rect x="538" y="422" rx="5" ry="5" width="220" height="10" /> 
    <circle cx="569" cy="853" r="8" /> 
    <rect x="584" y="848" rx="5" ry="5" width="220" height="10" /> 
    <circle cx="569" cy="883" r="8" /> 
    <rect x="584" y="878" rx="5" ry="5" width="220" height="10" /> 
    <rect x="517" y="455" rx="0" ry="0" width="200" height="45" /> 
    <rect x="494" y="453" rx="0" ry="0" width="238" height="32" /> 
    <rect x="97" y="319" rx="0" ry="0" width="1" height="0" /> 
    <rect x="23" y="385" rx="0" ry="0" width="0" height="18" /> 
    <rect x="151" y="371" rx="0" ry="0" width="1" height="8" /> 
    <rect x="145" y="371" rx="0" ry="0" width="0" height="1" /> 
    <rect x="131" y="366" rx="0" ry="0" width="3" height="1" /> 
    <rect x="101" y="-10" rx="0" ry="0" width="397" height="317" /> 
    <rect x="116" y="338" rx="0" ry="0" width="340" height="27" /> 
    <rect x="122" y="399" rx="0" ry="0" width="335" height="27" /> 
    <rect x="221" y="463" rx="0" ry="0" width="144" height="47" />
  </ContentLoader>
)

export default Skeleton;