export const getNumberMonth = (month) => {
  switch (month) {
    case 'Janeiro':
      return '01';
    case 'Fevereiro':
      return '02';
    case 'Março':
      return '03';
    case 'Abril':
      return '04';
    case 'Maio':
      return '05';
    case 'Junho':
      return '06';
    case 'Julho':
      return '07';
    case 'Agosto':
      return '08';
    case 'Setembro':
      return '09';
    case 'Outubro':
      return '10';
    case 'Novembro':
      return '11';
    case 'Dezembro':
      return '12';

    default:
      break;
  }
};


export const formatNumbers = (num) => {
  const numberFormated = num.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  return numberFormated;
};