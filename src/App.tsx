import "./assets/style/App.sass";
import Participants from "./components/Participants";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About";
import NotFound from "./components/NotFound";
import {Participant} from './assets/types'
import { Provider } from "react-redux";
import {store} from './store/store'
import ParticipantPage from "./components/ParticipantPage";

const participants: Participant[] = [
  {
    "surname": "Иванов",
    "name": "Петр",
    "middleName": "Иванович",
    "city": "Пермь",
    "birthday": "1990-01-01",
    "email": "ivan@gmail.com",
    "phone": "+79995553535",
    "distance": 5,
    "hasPayment": true
  },
  {
    "surname": "Константинопольский",
    "name": "Константин",
    "middleName": "Константинович",
    "city": "Александровск-Сахалинский",
    "birthday": "1985-02-15",
    "email": "konstantinopolskiy@gmail.com",
    "phone": "+79123456789",
    "distance": 10,
    "hasPayment": true
  },
  {
    "surname": "Чернова",
    "name": "Анастасия",
    "middleName": "Витальевна",
    "city": "Санкт-Петербург",
    "birthday": "1999-10-22",
    "email": "nastya123@ya.ru",
    "phone": "+79374657033",
    "distance": 3,
    "hasPayment": false
  }
]

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <header>
        <nav>
          <Link to={"/about"} className="link-btn">Информация о забеге</Link>
          <Link to={"/participants"}>Участники</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to={"/about"} />} />
        <Route path="/about" element={<About />} />
        <Route path="/participants" element={<Participants />} />
        {/* <Route path="/participants" element={<Participants participants={participants}/>} /> */}
        <Route path="/participants/:id" element={<ParticipantPage participants={participants}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
};

export default App;
