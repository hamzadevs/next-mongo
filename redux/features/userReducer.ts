import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export type User = {
  _id?: string;
  name: string;
  avatar: string;
  email: string;
  salary: string;
  date: string;
  status: boolean;
}

interface UserState {
  client: {toggleForm: boolean; formId?: any, deleteId: any}
  users: Array<User>
}

const initialState: UserState = {
  client: {toggleForm: false, formId: undefined, deleteId: null},
  users: []
}

export const userSlice = createSlice({
  name: 'nextjs-mongo',
  initialState,
  reducers: {
    toggleChangeAction: (state) => {
      state.client.toggleForm =! state.client.toggleForm;
    },
    updateAction: (state, action: PayloadAction<string>) => {
      state.client.formId = action.payload;
    },

    deleteAction: (state, action: PayloadAction<string>) => {
      state.client.deleteId = action.payload;
    }
  }
})

// actions
export const {toggleChangeAction, updateAction, deleteAction} = userSlice.actions 


export default userSlice.reducer
