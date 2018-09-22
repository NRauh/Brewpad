<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <span class="md-title">Brewpad</span>
          </div>
        </div>

        <div class="md-toolbar-row">
          <md-tabs class="md-primary">
            <md-tab
              id="tab-brews"
              md-label="Brews"
              to="brews"
            />
            <md-tab
              id="tab-recipes"
              md-label="Recipes"
              to="recipes"
            />
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-content>
        <router-view />
      </md-app-content>
    </md-app>
  </div>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
  </div> -->

</template>
