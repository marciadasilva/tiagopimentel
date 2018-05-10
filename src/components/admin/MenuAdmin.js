import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { startLogout } from '../../actions/auth';

export class MenuAdmin extends React.Component {
  render() {
    return (
      <aside className="dashboard__menu">
        <div className="menu">
          <div className="menu__items">
            <div className="menu__header">
              <h3 className="menu__title">
                <Link to="/">Company Name</Link>
              </h3>
              <div className="menu_header--user">
                <Link to="/admin/company">
                  <img
                    className="button__image"
                    src={'/images/default-user.png'}
                  />
                </Link>
                <span>Tiago</span>
              </div>
            </div>
            <Link
              to="/admin"
              className={classNames({ active: location.pathname === '/admin' })}
            >
              <i className="fas fa-home" /> <span>Home</span>
            </Link>
            <Link
              to="/admin/category"
              className={classNames({
                active: location.pathname === '/admin/category'
              })}
            >
              <i className="far fa-list-alt" /> <span>Categories</span>
            </Link>
            <Link
              to="/admin/product"
              className={classNames({
                active: location.pathname === '/admin/product'
              })}
            >
              <i className="far fa-list-alt" /> <span>Products</span>
            </Link>

            <Link
              to="/admin/messages"
              className={classNames({
                active: location.pathname === '/admin/messages'
              })}
            >
              <i className="fas fa-comment-alt flip" />
              <span>Messages</span>
            </Link>
          </div>
          <div className="menu__items">
            <Link
              to="/admin/help"
              className={classNames({
                active: location.pathname === '/admin/help'
              })}
            >
              <i className="fas fa-question-circle" /> <span>Help</span>
            </Link>
            <Link to="/login" onClick={this.props.startLogout}>
              <i className="fas fa-sign-out-alt" /> <span>Logout</span>
            </Link>
          </div>
        </div>
      </aside>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(null, mapDispatchToProps)(MenuAdmin);
