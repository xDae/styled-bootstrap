// @flow

import styled, { css } from 'styled-components';

import ListGroupItem from './ListGroupItem';
import ListGroupButton from './ListGroupButton';
import ListGroupLink from './ListGroupLink';

const ListGroup = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;

  ${({ flush }) =>
    flush &&
    css`
      ${ListGroupItem} {
        border-right: 0;
        border-left: 0;
        border-radius: 0;
      }

      &:first-child {
        ${ListGroupItem}:first-child {
          border-top: 0;
        }
      }

      ${ListGroupItem}:last-child {
        border-bottom: 0 !important;
      }
    `};
`;

ListGroup.Item = ListGroupItem;
ListGroup.Button = ListGroupButton;
ListGroup.Link = ListGroupLink;

export default ListGroup;
