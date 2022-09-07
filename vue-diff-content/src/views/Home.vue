<template>
  <div>
    <!-- <span>介绍: {{ diff[0].introduction }}</span>
    <br />
    <span>时代背景{{ diff[0].historicalBg }}</span> -->
  </div>
  <!-- <div v-html="diff"></div> -->
  <!-- <div></div> -->
</template>

<script>
import { res } from '../diff'
const Diff = require('diff')
export default {
  name: 'Home',
  data() {
    return {
      diff: '',
    }
  },
  created() {
    const div = document.createElement('div')
    div.appendChild(res)
    document.body.appendChild(div)
    this.diff = JSON.parse(res.innerText)
    console.log('this.diff ', this.diff)
    this.myDiff()
  },
  methods: {
    myDiff() {
      const test = JSON.stringify(this.diff[0].historicalBg)
      const other = JSON.stringify(['31923921328138'])
      const diff = Diff.diffChars(test, other),
        display = document.createElement('div'),
        fragment = document.createDocumentFragment()

      diff.forEach((part) => {
        // green for additions, red for deletions
        // grey for common parts
        const color = part.added ? 'red' : part.removed ? 'grey' : ''
        const span = document.createElement('span')
        span.style.backgroundColor = color
        span.appendChild(document.createTextNode(part.value))
        fragment.appendChild(span)
      })

      display.appendChild(fragment)
    },
  },
  components: {},
}
</script>
