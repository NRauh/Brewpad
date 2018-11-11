<template>
  <div class="md-layout md-gutter">

    <div
      class="md-layout-item md-size-100"
      v-for="recipe in recipes"
      :key="recipe.id"
    >
      <md-card>
        <md-card-header>
          <div class="md-title">{{recipe.title}}</div>
        </md-card-header>

        <md-card-content>
          {{recipe.description}}
        </md-card-content>

        <md-card-actions>
          <md-button :to="{ name: 'recipe', params: { recipeId: recipe.id }}">
            Info
          </md-button>
        </md-card-actions>
      </md-card>
    </div>

  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'Recipes',
  data: () => ({
    recipes: [],
  }),
  apollo: {
    recipes: gql`
      {
        recipes {
          id
          title
          description
        }
      }
    `,
  },
};
</script>
