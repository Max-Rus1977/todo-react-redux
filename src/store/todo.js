const defaultState = {
  arrItemsData: [
    { id: 1, completed: false, title: 'Первый Заголовок', text: 'Первый текст задачи' },
    { id: 2, completed: false, title: 'Второй заголовок', text: 'Второй текст задачи' },
    { id: 3, completed: true, title: 'Добавочный заголовок', text: 'Добавочный текст задачи' },
    { id: 4, completed: false, title: 'Третий заголовок', text: 'Третий текст задачи' },
    { id: 5, completed: true, title: 'Четвёртый заголовок', text: 'Четвёртый текст задачи' },
  ]
}

export const todoReducer = (state = defaultState, action) => {

  // console.log('action >>>', action);

  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, arrItemsData: [...state.arrItemsData, { ...action.newItem }] }
    case 'DELETE_ITEM':
      return { ...state, arrItemsData: [...state.arrItemsData.filter((item) => item.id !== action.id)] }
    case 'COMPLETED_ITEM':
      return { ...state, arrItemsData: [...state.arrItemsData[index].completed = isCompleted] }

    default:
      return state
  }
}
