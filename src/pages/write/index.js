import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
class Login extends Component {
    render() {
        const { loginStatus } = this.props
        if(loginStatus){
            return (
                <div>写文章</div>
            )
        }else{
            return (<Redirect to='/login' />)
        }
    }
    
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

// const mapDispatch = (dispatch) => ({
//     login(accountEle, passwordEle) {
//         dispatch(actionCreators.login(accountEle.value, passwordEle.value))
//         console.log(accountEle.value, passwordEle.value)
//     }
// })

export default connect(mapState, )(Login)