import {Participant} from '../assets/types'

const Participants: React.FC<{participants : Participant[]}> = ({participants}) => {

  return (
    <div>
      <h1>Участники</h1>
      {
        participants.map((item:Participant, index:number) => {
          return (
            <div key={index}>
              <span>{item.surname}</span>
            </div>
          )
        })
      }
    </div>
  );
};

export default Participants;
