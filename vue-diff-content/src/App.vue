<template>
  <div id="app">
    <router-view />
    <span v-html="output"></span>
  </div>
</template>

<script>
import htmldiff from './htmldiff'
// 这个 文件尝试对比 html
export default {
  data() {
    return {
      output: '',
    }
  },
  created() {
    this.getDiffHtml()
  },
  methods: {
    getDiffHtml() {
      let originalHTML = `
    <p>Hello Mr. Wayne, decide what to do:</p>
    <ul>
        <li>Call Alfred</li>
        <li>Take Thalia Al Gul to the cinema</li>
        <li>Save Gotham</li>
    </ul>
    <span>Use the mouse to choose an option.</span>
`

      let newHTML = `
<layout>
    <p>Hello Batman, decide what to do:</p>
<ul>
    <li>Kill The Joker</li>
    <li>Save Thalia Al Gul</li>
    <li>Save Gotham</li>
</ul>
<span>Use the batarang to choose an option.</span>

`

      // Diff HTML strings
      let output = htmldiff(originalHTML, newHTML)

      // Show HTML diff output as HTML (crazy right?)!
      this.output = output
      //   document.body.innerHTML = output
    },
  },
}
</script>

<style>
ins {
  text-decoration: none;
  background-color: green;
}

del {
  text-decoration: line-through;
  /* background-color: gray; */
  color: #555;
}
</style>
