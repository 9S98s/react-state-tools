import { create } from 'zustand'

export const useCountStore = create<{
  count: number
  increase: () => void
  decrease: () => void
}>(set => ({
  count: 1,
  increase: () => set(state => ({ count: state.count + 1 })),
  decrease: () => set(state => ({ count: state.count - 1 }))
}))