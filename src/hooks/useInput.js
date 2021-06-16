import { useCallback, useState } from 'react'

function useInput(initialState) {
  const [state, setState] = useState(initialState)
  const onChange = useCallback((e) => {
    if (!e.target) return console.warn('element not provided')

    const { name, value } = e.target

    setState((state) => ({
      ...state,
      [name]: value,
    }))
  }, [])

  const reset = useCallback(() => {
    setState(initialState)
  }, [initialState])

  return [state, onChange, reset]
}

export default useInput
