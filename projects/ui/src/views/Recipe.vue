<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-100">
      <h1>{{recipe.title}}</h1>
      <p>{{recipe.description}}</p>
    </div>

    <div class="md-layout-item">
      <h2>Info</h2>

      <div>
        <h3>Styles</h3>

        <ul>
          <li
            v-for="style in recipe.styles"
            :key="style"
          >
            {{style}}
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'Recipe',
  data: () => ({
    recipe: {
      title: '',
      description: '',
      styles: [],
      projectedABV: 0,
      yields: '',
      ingredients: [],
      directions: [],
    },
  }),
  apollo: {
    recipe: {
      query: gql`
        query Recipe($recipeId: ID!) {
          recipe(id: $recipeId) {
            title
            description
            style
            projectedABV
            yields
            ingredients {
              amount
              ingredient
            }
            directions
          }
        }
      `,
      variables() {
        return {
          recipeId: this.$route.params.recipeId,
        };
      },
    },
  },
};
</script>

