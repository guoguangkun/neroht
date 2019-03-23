/**
 * Author: Zhou Ht
 * Date: 2018/12/6 0006
 * Time: 23:13
 *
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import './style/index.less'
import headerStyles from './style/index.less'
import withStyle from '../../utils/withStyle'

class Header extends React.Component {
    state = {
        current: '/',
    }

    componentDidMount() {
        this.setState({
            current: window.location.pathname
        });
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
      window.removeEventListener('scroll')
    }
    handleScroll = () => {
      if (window.scrollY > 570) {
          this.refs.header.style.background = "#160e0f";
      }else{
        this.refs.header.style.background = "rgba(22,14,15,0)";
      }
    }
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (<div id="header">
            <div className="header-height"></div>
            <div className="header-fixed" ref="header">
                <div className="header-inner">
                    <div className="logo">
                        <span className="icon-logo"></span>
                    </div>
                    <div className="menu">
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
{/*                            <Menu.Item key="/">
                                <Link to='/'>首页</Link>
                            </Menu.Item>*/}
                            <Menu.Item key="/">
                                <Link to='/'>文字</Link>
                            </Menu.Item>
                          <Menu.Item key="/work">
                            <Link to='/work'>作品</Link>
                          </Menu.Item>

                            {/*
                            <Menu.Item key="/about">
                                <Link to='/about'>关于</Link>
                            </Menu.Item>
*/}
                        </Menu>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default withStyle(Header, headerStyles)
