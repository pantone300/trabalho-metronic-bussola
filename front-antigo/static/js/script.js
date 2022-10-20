const userMenu = () => {
  const headerUsers = document.querySelectorAll('.header__user')

  headerUsers.forEach(el =>
    el.addEventListener('click', event =>
      document
        .getElementsByClassName('menuUser')[0]
        .classList.add('menuUser--active')
    )
  )

  const closeBtn = item =>
    document
      .querySelector(item)
      .addEventListener('click', event =>
        document
          .getElementsByClassName('menuUser')[0]
          .classList.remove('menuUser--active')
      )

  closeBtn('.menuUser__close')
  closeBtn('.menuUser__btn')
}

const aside = () => {
  let isClose = false
  const asideList = document.querySelector('.aside__list')
  const hamburguerMenu = document.querySelector('.header__hamburguer')
  const asideMenu = document.querySelector('.aside')
  const asideMenuFixed = document.querySelector('.aside__fixed')

  const arrow = document.querySelector('.aside__arrow')
  const acordionTitles = document.querySelectorAll(
    '.accordion__title .item .item__arrow-name'
  )
  const itemArrows = document.querySelectorAll('.item__arrow')
  const itemMenuTitle = document.querySelectorAll('.itemMenu__title')
  const acordionIcon = document.querySelectorAll('.accordion__icon')
  const submenuList = document.querySelectorAll('.accordion__submenu-list')

  console.log(submenuList);
  acordionIcon.forEach(item => (item.style.display = 'none'))

  const setAsideAtributes = (item, value) =>
    item.forEach(item => (item.style.display = value))

  hamburguerMenu.addEventListener('click', event => {
    asideMenu.classList.toggle('aside--active')
    asideMenuFixed.classList.toggle('aside__fixed--active')
  })

  asideList.addEventListener('mouseenter', event => {
    if (isClose) {
      asideMenu.classList.remove('aside--close')
      asideMenuFixed.classList.remove('aside__fixed--close')

      setAsideAtributes(submenuList, 'block')
      setAsideAtributes(acordionTitles, 'block')
      setAsideAtributes(acordionIcon, 'none')
      setAsideAtributes(itemArrows, 'block')
      setAsideAtributes(itemMenuTitle, 'block')
    }
  })

  asideList.addEventListener('mouseleave', event => {
    if (isClose) {
      asideMenu.classList.add('aside--close')
      asideMenuFixed.classList.add('aside__fixed--close')

      setAsideAtributes(submenuList, 'none')
      setAsideAtributes(acordionTitles, 'none')
      setAsideAtributes(acordionIcon, 'block')
      setAsideAtributes(itemArrows, 'none')
      setAsideAtributes(itemMenuTitle, 'none')
    }
  })

  arrow.addEventListener('click', event => {
    asideMenu.classList.toggle('aside--close')
    asideMenuFixed.classList.toggle('aside__fixed--close')

    //set is close
    if (isClose) {
      isClose = false
    } else {
      isClose = true
    }

    if (
      asideMenu.classList.contains('aside--close') ||
      asideMenuFixed.classList.contains('aside__fixed--close')
    ) {
      setAsideAtributes(acordionTitles, 'none')
      setAsideAtributes(acordionIcon, 'block')
      setAsideAtributes(itemArrows, 'none')
      setAsideAtributes(itemMenuTitle, 'none')
    } else {
      setAsideAtributes(acordionTitles, 'block')
      setAsideAtributes(acordionIcon, 'none')
      setAsideAtributes(itemArrows, 'block')
      setAsideAtributes(itemMenuTitle, 'block')
    }
  })
}

const filterCards = () => {
  const cards1 = document.querySelectorAll('#authors1 .authors__item')
  const cards2 = document.querySelectorAll('#authors2 .authors__item')
  const selectAuthors1 = document.querySelector('#authors1 .authors__select')
  const selectAuthors2 = document.querySelector('#authors2 .authors__select')
  let selected1 = 'all'
  let selected2 = 'all'

  const filter = (select, cards, selected) => {
    select.addEventListener('change', event => {
      selected = event.target.value
      cards.forEach(item => {
        if (
          selected === item.getAttribute('data-status') ||
          selected === 'all'
        ) {
          item.style.display = 'flex'
        } else {
          item.style.display = 'none'
        }
      })
    })
  }
  filter(selectAuthors1, cards1, selected1)
  filter(selectAuthors2, cards2, selected2)
}

