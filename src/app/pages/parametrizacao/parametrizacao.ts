import { Component } from '@angular/core';

@Component({
  selector: 'app-parametrizacao',
  standalone: false,
  templateUrl: './parametrizacao.html',
  styleUrl: './parametrizacao.css',
})
export class Parametrizacao {
  diasSemana = [
    { nome: 'Segunda', checked: false, horaInicio: '', horaFim: '' },
    { nome: 'Terça', checked: false, horaInicio: '', horaFim: '' },
    { nome: 'Quarta', checked: false, horaInicio: '', horaFim: '' },
    { nome: 'Quinta', checked: false, horaInicio: '', horaFim: '' },
    { nome: 'Sexta', checked: false, horaInicio: '', horaFim: '' },
    { nome: 'Sábado', checked: false, horaInicio: '', horaFim: '' },
    { nome: 'Domingo', checked: false, horaInicio: '', horaFim: '' }
  ];
}