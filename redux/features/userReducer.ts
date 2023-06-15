import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {RootState} from "hooks"

type User = {
  id: string;
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
    updateAction: (state, action) => {
      state.client.formId = action.payload;
    },

    deleteAction: (state, action) => {
      state.client.deleteId = action.payload;
    },
    addUser: (state, action: PayloadAction<User>) => {
      const user = action.payload;
      state.users.push(user)
    },
    removeUser: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const users = state.users.filter((user) => user.id !== id);
      state.users = users;
    }
  }
})

// actions
export const {toggleChangeAction, updateAction, deleteAction} = userSlice.actions 

// selectors
export const selectUsers = (state: RootState) => state.users.users

export default userSlice.reducer