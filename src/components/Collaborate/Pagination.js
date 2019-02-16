import React, { Component } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { UserConsumer } from '../../context';
import 'bootstrap/dist/css/bootstrap.min.css';
import { device } from '../../theme/Device';

export default class Pagination extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      pageCount: 3,
    }
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);

    this.setState({ offset: offset }, () => {
      this.getVLoggers(offset, this.props.perPage);
    });
  };

  componentDidMount() {
    let result = this.context.getVLoggers(this.state.offset, this.props.perPage);
    this.setState( { pageCount: Math.ceil(result.meta.totalCount / result.meta.limit)});

  }

  render() {
    return (
      <UserConsumer>
        {
          (value) => {
            return (
              <PaginationWrapper>
                <ReactPaginate
                  previousLabel={'<'}
                  nextLabel={'>'}
                  pageCount={this.state.pageCount}
                  onPageChange={(data) => {
                    let selected = data.selected
                    let offset = Math.ceil(selected * this.props.perPage);

                    this.setState({ offset: offset }, () => {
                      let result = value.getVLoggers(offset, this.props.perPage);
                      this.setState( { pageCount: Math.ceil(result.meta.totalCount / result.meta.limit)});
                    });
                  }}
                  containerClassName={'pagination'}
                  subContainerClassName={'pages pagination'}
                  activeClassName={'active'}
                />
              </PaginationWrapper>
            )
          }
        }
      </UserConsumer>
    )
  }
}

Pagination.contextType = UserConsumer;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 4%;
  height: 110px;

  @media ${device.mobileS} {
    justify-content: center;
  }

  @media ${device.mobileM} {
    justify-content: center;
  }

  @media ${device.mobileL} {
    justify-content: center;
  }

  @media ${device.tablet} {
    justify-content: flex-end;
  }

  ul {
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
  }

  li {
      display: inline-block;
  }

  .pagination {
    height: 12 * 2;
    margin: 10 0;

    @media ${device.mobileS} {
      margin: 0 ;
    }

    @media ${device.mobileM} {
      margin: 0;
    }

    @media ${device.mobileL} {
      margin: 10 0;
    }

    @media ${device.tablet} {
      margin: 10 0;
    }
  }

  .pagination ul {
    display: inline-block;
    .ie7-inline-block();
    margin-left: 0;
    margin-bottom: 0;
    .border-radius(3px);
    .box-shadow(0 1px 2px rgba(0,0,0,.05));
  }

  .pagination li {
    display: inline;
  }

  .pagination a {
    float: left;
    padding: 0 10px;
    line-height: (10 * 2) - 2;
    text-decoration: none;
    border-left-width: 0;
    height: 32px;
    width: 32px;
    cursor: pointer;
    margin: 0 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 0;
    color: grey;

    @media ${device.mobileS} {
      width: 22px;
    }

    @media ${device.mobileM} {
      width: 22px;
    }
  
    @media ${device.mobileL} {
      width: 32px;
    }
  }

  .pagination a:hover,
  .pagination .active a {
    text-decoration: none;
    background-color: #f5f5f5;
  }

  .pagination .active a {
    color: green;
    border: solid 1px var(--selectedGreen);
    background-color: var(--selectedGreen);
    color: white;
    border-radius: 4px;
  }

  .pagination .disabled span,
  .pagination .disabled a,
  .pagination .disabled a:hover {
    color: grey;
    background-color: transparent;
    cursor: default;
  }

  .pagination li:first-child a {
    border-left-width: 1px;
    .border-radius(3px 0 0 3px);
  }

  .pagination li:last-child a {
    .border-radius(0 3px 3px 0);
  }

  // Centered
  .pagination-centered {
    text-align: center;
  }

  .pagination-right {
    text-align: right;
  }

`;
