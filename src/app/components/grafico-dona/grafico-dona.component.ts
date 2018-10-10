import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-grafico-dona',
    templateUrl: './grafico-dona.component.html',
    styles: []
})
export class GraficoDonaComponent implements OnInit {

    @Input() grafico:any={};

    doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    doughnutChartData:number[] = [350, 450, 100];
    doughnutChartType:string = 'doughnut';
    leyenda:string = 'Leyenda';



    constructor() { }

    ngOnInit() {
        console.log(this.grafico);
        this.doughnutChartLabels = this.grafico.labels;
        this.doughnutChartData = this.grafico.data;
        this.doughnutChartType= this.grafico.type;
        this.leyenda = this.grafico.leyenda;
    }

}
