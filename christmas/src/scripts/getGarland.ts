import { cristmasApplicationData } from '../assets/data/applicationData';

function getGarland(): void {
  let tightropeStartSize = 65;
  let lightbulbNumber = 5;
  let rotate = 65;
  let translate = 60;
  const color = cristmasApplicationData.options.garlandColor.slice(13);
  const tightropeNumber = 8;
  const rotateUp = [12, 10, 8, 6, 4, 3.5, 3, 2.5];
  const container = document.getElementById('gameTree__garland') as HTMLTemplateElement;
  container.innerHTML = '';

  if (cristmasApplicationData.options.isGarland) {
    for (let i = 0; i < tightropeNumber; i++) {
      const lightrope = document.createElement('ul') as HTMLUListElement;
      lightrope.className = 'lightrope';
      lightrope.style.width = `${tightropeStartSize}vh`;
      lightrope.style.height = `${tightropeStartSize}vh`;
      container.append(lightrope);

      for (let j = 0; j < lightbulbNumber; j++) {
        const lightbulb = document.createElement('li') as HTMLLIElement;
        const lightropes = document.querySelectorAll('.lightrope') as NodeListOf<HTMLUListElement>;
        const lastLightrope = lightropes[lightropes.length - 1] as HTMLUListElement;

        lightbulb.className = color;
        lightbulb.style.transform = `rotate(${rotate}deg) translate(${translate}px) rotate(-${rotate}deg)`;
        lastLightrope.append(lightbulb);
        rotate += rotateUp[i];
      }
      tightropeStartSize -= 7;
      lightbulbNumber += 2;
      rotate = 65;
      translate += 20 + 5 * (i + 1);
    }
    translate = 60;
  }
}

export default getGarland;
