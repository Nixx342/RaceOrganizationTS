import { useState } from "react";
import { Participant } from "../assets/types";
import { Link } from "react-router-dom";
import "../assets/style/Participants.sass";
import { useDispatch, useSelector } from "react-redux";
import { addParticipant } from "../features/participantsSlice";
import { RootState } from "@reduxjs/toolkit/query";

// const Participants: React.FC<{ participants: Participant[] }> = ({participants}) => {
const Participants: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newParticipant, setNewParticipant] = useState<Participant>({
    surname: "",
    name: "",
    middleName: "",
    city: "",
    birthday: "",
    email: "",
    phone: "",
    distance: 0,
    hasPayment: false,
  });
  const dispatch = useDispatch();
  const participants = useSelector((state:RootState) => state.participants.participants);
  const handleAddParticipant = () => {
    dispatch(addParticipant(newParticipant));
    setNewParticipant({
      surname: "",
      name: "",
      middleName: "",
      city: "",
      birthday: "",
      email: "",
      phone: "",
      distance: 0,
      hasPayment: false,
    });
  };

  return (
    <div>
      <div className="top-block">
        <h1>Участники</h1>
        <button onClick={() => setIsModalOpen(true)} className="add-btn">
          Добавить
        </button>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button onClick={() => setIsModalOpen(false)} className="add-btn">
              Закрыть
            </button>
            <button
              onClick={() => {
                setIsModalOpen(false);
                handleAddParticipant();
              }}
              className="add-btn"
            >
              Сохранить
            </button>
            <form>modal</form>
          </div>
        </div>
      )}

      {participants.map((item: Participant, index: number) => {
        return (
          <Link key={index} to={`/participants/${index}`}>
            <div>
              <span>{item.surname}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Participants;
