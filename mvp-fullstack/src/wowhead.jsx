import {React, useEffect} from "react";
import {Helmet} from "react-helmet"
export default function WowHead(){
    return (
        <>
        <Helmet>
            <script dangerouslySetInnerHTML={{whTooltips : {"colorLinks": true, "iconizeLinks": true, "iconSize": true, "renameLinks": true, "dropchance": true}}}></script>
            <script src="https://wow.zamimg.com/js/tooltips.js"></script>
        </Helmet>
        </>
    )}
{/* <script>const whTooltips = {"colorLinks": true, "iconizeLinks": true, "iconSize": true, "renameLinks": true, "dropchance": true};</script> 
        <script src="https://wow.zamimg.com/js/tooltips.js"></script>*/}