import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import {remove,markAsPending, markAsDone} from './todoActions'
const TodoList = props => {
    
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id} className={todo.done ? 'markedAsDone' : ''}>
                 <td>{todo.description}</td> 
                <td> 
                  <IconButton style="success" icon="check" show={!todo.done} onClick={() => {props.markAsDone(todo)} }></IconButton>
                  <IconButton style="warning" icon="undo" show={todo.done} onClick={() => {props.markAsPending(todo)} }></IconButton>
                  <IconButton style="danger" icon="trash-o" show={true} onClick={() => {props.remove(todo)} }></IconButton>
                </td>  
            </tr>
        ))
    }

    return (
        <Grid cols="12 12 12 12">
            <table className='table'>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th className="tableActions">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </Grid>
    )

}

const mapStateToProps = (state) => ({
  list: state.todo.list
})

const mapDispatchToProps = dispatch => bindActionCreators({remove,markAsPending, markAsDone}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

