export default {
    input: './index.js',
    output: {
      file: 'build/bundle.js',
      format: 'iife'
    },
    watch: {
        exclude: 'node_modules/**'
      }
  };