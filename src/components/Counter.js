import { useState } from "react"
import Count from './Count'

const Counter = () => {
  const [count, setCount] = useState(0)
  // const [anotherCounter, setAnotherCounter] = useState(0)

  return (
    <div>
      {/* <p>You clicked {count} times</p> */}
      {/* <p>You clicked {anotherCounter}/2 times</p> */}

      <Count
        countParent={count}
        setCountParent={setCount}
      />

      <button
        onClick={() => {
          setCount(count + 1)
          // setAnotherCounter(anotherCounter + 2)
        }}
      >
        Click me
      </button>

    </div>
  )
}

export default Counter