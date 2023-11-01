export default (await import('vue')).defineComponent({
  name: 'VHome',
  components: {
    FontAwesomeIcon,
    pdf
  },
  data() {
    return {
      pdfFiles: [
        {
          name: 'File 1',
          url: '@assets/a.pdf'
        }
      ]
    }
  }
})
