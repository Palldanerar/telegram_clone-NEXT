import { create } from "zustand";

interface selectedUserState {
    selectedUser: undefined | any;
    setSelectedUser: (user: any) => void;
}

interface userState {
    myUser: undefined | any;
    setUser: (user: any) => void;
}

export const useUser = create<userState>((set) => ({
    myUser: undefined,
    setUser: (user) => set({ myUser: user }),
}))

export const useAllUsers = create((set) => ({
    users: undefined,
    setUsers: (users: any) => set({ users }),
}))

export const useSelectedUser = create<selectedUserState>((set) => ({
    selectedUser: undefined,
    setSelectedUser: (user) => set({ selectedUser: user })
}))

export const useMessages = create((set) => ({
    message: undefined,
    setMessages: (messages: any) => set({ messages })
}))