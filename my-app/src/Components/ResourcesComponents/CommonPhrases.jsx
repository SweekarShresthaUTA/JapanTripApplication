// Returns the Navbar and common phrases
// Static Page

import React from "react";
import CoreNavBar from "../NavbarComponents/CoreNavbar";
import "./Resources.css";

const CommonPhrases = () => {
  return (
    <div>
      {/* Rendering the Navbar */}
      <CoreNavBar
        title="MavsAbroadJapan"
        firstMenuTitle="Schedule"
        secondMenuTitle="Currency Exchange"
        thirdMenuTitle="Map"
        dropDownMenuTitle="Resources"
        firstDropDownMenuOption="Common Phrases"
        secondDropDownMenuOption="Landmark Lookup"
        thirdDropDownMenuOption="Cultural Information"
        fourthDropDownMenuOption="Weather"
      />
      <br />
      <div className="container body">
        <div className="row">
          <div className="col-lg-6">
          <div>
            {/* Contains common basic Japanese Phrases presented in one responsive column */}
            <h2 className="basicPhrase">
              Basic Japanese Phrases <br />
              <br />
            </h2>
            <p className="phrases">
              <span style={{ color: "blue" }}>Hai.</span> &nbsp;&nbsp; Yes.
              <br />
              はい。
              <br />
              <br />
              <span style={{ color: "blue" }}>Iie.</span> &nbsp;&nbsp; No.
              <br />
              いいえ。
              <br />
              <br />
              <span style={{ color: "blue" }}>O-negai shimasu.</span>{" "}
              &nbsp;&nbsp; Please.
              <br />
              おねがいします
              <br />
              <br />
              <span style={{ color: "blue" }}>Arigatō.</span> &nbsp;&nbsp; Thank
              You.
              <br />
              ありがとう。
              <br />
              <br />
              <span style={{ color: "blue" }}>Dōitashimashite.</span>{" "}
              &nbsp;&nbsp; You're Welcome.
              <br />
              どういたしまして。
              <br />
              <br />
              <span style={{ color: "blue" }}>Sumimasen.</span> &nbsp;&nbsp;
              Excuse me.
              <br />
              すみません。
              <br />
              <br />
              <span style={{ color: "blue" }}>Gomennasai.</span> &nbsp;&nbsp; I
              am sorry.
              <br />
              ごめんなさい。
              <br />
              <br />
              <span style={{ color: "blue" }}>Ohayō gozaimasu.</span>{" "}
              &nbsp;&nbsp; Good Morning.
              <br />
              おはようございます。
              <br />
              <br />
              <span style={{ color: "blue" }}>Konbanwa.</span> &nbsp;&nbsp; Good
              Evening.
              <br />
              こんばんは。
              <br />
              <br />
              <span style={{ color: "blue" }}>O-yasumi nasai.</span>{" "}
              &nbsp;&nbsp; Good Night.
              <br />
              おやすみなさい。
              <br />
              <br />
            </p>
          </div>
           
          </div>
          <div class="col-lg-6">
          <div>
            {/* Contains common basic Japanese Conversations presented in one responsive column */}
            <h3 className="basicConversations">
              Basic Japanese Conversations <br />
              <br />
            </h3>
            <p className="phrases">
              <span style={{ color: "green" }}>Eigo o hanasemasu ka.</span>{" "}
              &nbsp;&nbsp; Do you speak English?.
              <br />
              えいごをはなせますか。
              <br />
              <br />
              <span style={{ color: "green" }}>
                Watashi wa nihongo ga sukoshi shika hanasemasen.
              </span>{" "}
              &nbsp;&nbsp; I only speak a little Japanese.
              <br />
              わたしは　にほんごがすこししか　はなせません。
              <br />
              <br />
              <span style={{ color: "green" }}>
                O-namae wa nan desu ka.
              </span>{" "}
              &nbsp;&nbsp; What is your name?
              <br />
              おなまえはなんですか。
              <br />
              <br />
              <span style={{ color: "green" }}>
                Watashi no namae wa _____ desu.
              </span>{" "}
              &nbsp;&nbsp; My name is _____.
              <br />
              <br />
              <br />
              <span style={{ color: "green" }}>O-genki desu ka.</span>{" "}
              &nbsp;&nbsp; How are you?
              <br />
              おげんきですか。
              <br />
              <br />
              <span style={{ color: "green" }}>Genki desu.</span> &nbsp;&nbsp;
              I'm fine. Thank You.
              <br />
              げんきです。
              <br />
              <br />
              <span style={{ color: "green" }}>
                Oaidekite ureshī desu.
              </span>{" "}
              &nbsp;&nbsp; I am very glad to meet you.
              <br />
              おあいできて　うれしいです。
              <br />
              <br />
              <span style={{ color: "green" }}>Wakarimasen.</span> &nbsp;&nbsp;
              I don't understand.
              <br />
              わかりません。
              <br />
              <br />
              <span style={{ color: "green" }}>Nante iimashita ka.</span>{" "}
              &nbsp;&nbsp; What did you say?
              <br />
              なんていいましたか。
              <br />
              <br />
              <span style={{ color: "green" }}>Yoku wakarimasu.</span>{" "}
              &nbsp;&nbsp; I understand you perfectly.
              <br />
              よくわかります。
              <br />
              <br />
            </p>
          </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonPhrases;
