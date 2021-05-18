import Clock from './Clock';

import "../../style/css/worldClocks.css";

function WorldClocks() {
  return (
    <div id="world-clock-container">
      <Clock timezone="Canada/Saskatchewan" region="Saskatoon"/>
      <Clock timezone="Canada/Eastern" region="Toronto"/>
      <Clock timezone="Canada/Newfoundland" region="St. John's"/>
    </div>
  );
}

export default WorldClocks;