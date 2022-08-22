export default function formatVideoMetrics(value: string) {
  const number = parseInt(value, 10);
  const degree = Number(number.toExponential().toString().split('+')[1]);
  let postfix = '';
  let answerDegree = 0;

  if (Number.isNaN(number)) {
    return '-';
  }

  if (degree >= 9) {
    answerDegree = 9;
    postfix = ' B';
  } else if (degree >= 6) {
    answerDegree = 6;
    postfix = ' M';
  } else if (degree >= 3) {
    answerDegree = 3;
    postfix = ' K';
  }

  return (number / 10 ** answerDegree).toFixed(answerDegree ? 1 : 0) + postfix;
}
