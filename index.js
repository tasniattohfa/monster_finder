// // I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
// {/* <div class="monsters">
// <div class="monster">
//   <img src="https://robohash.org/6?set=set2" alt="MD. Sakib Khan" />
//   <p class="name">MD. Sakib Khan</p>
//   <p class="email">programmingwithsakib@gmail.com</p>
// </div>

// <div class="p-5 not-found" style="display: none">
//   <span>404</span>
//   <h1>🧟‍♂️ No Monster Found 🧟‍♂️</h1>
// </div>
// </div>
// </div> */}


import { monsters } from './monsters.js';
console.log(monsters);

for (let monster of monsters) {
    showMonsters(monster);
}

function showMonsters(monster) {
    const monsterDiv = document.createElement('div');
    monsterDiv.className = 'monster';

    const img = document.createElement('img');
    img.src = `https://robohash.org/${monster.id}?set=set2`;
    img.alt = monster.name;

    const name = document.createElement('p');
    name.className = 'name';
    name.innerText = monster.name;

    const email = document.createElement('p');
    email.className = 'email';
    email.innerText = monster.email;

    monsterDiv.append(img, name, email);

    document.querySelector('.monsters').append(monsterDiv);

    console.log(monster);
}

notFound();

function notFound() {
    const notFoundDiv = document.createElement('div');
    notFoundDiv.className = 'p-5 not-found';
    notFoundDiv.style.display = 'none';

    const span = document.createElement('span');
    span.innerText = '404';

    const h1 = document.createElement('h1');
    h1.innerText = '🧟‍♂️ No Monster Found 🧟‍♂️';

    notFoundDiv.append(span, h1);

    document.querySelector('.monsters').append(notFoundDiv);

    console.log(notFoundDiv);
}

// document.querySelector('#search-monster').
//     addEventListener('keyup', function (e) {
//         const keyword = e.target.value.toLowerCase();


//         const monsters = document.querySelectorAll('.monster');
//         let found = false; 

//         for (let monster of monsters) {
//             const name = monster.children[1].innerText.toLowerCase();
//             const email = monster.children[2].innerText.toLowerCase();


//             if (name.includes(keyword) || email.includes(keyword)) {
//                monster.style.display='block';
//             }
//             else{
//                 monster.style.display='none';
//             }
//         }
//         if (!found) {
//             notFound();
//           }
//     })

document.querySelector('#search-monster').addEventListener('keyup', function (e) {
    const keyword = e.target.value.toLowerCase();

    const monsters = document.querySelectorAll('.monster');
    let found = false; // Flag to track if any monster matches the keyword

    for (let monster of monsters) {
        const name = monster.children[1].innerText.toLowerCase();
        const email = monster.children[2].innerText.toLowerCase();

        if (name.includes(keyword) || email.includes(keyword)) {
            monster.style.display = 'block';
            found = true; // At least one monster matches the keyword
        } else {
            monster.style.display = 'none';
        }
    }

    // Display "No Monster Found" message if no monster matches the keyword
    if (!found) {
        showNotFound();
    } else {
        hideNotFound();
    }
});

function showNotFound() {
    const notFoundDiv = document.querySelector('.not-found');
    notFoundDiv.style.display = 'block';
}

function hideNotFound() {
    const notFoundDiv = document.querySelector('.not-found');
    notFoundDiv.style.display = 'none';
}

document.querySelector('.search-monster-form').addEventListener('submit', e => { e.preventDefault(); });