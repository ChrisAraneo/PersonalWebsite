import React from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

class Nav extends React.Component {

    state = {
        open: false
    }

    handleClick() {
        this.setState({ open: !this.state.open })
    }

    renderMobile() {
        return (
            <>
                <div className={`navbar ${this.state.open ? 'active' : ''}`} onClick={() => this.handleClick()}></div>
                <div className={`menu-button ${this.state.open ? 'active' : ''}`}>
                    <div className="burger" onClick={() => this.handleClick()}></div>
                </div>
                <CSSTransition
                    in={this.state.open}
                    timeout={500}
                    classNames="navlink"
                    unmountOnExit>
                    <nav className={`navigation-mobile ${this.state.open ? 'active' : ''}`}>
                        {
                            this.props.routes.map(route => (
                                <NavLink
                                    key={route.path}
                                    to={route.path}
                                    className="navlink"
                                    activeClassName="active"
                                    onClick={() => this.handleClick()}
                                >
                                    {route.name}
                                </NavLink>
                            ))
                        }
                    </nav>
                </CSSTransition>
            </>
        );
    }

    renderDesktop() {
        return (
            <nav className='navigation'>
                {this.props.routes.map(route => (
                    <NavLink
                        key={route.path}
                        to={route.path}
                        activeClassName="active"
                    >
                        {route.name}
                    </NavLink>
                ))}
            </nav>);
    }

    render() {
        if (this.props.mobile) {
            return this.renderMobile();
        } else {
            return this.renderDesktop();
        }
    }
}

export default Nav;