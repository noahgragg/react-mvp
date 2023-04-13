import React from "react"
import Buttons from "./Buttons"
const Equipment = (props) => {
    return (
        <div id='Equipment' >
            {/* EQUIPMENT */}
            <div id='EquipmentSlots'>
             <div id='EquipmentSlotsLeft'>
             <div id='Head' class='EquipmentSlots'>Head</div>
             <div id='Neck' class='EquipmentSlots'>Neck</div>
             <div id='Shoulders' class='EquipmentSlots'>Shoulders</div>
             <div id='Back' class='EquipmentSlots'>Back</div>
             <div id='Chest' class='EquipmentSlots'>Chest</div>
             <div id='Bracers' class='EquipmentSlots'>Bracers</div>
             </div>
             <div id='EquipmentSlotBottom'>
             <div id='MainHand' class='EquipmentSlots'>MH</div>
             <div id='OffHand' class='EquipmentSlots'>OH</div>
             </div>
             <div id='EquipmentSlotsRight'>
             <div id='Gloves' class='EquipmentSlots'>Gloves</div>
             <div id='Belt' class='EquipmentSlots'>Belt</div>
             <div id='Legs' class='EquipmentSlots'>Legs</div>
             <div id='Feet' class='EquipmentSlots'>Feet</div>
             <div id='Ring1' class='EquipmentSlots'>Ring1</div>
             <div id='Ring2' class='EquipmentSlots'>Ring2</div>
             <div id='Trinket1' class='EquipmentSlots'>Trink1</div>
             <div id='Trinket2' class='EquipmentSlots'>Trink2</div>
            </div>
            </div>
        </div>
    )
}
export default Equipment