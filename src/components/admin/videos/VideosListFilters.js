import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import {
  setTextFilter,
  sortByDate,
  sortByCategory
} from '../../../actions/filters';

export class VideosListFilters extends React.Component {
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = e => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'category') {
      this.props.sortByCategory();
    }
  };
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder="Pesquisar"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Data</option>
              <option value="category">Modalidade</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByCategory: () => dispatch(sortByCategory())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideosListFilters);
