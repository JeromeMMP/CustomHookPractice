import {useState} from 'react'

function useFlip ( initialValue = true) { 
  const [isFacingUp, setIsFacingUp] = useState(initialValue);
  const flipCard = () => { 
    setIsFacingUp(isUp => !isUp);
  }
 return [isFacingUp, flipCard]
}

export default useFlip