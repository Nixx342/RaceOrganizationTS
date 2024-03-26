import {Participant} from '../assets/types'

// interface ParticipantProps {
//   surname: string;
//   name: string;
//   middleName: string;
//   city: string;
//   birthday: string;
//   email: string;
//   phone: string;
//   distance: number;
//   hasPayment: boolean;
// }

const Participants: React.FC<Participant[]> = (props) => {

  return (
    <div>
      <h1>Участники</h1>
      {
        props.participants.map((item:Participant, index:number) => {
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
