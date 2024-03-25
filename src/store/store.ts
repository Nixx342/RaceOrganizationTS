import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Participant {
  surname: string;
  name: string;
  middleName: string;
  city: string;
  birthday: string;
  email: string;
  phone: string;
  distance: number;
  hasPayment: boolean;
}

interface ParticipantState {
  participants: Participant[];
}

const initialState: ParticipantState = {
  participants: [
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
  ],
};

const participantsSlice = createSlice({
  name: "participants",
  initialState,
  reducers: {
    addParticipant(state, action: PayloadAction<Participant>) {
      state.participants.push(action.payload);
    },
    updateParticipant(state, action: PayloadAction<Participant>) {
      const { email, ...updateParticipant } = action.payload;
      const oldParticipant = state.participants.find((p) => p.email === email);
      if (oldParticipant) {
        Object.assign(oldParticipant, updateParticipant);
      }
    },
    removeParticipant(state, action: PayloadAction<string>) {
      state.participants = state.participants.filter(
        (p) => p.email !== action.payload
      );
    },
  },
});

export const { addParticipant, updateParticipant, removeParticipant } =
  participantsSlice.actions;

// export default participantsSlice.reducer;
export default configureStore ({
    reducer: {
        participants: participantsSlice.reducer
    }
})
