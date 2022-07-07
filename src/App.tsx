import React from "react";
import "./App.scss";
import { VRTour } from "components/vr-tour";
import { Header } from "components/header";
import { Gallary } from "components/gallary";
import Copy from "components/footer";
import { News } from "components/news";
function App() {
  return (
    <div className="app bg-bg-cl">
      <Header />;
      <VRTour />
      <News />
      <Gallary />
      <Copy content="Copyright © 2022 Sgallery. All rights reserved" />
    </div>
  );
}

export default App;
