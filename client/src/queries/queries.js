import { gql } from "apollo-boost";

const getCarsQuery = gql`
  {
    cars {
      name
      _id
    }
  }
`;

const getOwnersQuery = gql`
  {
    owners {
      name
      _id
    }
  }
`;

const AddCarMutation = gql`
  mutation($name: String!, $model: Int!, $company: String!, $ownerId: ID!) {
    addCar(name: $name, model: $model, company: $company, ownerId: $ownerId) {
      name
      _id
    }
  }
`;

const getCarQuery = gql`
  query($_id: ID!) {
    car(_id: $_id) {
      _id
      name
      model
      company
      owner {
        _id
        name
        age
        cars {
          name
          company
          _id
        }
      }
    }
  }
`;

export { getCarsQuery, getOwnersQuery, AddCarMutation, getCarQuery };
