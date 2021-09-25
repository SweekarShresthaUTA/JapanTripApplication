import React from "react";
import CoreNavBar from "../NavbarComponents/CoreNavbar";

const Schedule = () => {
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
            <h1>Schedule</h1>

            <img src="9-13-page-000.jpg" width="550" height="700" alt="Tokyo"></img>
            <br/>

            <img src="9-13-page-001.jpg" width="550" height="700" alt="Tokyo"></img>
            <br/>

            <img src="9-13-page-002.jpg" width="550" height="700" alt="Tokyo"></img>
            <br/>

            <img src="9-13-page-003.jpg" width="550" height="700" alt="Tokyo"></img>
            <br/>

            <img src="9-13-page-004.jpg" width="550" height="700" alt="Tokyo"></img>
            <br/>
            
            <img src="9-13-page-005.jpg" width="550" height="700" alt="Tokyo"></img>
            
        </div>
    );
}

export default Schedule;
