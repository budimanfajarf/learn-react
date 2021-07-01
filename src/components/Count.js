const Count = ({countParent, setCountParent}) => {
  return (
    <p>
      You clicked {countParent} times
      <button
        onClick={() => setCountParent(countParent-1) }
      >
        Child minus
      </button>
    </p>
  )
}

export default Count