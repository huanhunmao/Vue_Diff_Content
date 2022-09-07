<template>
  <div>
    时代背景:
    <span v-html="display"></span>
  </div>
</template>

<script>
// import { res } from '../diff'
const Diff = require('diff')
export default {
  name: 'Home',
  data() {
    return {
      display: '',
    }
  },
  created() {
    this.myDiff()
  },
  methods: {
    myDiff() {
      // 单词 对比
      const test = JSON.stringify(['912382732138138', 'dadadad', '11111'])
      const other = JSON.stringify([
        '31923921328138',
        'dajdj23838',
        '2123jjjjjada',
        '11111',
      ])
      const diff = Diff.diffWords(test, other),
        display = document.createElement('div'),
        fragment = document.createDocumentFragment()

      diff.forEach((part) => {
        // green for additions, red for deletions
        // grey for common parts
        const color = part.added ? 'green' : part.removed ? '' : ''
        const textDecoration = part.added
          ? 'none'
          : part.removed
          ? 'line-through'
          : ''
        const span = document.createElement('span')
        span.style.backgroundColor = color
        span.style.textDecoration = textDecoration
        span.appendChild(document.createTextNode(part.value))
        fragment.appendChild(span)
      })

      display.appendChild(fragment)

      this.display = display.innerHTML
    },
  },
  components: {},
}
</script>
