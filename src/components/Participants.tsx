import { useState } from 'react';
import {Participant} from '../assets/types'
import { Link } from 'react-router-dom';
import '../assets/style/Participants.sass'

const Participants: React.FC<{participants : Participant[]}> = ({participants}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div>
      <div className='top-block'>
        <h1>Участники</h1>
        <button onClick={() => setIsModalOpen(true)} className="add-btn">
          Добавить
        </button>
      </div>
      {isModalOpen && (
        <div className='modal-overlay'>
        <div className='modal'>
          <button onClick={() => setIsModalOpen(false)} className="add-btn">
            Закрыть
          </button>
          <form>
            modal 
          </form>
        </div>
      </div>
      )}
      
      {
        participants.map((item:Participant, index:number) => {
          return (
            <Link 
              key={index}
              to={`/participants/${index}`}
            >
              <div >
                <span>{item.surname}</span>
              </div>
            </Link>
          )
        })
      }
    </div>
  );
};

export default Participants;
