export default {
  data: () => ({
    page: 1,
    pageSize: 1,
    pageCount: 0,
    allItems: [],
    pageItems: []
  }),
  methods: {
    setupPagination (items) {
      this.allItems = items.reduce((acc, c) => {
        if (acc[acc.length - 1].length === this.pageSize) {
          acc.push([])
        }

        acc[acc.length - 1].push(c)
        return acc
      }, [[]])
      this.pageCount = this.allItems.length
      this.pageItems = this.allItems[this.page - 1] || this.allItems[0]
    },
    pageChangeHandler (page) {
      this.pageItems = this.allItems[page - 1] || this.allItems[0]
    }
  }
}
