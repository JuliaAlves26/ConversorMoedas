import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../principal/principal.service';

@Component({
  selector: 'app-converter-moedas',
  templateUrl: './converter-moedas.component.html',
  styleUrls: ['./converter-moedas.component.css']
})
export class ConverterComponent implements OnInit {
  moedas: any[] = [];
  moedaOrigem: string = '';
  novaMoeda: string = '';
  valor: number = 0;
  novoValor: number = 0;
  taxaConversao: number = 0;

  constructor(private principalService: PrincipalService) {}

  ngOnInit() {
    this.carregarMoedas();
  }

  carregarMoedas() {
    this.principalService.MoedasNomes().subscribe(
      (response: any) => {
        if (response.result === 'success' && response.supported_codes) {
          this.moedas = response.supported_codes.map((currency: any) => {
            return {
              nome: currency[1],
              simbolo: currency[0]
            };
          });
        }
      },
      (error: any) => {
        console.error('Erro ao listar as moedas:', error);
      }
    );
  }

  converterMoeda() {
    if (this.moedaOrigem && this.novaMoeda && this.valor) {
      this.principalService.getExchangeRate(this.moedaOrigem, this.novaMoeda, this.valor).subscribe(
        (response: any) => {
          if (response.result === 'success' && response.conversion_result) {
            this.novoValor = response.conversion_result;
            this.taxaConversao = response.conversion_rate;
          }
        },
        (error: any) => {
          console.error('Erro ao converter:', error);
        }
      );
    } else {
      console.error('Preencha todas as informações.');
    }
  }
}
