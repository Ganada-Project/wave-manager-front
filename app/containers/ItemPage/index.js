/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { push, replace } from 'connected-react-router';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import DataTable from 'react-data-table-component';
// import {

// } from 'containers/App/selectors';

import { RoundButton, AuthedHeader } from '../../components';

import { Container, Content } from './styles';
import reducer from './reducer';
import saga from './saga';
import { makeSelectIdToken } from '../App/selectors';
import { makeSelectItemList } from './selectors';
import { getItemListAction } from './actions';

const columns = [
  {
    name: '이름',
    selector: 'name',
    sortable: true,
  },
  {
    name: '분류1',
    selector: 'category1',
    sortable: true,
  },
  {
    name: '분류2',
    selector: 'category2',
    sortable: true,
  },
  {
    name: '분류3',
    selector: 'category3',
    sortable: true,
  },
  {
    name: '판매',
    selector: 'sell',
    sortable: true,
  },
  {
    name: '평점',
    selector: 'rate',
    sortable: true,
  },
  {
    name: '시즌',
    selector: 'season',
    sortable: true,
  },
  {
    name: '가격',
    selector: 'price',
    sortable: true,
  },
];

/* eslint-disable react/prefer-stateless-function */
class ItemPage extends Component {
  componentDidMount() {
    const { replaceUrl, idToken, getItemList } = this.props;
    if (!idToken) {
      replaceUrl('/signIn');
    }
    getItemList();
  }

  routeToItemCreate = () => {
    const { pushUrl } = this.props;
    pushUrl(`${this.props.match.path}/create`);
  };

  onClickRow = state => {
    console.log(state.selectedRows);
  };

  render() {
    const { itemList } = this.props;
    const itemListJS = itemList.toJS();
    return (
      <Container>
        <Helmet>
          <title>상품</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <AuthedHeader />
        <Content>
          <RoundButton onClick={this.routeToItemCreate}>상품등록</RoundButton>
          <div>
            <DataTable
              onTableUpdate={this.onClickRow}
              onRowClicked={this.onClickRow}
              columns={columns}
              data={itemListJS}
              pagination
              selectableRows
            />
          </div>
        </Content>
      </Container>
    );
  }
}

ItemPage.propTypes = {
  pushUrl: PropTypes.func,
  idToken: PropTypes.string,
  replaceUrl: PropTypes.func,
  match: PropTypes.object,
  getItemList: PropTypes.func,
  itemList: PropTypes.instanceOf(List),
};

const mapDispatchToProps = dispatch => ({
  pushUrl: nextUrl => dispatch(push(nextUrl)),
  replaceUrl: nextUrl => dispatch(replace(nextUrl)),
  getItemList: () => dispatch(getItemListAction()),
});
const mapStateToProps = createStructuredSelector({
  idToken: makeSelectIdToken(),
  itemList: makeSelectItemList(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'item', reducer });
const withSaga = injectSaga({ key: 'item', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ItemPage);
