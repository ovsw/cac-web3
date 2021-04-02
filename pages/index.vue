<template>
  <div>
    Homepage
  </div>
</template>

<script>
const query = /* groq */ `{
  "siteHome": *[_type == 'siteHome'] {
    ...
  }[0]
}
`

export default {
  name: 'siteHome',
  asyncData({ $sanity }) {
    const sanityCall = $sanity.fetch(query)
    console.log('🎈 asyncData: called', sanityCall )
    return sanityCall
  },
}
</script>