import fs from 'fs';

async function fetchWikiImages(query, limit = 5) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=${limit}&prop=pageimages&pithumbsize=800&format=json`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const pages = data.query?.pages || {};
    return Object.values(pages)
      .filter(page => page.thumbnail && page.thumbnail.source)
      .map(page => page.thumbnail.source);
  } catch (e) {
    console.error('Error fetching', query, e);
    return [];
  }
}

async function main() {
  const themes = {
    theyyam: await fetchWikiImages('Theyyam', 10),
    kathakali: await fetchWikiImages('Kathakali', 10),
    ritual: await fetchWikiImages('Padayani OR Mudiyettu OR Kanyarkali', 10),
    festival: await fetchWikiImages('Thrissur Pooram OR Chenda', 10),
    agriculture: await fetchWikiImages('Kerala paddy OR coconut farming', 10),
    music: await fetchWikiImages('Kerala folk music OR percussion', 10)
  };

  console.log(JSON.stringify(themes, null, 2));
}

main();
