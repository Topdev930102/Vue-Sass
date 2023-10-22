<template>
  <div class="home-chart">
    <canvas ref="chart" id="chart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'
import {
  mapGetters,
  mapActions
} from 'vuex'
Chart.register(...registerables)

export default {
  name: 'Chart',
  data: () => ({
    number: 0,
    chart: null
  }),
  computed: {
    ...mapGetters('app', ['chartData', 'chartDate'])
  },
  methods: {
    ...mapActions('app', ['addChartData', 'addChartDate'])
  },
  mounted () {
    console.log(this.number++)
    const ctx = this.$refs.chart.getContext('2d')
    const gradient = ctx.createLinearGradient(0, 0, 0, 400)
    gradient.addColorStop(0, 'rgba(237, 152, 59, 0.3)')
    gradient.addColorStop(1, 'rgba(237, 152, 59, 0)')

    const self = this
    console.log('chartData--------', this.chartData)

    this.chart = new Chart(this.$refs.chart, {
      type: 'line',
      data: {
        labels: self.chartDate,
        datasets: [{
          label: 'Test',
          data: self.chartData,
          backgroundColor: gradient,
          borderColor: '#ED983B',
          borderWidth: 2,
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            position: 'bottom',
            grid: {
              drawBorder: true,
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          y: {
            position: 'right',
            grid: {
              drawBorder: true,
              color: 'rgba(255, 255, 255, 0.1)'
            }
          }
        }
      }
    })

    setInterval(() => {
      // self.addChartData(this.number++)
      // self.addChartDate(this.number++)
      this.chart.update()
    }, 1000)
  }
}
</script>
