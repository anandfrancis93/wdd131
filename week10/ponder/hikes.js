const hikes = [
  {
    name: "Bechler Falls",
    stub: "bechler_falls",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/bechler-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 1,
    description:
      "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.",
    trailhead: [44.14457, -110.99781]
  },
  {
    name: "Teton Canyon",
    stub: "teton_canyon",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
    imgAlt: "Image of Teton Canyon",
    distance: "3 miles",
    tags: ["Canyon", "Tetons"],
    difficulty: 1,
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions:
      "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.",
    trailhead: [43.75567, -110.91521]
  },
  {
    name: "Denanda Falls",
    stub: "denanda_falls",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
    imgAlt: "Image of Denanda Falls",
    distance: "7 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 3,
    description: "Beautiful hike through Bechler meadows to Denanda Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.",
    trailhead: [44.14974, -111.04564]
  },
  {
    name: "Coffee Pot Rapids",
    stub: "coffee_pot",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/coffee-pot.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "2.2 miles",
    tags: ["Rafting"],
    difficulty: 1,
    description:
      "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids.",
    directions:
      "Take Highway 20 north to Island Park. Continue almost to Mack's in. From Highway 20, turn west on Flatrock Road for 1 mile then turn off on Coffee Pot Road and travel one-half mile to the campground entrance road. There is a parking lot right outside the campground.",
    trailhead: [44.49035, -111.36619]
  },
  {
    name: "Menan Butte",
    stub: "menan_butte",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/menan-butte.jpg",
    imgAlt: "Image of Menan Butte",
    distance: "3.4 miles",
    tags: ["Volcanic", "View"],
    difficulty: 2,
    description:
      "A steep climb to one of the largest volcanic tuff cones in the world. 3.4 miles is the full loop around the crater, can be shortened.",
    directions:
      "Take Highway 33 West out of Rexburg for about 8 miles. Turn left onto E Butte Road, the right onto Twin Butte road after about a mile. Follow that road for about 3 miles. You will see the parking lot/trailhead on the left.",
    trailhead: [43.78555, -111.98996]
  }
];

// Get the elements from the page
const searchInput = document.querySelector("#search");
const searchButton = document.querySelector("#search-button");
const hikeContainer = document.querySelector("#hike-container");

// Make the boots for the difficulty. Example: 2 -> 🥾🥾▫️▫️▫️
function getBoots(difficulty) {
  let boots = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= difficulty) {
      boots += "🥾";
    } else {
      boots += "▫️";
    }
  }
  return boots;
}

// Make the tag buttons for one hike
function getTags(tags) {
  let html = "";
  tags.forEach(function (tag) {
    html += `<button>${tag}</button>`;
  });
  return html;
}

// Make the HTML card for one hike
function hikeTemplate(hike) {
  return `
    <div class="hike-card">
      <div class="hike-content">
        <h2>${hike.name}</h2>
        <div class="hike-tags">${getTags(hike.tags)}</div>
        <p>${hike.description}</p>
        <p>Difficulty: <span class="rating" role="img" aria-label="${hike.difficulty} out of 5">${getBoots(hike.difficulty)}</span></p>
      </div>
    </div>`;
}

// Show a list of hikes on the page
function renderHikes(hikeList) {
  hikeContainer.innerHTML = "";
  hikeList.forEach(function (hike) {
    hikeContainer.innerHTML += hikeTemplate(hike);
  });
}

// Check if a hike matches the search word
function searchList(hike) {
  const query = searchInput.value.toLowerCase();

  const inName = hike.name.toLowerCase().includes(query);
  const inDescription = hike.description.toLowerCase().includes(query);
  const inTags = hike.tags.find(function (tag) {
    return tag.toLowerCase().includes(query);
  });

  return inName || inDescription || inTags;
}

// Sort hikes by distance, shortest first
// parseFloat turns "3.4 miles" into the number 3.4
function compareDistance(a, b) {
  return parseFloat(a.distance) - parseFloat(b.distance);
}

// Filter the hikes, sort them, then show them
function search() {
  const filtered = hikes.filter(searchList);
  const sorted = filtered.sort(compareDistance);
  renderHikes(sorted);
}

// Show one random hike when the page loads
function init() {
  const randomNum = Math.floor(Math.random() * hikes.length);
  renderHikes([hikes[randomNum]]);
}

searchButton.addEventListener("click", search);

init();