const graphicsLines = () => {
  let chartLineSelect = document.querySelector('#charLine-select')
  let chartLines = document.querySelectorAll('#chartLine .basic__chart')
  let chartLineselected = `chart-line--${chartLineSelect.value}`
  let dataChartLine = [
    {
      ano: '#chart-line--2021',
      config: {
        series: [
          {
            name: 'Net Profit',
            data: [30, 45, 32, 70, 40, 40, 40, 40]
          }
        ],
        chart: {
          toolbar: {
            tools: {
              download: true,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false
            }
          }
        },
        labels: [
          'Jan',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun',
          'Jul',
          'Ago',
          'Set',
          'Out',
          'Nov',
          'Dez'
        ]
      }
    },
    {
      ano: '#chart-line--2020',
      config: {
        series: [
          {
            name: 'Net Profit',
            data: [90, 80, 70, 40, 40, 90, 80, 40]
          }
        ],
        chart: {
          toolbar: {
            tools: {
              download: true,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false
            }
          }
        },
        labels: [
          'Jan',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun',
          'Jul',
          'Ago',
          'Set',
          'Out',
          'Nov',
          'Dez'
        ]
      }
    }
  ]

  const setApper = () =>
    chartLines.forEach(item => {
      if (chartLineselected === item.id) {
        item.style.display = 'flex'
      } else {
        item.style.display = 'none'
      }
    })

  //iniciation
  setApper()

  chartLineSelect.addEventListener('change', event => {
    chartLineselected = `chart-line--${event.target.value}`
    setApper()
  })

  dataChartLine.forEach(item => {
    let chart = new ApexCharts(document.querySelector(item.ano), item.config)
    chart.render()
  })
}

const graphicsCollumn = () => {
  let collumnSelect = document.querySelector('#collumnChart-select')
  let collumns = document.querySelectorAll('#collumnChart .basic__chart')
  let collumnselected = `collumnChart--${collumnSelect.value}`
  let datacollumn = [
    {
      ano: '#collumnChart--2021',
      config: {
        series: [
          {
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          },
          {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
          },
          {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
          }
        ],
        chart: {
          type: 'bar'
        },
        plotOptions: {
          bar: {
            horizontal: false,
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: [
            'Jan',
            'Fev',
            'Mar',
            'Abr',
            'Mai',
            'Jun',
            'Jul',
            'Ago',
            'Set',
            'Out',
            'Nov',
            'Dez'
          ]
        },
        yaxis: {
          title: {
            text: '$ (mil)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return '$ ' + val + ' mil'
            }
          }
        }
      }
    },
    {
      ano: '#collumnChart--2020',
      config: {
        series: [
          {
            name: 'Net Profit',
            data: [20, 35, 54, 66, 81, 58, 23, 30, 56]
          },
          {
            name: 'Revenue',
            data: [22, 85, 11, 98, 77, 55, 61, 114, 94]
          },
          {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
          }
        ],
        chart: {
          type: 'bar'
        },
        plotOptions: {
          bar: {
            horizontal: false,
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: [
            'Jan',
            'Fev',
            'Mar',
            'Abr',
            'Mai',
            'Jun',
            'Jul',
            'Ago',
            'Set',
            'Out',
            'Nov',
            'Dez'
          ]
        },
        yaxis: {
          title: {
            text: '$ (mil)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return '$ ' + val + ' mil'
            }
          }
        }
      }
    }
  ]

  const setApper = () =>
    collumns.forEach(item => {
      if (collumnselected === item.id) {
        item.style.display = 'flex'
      } else {
        item.style.display = 'none'
      }
    })

  //iniciation
  setApper()

  collumnSelect.addEventListener('change', event => {
    collumnselected = `collumnChart--${event.target.value}`
    setApper()
  })

  datacollumn.forEach(item => {
    let chart = new ApexCharts(document.querySelector(item.ano), item.config)
    chart.render()
  })
}

