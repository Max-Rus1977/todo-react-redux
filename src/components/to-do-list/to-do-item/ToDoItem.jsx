import ContentItem from './ContentItem'
import MyInput from '../../../UI/MyInput'
import MyButton from '../../../UI/MyButton'

const ToDoItem = () => {


  return (
    <div className='box-todo completed'>
      <div className="content-item">
        {
          /* showFormChanges
            ? <>
              <MyInput autoFocus onChange={changeTitle} value={dataChanges.title} />
              <MyInput onChange={changeText} value={dataChanges.text} />
            </>
            :  */<ContentItem /* index={index} dataItem={dataItem} */ />
        }
        <p>ID задачи: {0}</p>
      </div>
      <div className="actions">
        <MyButton
          className='btn-comped '
        // onClick={}
        >
          ✓
        </MyButton>
        <MyButton className='btn-patch' /* onClick={getChangeItem} */>⚒</MyButton>
        <MyButton className='btn-delete' /* onClick={removeItem} */>✖</MyButton>
      </div>
    </div>
  )
}

export default ToDoItem