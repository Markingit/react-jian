import React  from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'
// 无状态组件
const Header = (props) => {
    return (
        <HeaderWrapper>
        <Logo />
        <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <NavItem className="right">
                <i className="iconfont">&#xe636;</i>
            </NavItem>
            <NavItem className="right">
                登录
            </NavItem>
            <SearchWrapper>
                <CSSTransition
                    in={props.focused}
                    timeout={200}
                    classNames="slide"
                >
                    <NavSearch
                        className={props.focused ? 'focused' : ''}
                        onFocus={props.handleInputFocus}
                        onBlur = {props.handleInputBlur}
                    ></NavSearch>
                </CSSTransition>
                <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe62b;</i>
            </SearchWrapper>
            
            <Addition>
                <Button className="writting">
                    <i className="iconfont">&#xe640;</i>
                    写文章
                </Button>
                <Button className="reg">注册</Button>
            </Addition>
        </Nav>
     </HeaderWrapper>
    )
   
}



const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}

const mapDispathToProps = (dispath) => {
    return {
        handleInputFocus() {
            const action = {
                type: 'searc_focus'
            }
            dispath(action)
        },
        handleInputBlur() {
            const action = {
                type: 'searc_blur'
            }
            dispath(action)
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)