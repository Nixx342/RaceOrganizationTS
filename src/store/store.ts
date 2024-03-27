import { configureStore } from '@reduxjs/toolkit'
import participantsSlice from '../features/participantsSlice'

export const store = configureStore({
    reducer: {
        participants: participantsSlice,
    }
})

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch