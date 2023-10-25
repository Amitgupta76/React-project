import { gql } from '@apollo/client';

export const GET_DATA = gql`
  query GetMeassages{
    messages{
      content
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
