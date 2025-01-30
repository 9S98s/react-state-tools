import { useCountStore } from "./store/count";

export default function App() {
  const count = useCountStore(state => state.count)
  const increase = useCountStore(state => state.increase)
  const decrease = useCountStore(state => state.decrease)

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  )
}