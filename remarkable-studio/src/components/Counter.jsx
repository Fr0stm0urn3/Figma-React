import { useSelector, useDispatch } from "react-redux"
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../features/counter/counterSlice"
import { useState } from "react"
import { selectAllCounters } from "../features/counter/counterSlice"

const Counter = () => {
  const count = useSelector(selectAllCounters)
  const dispatch = useDispatch()
  const [incrementBy, setIncrementBy] = useState(0)
  const addValue = Number(incrementBy) || 0
  const resetAll = () => {
    setIncrementBy(0)
    dispatch(reset())
  }

  const handleAddValueClick = () => {
    if (addValue) {
      dispatch(incrementByAmount(addValue))
      setIncrementBy(0)
    } else {
      setIncrementBy(0)
    }
  }

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <input
        type="text"
        value={incrementBy}
        onChange={(e) => setIncrementBy(e.target.value)}
      />
      <div>
        <button onClick={handleAddValueClick}>Add Value</button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  )
}

export default Counter
