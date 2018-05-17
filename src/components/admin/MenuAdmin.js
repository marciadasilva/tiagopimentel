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
                <Link to="/">Tiago Pimentel</Link>
              </h3>
            </div>
            <Link
              to="/admin"
              className={classNames({ active: location.pathname === '/admin' })}
            >
              <i className="fas fa-home" /> <span>Início</span>
            </Link>
            <Link
              to="/admin/images"
              className={classNames({
                active: location.pathname === '/admin/images'
              })}
            >
              <i className="fas fa-camera" /> <span>Fotos</span>
            </Link>

            <Link
              to="/admin/videos"
              className={classNames({
                active: location.pathname === '/admin/videos'
              })}
            >
              <i className="fas fa-video" /> <span>Videos</span>
            </Link>

            <Link
              to="/admin/messages"
              className={classNames({
                active: location.pathname === '/admin/messages'
              })}
            >
              <i className="fas fa-comment-alt flip" />
              <span>Mensagens</span>
            </Link>

            <Link
              to="/admin/help"
              className={classNames({
                active: location.pathname === '/admin/help'
              })}
            >
              <i className="fas fa-question-circle" /> <span>Ajuda</span>
            </Link>
            <Link to="/login" onClick={this.props.startLogout}>
              <i className="fas fa-sign-out-alt" /> <span>Sair</span>
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
