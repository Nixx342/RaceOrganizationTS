import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type {Participant} from '../assets/types'
interface ParticipantsState {
    // participants : Participant[] | null;
    participants : Participant[];
}
const initialState: ParticipantsState = {
    participants : [
        {
          surname: "Иванов",
          name: "Петр",
          middleName: "Иванович",
          city: "Пермь",
          birthday: "1990-01-01",
          email: "ivan@gmail.com",
          phone: "+7(999)555-35-35",
          distance: 5,
          hasPayment: true,
        },
        {
          surname: "Константинопольский",
          name: "Константин",
          middleName: "Константинович",
          city: "Александровск-Сахалинский",
          birthday: "1985-02-15",
          email: "konstantinopolskiy@gmail.com",
          phone: "+7(912)345-67-89",
          distance: 10,
          hasPayment: true,
        },
        {
          surname: "Чернова",
          name: "Анастасия",
          middleName: "Витальевна",
          city: "Санкт-Петербург",
          birthday: "1999-10-22",
          email: "nastya123@ya.ru",
          phone: "+7(937)465-70-33",
          distance: 3,
          hasPayment: false,
        },
      ]
}

export const participantsSlice = createSlice({
    name: 'participants',
    initialState,
    reducers: {
        addParticipant: (state, action) => {
            state.participants.push(action.payload);
        },
        removeParticipant: (state, action: PayloadAction<string>) => {
            state.participants = state.participants.filter((item) => item.email !== action.payload);
        },
        changeParticipant: (state, action: PayloadAction<Participant>) => {
            const index = state.participants.findIndex((item) => item.email === action.payload.email);
            if (index !== -1){
                state.participants[index] = {...state.participants[index], ...action.payload};
            }   
        }
    }
})

export const {addParticipant, removeParticipant, changeParticipant} = participantsSlice.actions
export default participantsSlice.reducer