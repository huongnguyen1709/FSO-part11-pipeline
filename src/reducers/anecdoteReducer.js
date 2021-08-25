import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT_ANECDOTES':
    // eslint-disable-next-line no-case-declarations
    const anecdotes = action.data
    anecdotes.sort((a, b) => (a.votes > b.votes ? -1 : 1))
    return [...anecdotes]
  case 'VOTE_ANECDOTE':
    state.find((anec) => anec.id === action.id).votes++
    return [...state]
  case 'NEW_ANECDOTE':
    return [...state, action.data]

  default:
    return state
  }
}

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export const voteAnec = (anecdote) => {
  return async (dispatch) => {
    await anecdoteService.updateVotes(anecdote)
    dispatch({
      type: 'VOTE_ANECDOTE',
      id: anecdote.id,
    })
  }
}

export const createAnec = (content) => {
  return async (dispatch) => {
    const newAnec = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnec,
    })
  }
}

export default reducer
