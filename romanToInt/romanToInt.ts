function romanToInt(s: string): number {
  let sum = 0;
  const rawArray = getIntArray(s);
  const formatted = formatRoman(rawArray);
  for (let index = 0; index < formatted.length; index++) {
    const element = formatted[index];
    sum += element;
  }

  return sum;
};

function getIntArray(s: string): number[] {
    let array = [];
    for(let i=0; i < s.length; i++) {
        array.push(getRomanValue(s[i]));
    }
    return array;
}

function formatRoman(n: number[]): number[] {
  const array = n;
  for (let index = 0; index < array.length; index++) {
    const current = array[index];
    const prev = array[index-1];
    if(current > prev) {
      array[index-1] *= -1;
    }
  }
  return array;
}

function getRomanValue(s: string): number {
    switch(s) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return 0;
    }
}

export default romanToInt;