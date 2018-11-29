import React from 'react'
import { bindActionCreators } from 'redux'
import { connect} from 'react-redux'
import {inc, dec, stepChanged} from './counterActions'

const Counter = (props) =>( 
    <div>
        <input value={props.counter.step} onChange={props.stepChanged} type='number'/>
        <br/>
        <button onClick={props.dec}>-</button>
        <button onClick={props.inc}>+</button>
        <br/>
        <label htmlFor="">{ props.counter.number }</label>

    </div>
)


const mapStateToProps = state => ({ counter: state.counter })
const mapDispatchToProps = dispatch => bindActionCreators({inc,dec,stepChanged}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)