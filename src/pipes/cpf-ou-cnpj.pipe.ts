import {Pipe, PipeTransform} from "@angular/core";
import {cnpjPattern, cpfPattern} from "../components/constants";

const vanillaMasker = require('vanilla-masker');
const CPF_LENGTH = 11;

@Pipe({
  name: 'cpfOuCnpj'
})
export class CpfCnpjPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return '';
    }

    if (value.length > CPF_LENGTH) {
      return vanillaMasker.toPattern(value, cnpjPattern);
    }

    return vanillaMasker.toPattern(value, cpfPattern);
  }
}
