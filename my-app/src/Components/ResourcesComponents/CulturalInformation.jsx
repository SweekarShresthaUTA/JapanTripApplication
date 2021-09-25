import React from "react";
import CoreNavBar from "../NavbarComponents/CoreNavbar";

const CulturalInformation = () => {
    return (
        <div>
            <CoreNavBar
                title="MavsAbroad"
                firstMenuTitle="Contacts"
                secondMenuTitle="Schedule"
                thirdMenuTitle="Currency Exchange"
                dropDownMenuTitle="Resources"
                firstDropDownMenuOption="Common Phrases"
                secondDropDownMenuOption="Landmark Lookup"
                thirdDropDownMenuOption="Cultural Information"
            />
            <h1>cultural Information</h1>
        </div>
    );
}

export default CulturalInformation;
