export const Data = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234
    }
  ];

export const ChartData = {
    labels: Data.map(v => v.year),
    datasets: [
        {
          label: 'Popularity of colours',
          data: Data.map(v => v.userGain),
          // you can set indiviual colors for each bar
          backgroundColor: [
            '#BBDEFB',
            '#EF9A9A',
            '#80CBC4',
          ],
          borderWidth: 1,
        }
    ]
}