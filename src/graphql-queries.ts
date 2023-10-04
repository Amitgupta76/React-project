import { gql } from '@apollo/client';

export const GET_DATA = gql`
  query {
    Message {
      id
      conversation
    }
  }
`;

export const ADD_DATA = gql`
  mutation AddData($data: String!) {
    addData(input: { data: $data }) {
      id
      conversation
    }
  }
`;
