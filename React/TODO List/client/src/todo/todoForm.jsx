import  React, {Component} from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import {handleChange, search, add, clear} from './todoActions'


class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this);
    }

    keyHandler (e) {
        const { add, search, description, clear } = this.props 

        if(e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if(e.key === "Escape") {
            clear()
        }
    }

    componentWillMount() {
        this.props.search();
    }

    render() {
        const { add, search, description, clear } = this.props 
        return (
            <div role='form' className='todoForm'>
                
                <Grid cols="12 9 10">
                    <input  id="description" className="form-control" 
                    placeholder="adicione uma tarefa" value={this.props.description} onChange={this.props.handleChange}
                    onKeyDown={this.keyHandler}/>
                </Grid>

                <Grid cols="12 3 2">
                    <IconButton style="primary" show={true} icon="plus" onClick={() => add(description)}/>
                    <IconButton style="info" show={true} icon="search" onClick={search}/>
                    <IconButton style="default" show={true} icon="close" onClick={()=> clear()}/>
                </Grid>    
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({handleChange, search, add, clear}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);