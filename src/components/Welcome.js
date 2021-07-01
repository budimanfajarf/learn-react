const Welcome = ({name = 'guest', children}) => {
  return (
    <p>
      Welcome to React {name} <br/>
      {children}
    </p>
  )
}

export default Welcome