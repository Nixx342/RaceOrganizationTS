import React from "react";
import { Participant } from "../assets/types";
import { useParams } from "react-router-dom";

const ParticipantPage: React.FC<{ participants: Participant[] }> = ({
  participants,
}) => {
  const { id } = useParams();
  const participantId = parseInt(id as string, 10);
  const participant = participants.find((p, index) => index === participantId);

  //   if (participantId >= 0 && participantId < participants.length) {
  //     const  participant = participants[participantId]
  //     return (
  //       <div>
  //         <h1>{participant.name}</h1>
  //         <div></div>
  //       </div>
  //     );
  //   } else {
  //     return <div>Участник не найден!</div>;
  //   }
  // }
  // console.log(typeof(participantId) === 'number')
  // console.log(participantId)
  // if (!participant) {
  //   return <div>Участник не найден!</div>;
  // }
  //

  if (!isNaN(participantId) && id === participantId.toString() && participant) {
    return (
      <div>
        <h1>{participant.name}</h1>
        <div></div>
      </div>
    );
  } else {
    return <div>Участник не найден!</div>;
  }
};

export default ParticipantPage;
