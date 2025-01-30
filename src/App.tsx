import { useCountStore } from "./store/count";

export default function App() {
  const count = useCountStore(state => state.count)
  const { increase, decrease } = useCountStore(state => state.actions)

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  )
}