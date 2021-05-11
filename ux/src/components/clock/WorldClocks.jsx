import Clock from './Clock';

function WorldClocks() {
  return (
    <div className="world-clock-container">
      <Clock timezone="Canada/Saskatchewan" region="Saskatoon"/>
      <Clock timezone="Canada/Eastern" region="Toronto"/>
      <Clock timezone="Canada/Newfoundland" region="St. John's"/>
    </div>
  );
}

export default WorldClocks;