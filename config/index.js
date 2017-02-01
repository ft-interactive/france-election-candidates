import article from './article';
import getFlags from './flags';
import axios from 'axios';
import getOnwardJourney from './onward-journey';

export default async function() {
  const d = await article();
  const flags = await getFlags();
  const onwardJourney = await getOnwardJourney();
  const endpoint = 'http://bertha.ig.ft.com/view/publish/gss/1wHzYJRo77uEr51WIOMeimnHfWkYzfvY_DF-QAylO1-k/data';
  const cards = {};
  let data;

  try {
    const res = await axios(endpoint);
    data = res.data;
  } catch (e) {
    console.log('Error getting content from Bertha');
  }

  cards.unfilled = data.filter(d => d.style !== 'selected');

  try {
    cards.selected = await Promise.all(data.filter(d => d.style === 'selected')
      .map(async card => {
        const url = `https://ig.ft.com/onwardjourney/v1/thing/${card.topicid}/json?limit=5`;
        try {
          const res = await axios(url);
          card.links = res.data.items.filter(v => v.id !== d.id); // Filter this item out.
        } catch(e) {
          console.error(`Error getting Onward Journey for ${card.name}`);
          console.log(url);
          card.links = [];
        }

        return card;
      }));
  } catch(e) {
    console.error(e);
    cards.selected = data.filter(d => d.style === 'selected');
  }

  return {
    ...d,
    cards,
    flags,
    onwardJourney,
  };
}
