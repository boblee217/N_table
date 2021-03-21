import { gql } from "@apollo/client";

export const LOAD_ITEMS = gql`
query {
  getAllItems {
    id
    dessert
    nutritionInfo {
      calories
      fat
      carb
      protein
    }
  }
}
`;