export const actionAddItem = (dataForm) => (
  {
    type: 'ADD_ITEM',
    newItem: {
      id: Date.now(),
      completed: false,
      title: dataForm.title,
      text: dataForm.text,
    }
  }
)

export const actionRemove = (id) => (
  { type: 'DELETE_ITEM', id }
)

export const actionCompleted = (id) => (
  { type: 'COMPLETED_ITEM', id }
)

export const actionChange = (id, dataChang) => (
  { type: 'CHANGE_ITEM', data: { dataChang, id } }
)

export const actionFilters = (eventId) => (
  { type: 'FILTERS', numberFilter: +eventId }
)
