import React from 'react';
import { connect } from 'react-redux';

import {
  sortByDate,
  sortByDateReverse,
  setCategoryFilter,
  setVisualizationFilter
} from '../../../actions/filters';

export class GalleryFilters extends React.Component {
  state = {
    filter: 'default',
    category: 'default',
    visualization: 'default'
  };

  onSortChange = e => {
    this.setState({
      filter: e.target.value
    });
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'dateReverse') {
      this.props.sortByDateReverse();
    } else if (e.target.value === 'default') {
      return;
    }
  };

  onCategoryChange = e => {
    this.setState({
      category: e.target.value
    });
    if (e.target.value !== 'default') {
      this.props.setCategoryFilter(e.target.value);
    }
  };

  onVisualizationChange = e => {
    this.setState({
      visualization: e.target.value
    });
    if (e.target.value !== 'default') {
      this.props.setVisualizationFilter(e.target.value);
    }
  };

  render() {
    return (
      <div className="input-group--site">
        <div className="input-group__item--site">
          <select
            className="select--site"
            onChange={this.onSortChange}
            value={this.state.filter}
          >
            <option value="default" disabled>
              Ordenar
            </option>
            <option value="date">Mais recentes</option>
            <option value="dateReverse">Mais antigos</option>
          </select>
        </div>
        <div className="input-group__item--site">
          <select
            className="select--site"
            onChange={this.onCategoryChange}
            value={this.state.category}
          >
            <option value="default" disabled>
              Modalidade
            </option>
            <option value="thai">Muay Thai</option>
            <option value="jiujitsu">Jiu Jitsu</option>
            <option value="all">Todas</option>
          </select>
        </div>
        <div className="input-group__item--site">
          <select
            className="select--site"
            onChange={this.onVisualizationChange}
            value={this.state.visualization}
          >
            <option value="default" disabled>
              Visualizar por
            </option>
            <option value="images">Fotos</option>
            <option value="videos">Videos</option>
            <option value="all">Todos</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  sortByDate: () => dispatch(sortByDate()),
  sortByDateReverse: () => dispatch(sortByDateReverse()),
  setCategoryFilter: category => dispatch(setCategoryFilter(category)),
  setVisualizationFilter: visualization =>
    dispatch(setVisualizationFilter(visualization))
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryFilters);
