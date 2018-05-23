import { Component, OnInit, ElementRef } from '@angular/core';
declare var Chart;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  message;
  messageTitle;
  messageMapping = {
    d: `Chỉ đạo, sáng tạo, kiên gan, giỏi giải quyết vấn đề, hướng đến kết quả, tự giác, tự đề cao, thiếu kiên nhẫn, thích kiểm soát, gây ấy tượng đầu tiên mạnh mẽ, biểu đạt nhanh chóng.`,
    i: `Duyên dáng, tự tin, thuyết phục, nhiệt tình, đầy cảm hứng, lạc quan, có sức thuyết phục, bốc đồng, nhiều cảm xúc, thân thiện và hoạt bát.`,
    s: `Tận tâm, lịch sự, ngoại giao, tiêu chuẩn cao, trưởng thành, kiên nhẫn, chính xác, nói năng chậm rãi, hành động có chủ ý, đi vào chi tiết, tìm kiếm sự thật, hành động chủ ý, hay nghi ngờ.`,
    c: `Hòa nhã, vô tư, giỏi lắng nghe, kiên nhẫn, chân thành, ổn định, thận trọng, thích đi đó đây, giọng điệu đều đều.`
  };
  messageTitleMapping = {
    d: `Dominance – Người quyền lực 💪`,
    i: `Influence – Người ảnh hưởng 😄`,
    s: `Steadiness – Người trầm tĩnh 👴`,
    c: `Compliance – Người tuân thủ 😊`
  };
  dataColors = [];
  radarChartData = [0, 0, 0, 0];
  radarChartLabels = ['Dominance (Quyền lực)', 'Influence (Ảnh hưởng) ', 'Steadiness (Trầm tĩnh) ', 'Compliance (Tuân thủ)'];
  result = {
    d: 0,
    i: 0,
    s: 0,
    c: 0
  }

  data: Array<Array<{ col, val, work?, home?}>> = [
    [
      { col: 1, val: 'Mãnh mẽ' },
      { col: 2, val: 'Lạc quan' },
      { col: 3, val: 'Thích nghi' },
      { col: 4, val: 'Phân tích' },
    ],
    [
      { col: 1, val: 'Cứng cỏi' },
      { col: 2, val: 'Nhiệt tình' },
      { col: 3, val: 'Trung thành' },
      { col: 4, val: 'Tỉ mỉ' },
    ],
    [
      { col: 1, val: 'Thẳng thắng' },
      { col: 2, val: 'Cầu tiến' },
      { col: 3, val: 'Kiên nhẫn' },
      { col: 4, val: 'Phục tùng' },
    ],
    [
      { col: 1, val: 'Tự tin' },
      { col: 2, val: 'Nghị lực' },
      { col: 3, val: 'Thông cảm' },
      { col: 4, val: 'Chính xác' },
    ],
    [
      { col: 1, val: 'Kiên quyết' },
      { col: 2, val: 'Thuyết phục' },
      { col: 3, val: 'Giỏi lắng nghe' },
      { col: 4, val: 'Chi tiết' },
    ],
    [
      { col: 1, val: 'Ganh đua' },
      { col: 2, val: 'Sáng tạo' },
      { col: 3, val: 'Kiềm chế' },
      { col: 4, val: 'Cầu toàn' },
    ],
    [
      { col: 1, val: 'Mạo hiểm' },
      { col: 2, val: 'Hoạt ngôn' },
      { col: 3, val: 'Nhất quán' },
      { col: 4, val: 'Chu đáo' },
    ],
    [
      { col: 1, val: 'Nóng vội' },
      { col: 2, val: 'Biết quan tâm' },
      { col: 3, val: 'Khoang dung' },
      { col: 4, val: 'Tự trọng' },
    ],
    [
      { col: 1, val: 'Độc lập' },
      { col: 2, val: 'Hướng ngoại' },
      { col: 3, val: 'Né tránh xung đột' },
      { col: 4, val: 'Nhạy cảm' },
    ],
    [
      { col: 1, val: 'Hướng đến mục tiêu' },
      { col: 2, val: 'Nổi bật' },
      { col: 3, val: 'Ghét thay đổi' },
      { col: 4, val: 'Tò mò' },
    ],
    [
      { col: 1, val: 'Vị kỉ' },
      { col: 2, val: 'Sôi nổi' },
      { col: 3, val: 'Vô lo' },
      { col: 4, val: 'Cẩn thận' },
    ],
    [
      { col: 1, val: 'Hung hăng' },
      { col: 2, val: 'Đáng tin' },
      { col: 3, val: 'Có kế hoạch' },
      { col: 4, val: 'Hay gây rắc rối' },
    ]
  ]

  constructor(private elemRef: ElementRef) {

  }

  renderChart() {
    const ctx = document.getElementById('chart');
    const data = {
      labels: this.radarChartLabels,
      datasets: [{
        label: '# of Votes',
        data: this.radarChartData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1
      }]
    };
    var myChart = new Chart(ctx, {
      type: 'radar',
      data: data,
      options: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'DICS chart'
        },
        scale: {
          ticks: {
            beginAtZero: true,
            min: -1
          }
        }
      }
    });
  }

  ngOnInit(): void {
    this.data.forEach((row, i) => {
      this.dataColors[i] = this.getRandomColor();
      row.forEach(col => {
        col.work = col.home = false;
      })
    })
  }

  getRandomColor() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }

  getResult() {
    let flatData: Array<{ col, val, work?, home?}> = [];
    this.data.forEach(row => {
      flatData = flatData.concat(row);
    })

    this.result.d =
      flatData.filter(x => x.col == 1 && x.work).length +
      flatData.filter(x => x.col == 1 && x.home).length;

    this.result.i =
      flatData.filter(x => x.col == 2 && x.work).length +
      flatData.filter(x => x.col == 2 && x.home).length;

    this.result.s =
      flatData.filter(x => x.col == 3 && x.work).length +
      flatData.filter(x => x.col == 3 && x.home).length;

    this.result.c =
      flatData.filter(x => x.col == 4 && x.work).length +
      flatData.filter(x => x.col == 4 && x.home).length;

    this.radarChartData = [this.result.d, this.result.i, this.result.s, this.result.c];

    let propBigger = 0;
    let personalType = '';
    Object.keys(this.result).forEach(k => {
      if (this.result[k] > propBigger) {
        propBigger = this.result[k];
        personalType = k
      };
    });

    this.message = this.messageMapping[personalType];
    this.messageTitle = this.messageTitleMapping[personalType];
    this.renderChart();
  }
}

