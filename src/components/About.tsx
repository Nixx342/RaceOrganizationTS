import "../assets/style/About.sass";

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="main-block">
        <h1 className="name-page">
          ЗАРЯЖАЙ <span className="text-orange">БЕГ</span>ОМ
        </h1>
        <p className="size-1d5em">
          ВОСЬМОЙ ВСЕРОССИЙСКИЙ ПОЛУМАРАФОН С <br />
          СИНХРОННЫМ СТАРТОМ
        </p>
        <div className="main-block-img">
          {" "}
          СЕГОДНЯ ЭТО УЖЕ НЕ ПРОСТО <br />
          ПОЛУМАРАФОН — ЭТО МЕЖДУНАРОДНЫЙ
          <br />
          ЛЕГКОАТЛЕТИЧЕСКИЙ ПРАЗДНИК
        </div>
        <div className="ticker">
          <div className="ticker-content">
            <div className="ticker-item">
              <p>
                <span className="text-orange">90 </span>
                городов
              </p>
            </div>
            <div className="ticker-item">
              <p>
                <span className="text-blue">11 </span>
                часовых поясов
              </p>
            </div>
            <div className="ticker-item">
              <p>
                <span className="text-orange">165 000 </span>
                участников
              </p>
            </div>
            <div className="ticker-item">
              <p>
                <span className="text-blue">1 100 000 </span>
                зрителей
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