const graphicsIndChart = () => {
  let indSelect = document.querySelector('#indChart-select')
  let inds = document.querySelectorAll('#indChart .ind__chart')
  let indselected = `indChart--${indSelect.value}`
  let dataInd = [
    {
      ano: '#indChart--2021',
      config: {
        series: [30, 45, 32, 70, 40],
        chart: {
          type: 'donut'
        },
        labels: ['1-step', '2-step', '3-step', '4-step', '5-step'],
        legend: {
          show: false
        },
        plotOptions: {
          pie: {
            expandOnClick: true,
            customScale: 1,
            donut: {
              size: '25%'
            }
          }
        }
      }
    },
    {
      ano: '#indChart--2020',
      config: {
        series: [90, 80, 70, 40, 20],
        chart: {
          type: 'donut'
        },
        labels: ['1-step', '2-step', '3-step', '4-step', '5-step'],
        legend: {
          show: false
        },
        plotOptions: {
          pie: {
            expandOnClick: true,
            customScale: 1,
            donut: {
              size: '25%'
            }
          }
        }
      }
    }
  ]

  const setApper = () =>
    inds.forEach(item => {
      if (indselected === item.id) {
        item.style.zIndex = '1'
        item.style.position = 'relative'
        item.style.opacity = '1'
      } else {
        item.style.zIndex = '-1'
        item.style.position = 'absolute'
        item.style.opacity = '0'
      }
    })

  //iniciation
  setApper()

  indSelect.addEventListener('change', event => {
    indselected = `indChart--${event.target.value}`
    setApper()
  })

  dataInd.forEach(item => {
    console.log(item)
    let chart = new ApexCharts(document.querySelector(item.ano), item.config)
    chart.render()
  })
}

const graphicChart = () => {
  let graphicSelect = document.querySelector('#graphicChart-select')
  let graphics = document.querySelectorAll('#graphicChart .graphic__chart')
  let graphicselected = `graphicChart--${graphicSelect.value}`
  let datagraphic = [
    {
      ano: '#graphicChart--2021',
      config: {
        series: [{ data: [30, 45, 32, 70, 40, 40, 40, 40] }],
        stroke: {
          curve: 'smooth'
        },
        chart: {
          height: 125,
          width: '100%',
          id: 'basic-bar',
          toolbar: {
            show: false
          },
          selection: {
            enabled: false
          },
          zoom: {
            enabled: false,
            autoScaleYaxis: false
          }
        },
        tooltip: {
          marker: {
            show: false
          }
        },
        colors: ['#f36090'],
        grid: {
          show: false,
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        subtitle: {
          text: undefined
        },
        labels: [
          'Jan',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun',
          'Jul',
          'Ago',
          'Set',
          'Out',
          'Nov',
          'Dez'
        ],

        legend: {
          show: false
        },
        yaxis: {
          show: false
        },
        xaxis: {
          labels: {
            show: false
          },
          title: {
            text: undefined
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          tooltip: {
            enabled: false
          },
          crosshairs: {
            show: false
          }
        },
        markers: {
          colors: '#fff',
          strokeColors: '#d13647',
          strokeWidth: 3
        }
      }
    },
    {
      ano: '#graphicChart--2020',
      config: {
        series: [{ data: [90, 80, 70, 40, 40, 90, 80, 40] }],
        stroke: {
          curve: 'smooth'
        },
        chart: {
          height: 125,
          width: '100%',
          id: 'basic-bar',
          toolbar: {
            show: false
          },
          selection: {
            enabled: false
          },
          zoom: {
            enabled: false,
            autoScaleYaxis: false
          }
        },
        tooltip: {
          marker: {
            show: false
          }
        },
        colors: ['#f36090'],
        grid: {
          show: false,
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        subtitle: {
          text: undefined
        },
        labels: [
          'Jan',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun',
          'Jul',
          'Ago',
          'Set',
          'Out',
          'Nov',
          'Dez'
        ],
        legend: {
          show: false
        },
        yaxis: {
          show: false
        },
        xaxis: {
          labels: {
            show: false
          },
          title: {
            text: undefined
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          tooltip: {
            enabled: false
          },
          crosshairs: {
            show: false
          }
        },
        markers: {
          colors: '#fff',
          strokeColors: '#d13647',
          strokeWidth: 3
        }
      }
    }
  ]

  const setApper = () =>
    graphics.forEach(item => {
      if (graphicselected === item.id) {
        item.style.zIndex = '1'
        item.style.position = 'relative'
        item.style.opacity = '1'
      } else {
        item.style.zIndex = '-1'
        item.style.position = 'absolute'
        item.style.width = '100%'
        item.style.opacity = '0'
      }
    })

  //iniciation
  setApper()

  graphicSelect.addEventListener('change', event => {
    graphicselected = `graphicChart--${event.target.value}`
    setApper()
  })

  datagraphic.forEach(item => {
    console.log(item)
    let chart = new ApexCharts(document.querySelector(item.ano), item.config)
    chart.render()
  })
}

window.onload = function () {
  userMenu()
  aside()
  filterCards()
  graphicsLines()
  graphicsCollumn()
  // graphicsIndChart()
  //graphicChart()
}
