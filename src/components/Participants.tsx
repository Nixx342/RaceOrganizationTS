// import { useDispatch, useSelector } from "react-redux";
// import { RootStore } from "../store/store";

// interface Participant {
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

const Participants: React.FC = (props) => {
  // const participants = useSelector((state: RootStore) => state.participant);
  // const dispatch = useDispatch();
  return (
    <div>
      <span>Фамилия</span>
      {props.name}
    </div>
  );
};

export default Participants;
