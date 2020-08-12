var manga = [
    {
      name: 'Fullmetal Alchemist: Brotherhood',
      id: 1,
      image: 'images/manga/1.jpg',
      publisher: 'Hiromu',
      genre: 'Action, Adventure',
      cost: 34.99
    },
    {
      name: 'Sun-Ken Rock',
      id: 2,
      publisher: 'Shonen Gahosha',
      genre: 'Action',
      cost: 19.99
    },
    {
      name: 'Drifting Dragons',
      id: 3,
      publisher: 'Kodansha',
      genre: 'Fantasy, Adventure',
      cost: 20.00
    },
    {
      name: 'Orange',
      id: 4,
      publisher: 'Futabasha',
      genre: 'Slice of Life',
      cost: 55.99
    },
    {
      name: 'Attack on Titan',
      id: 5,
      publisher: 'Kodansha',
      genre: 'Action',
      cost: 34.99
    },
    {
      name: 'Cardcaptor Sakura: Clear Card',
      id: 6,
      publisher: 'Kodansha',
      genre: 'Fantasy, Action',
      cost: 16.99
    },
    {
      name: 'Solo Leveling',
      id: 7,
      publisher: 'Papyrus',
      genre: 'Action, Fantasy',
      cost: 34.99
    },
    {
      name: 'One Piece',
      id: 8,
      publisher: 'Viz Media',
      genre: 'Action, Adventure',
      cost: 19.99
    },
    {
      name: 'Silver Spoon',
      id: 9,
      publisher: 'Hiromu',
      genre: 'Slice of Life',
      cost: 19.99
    },
    {
      name: 'Sweetness and Lightning',
      id: 10,
      publisher: 'Gido',
      genre: 'Slice of Life',
      cost: 19.99
    }
  ];
  
  window.onload = function() {
    var all = document.getElementById('all');
    var action = document.getElementById('action');
    var adventure = document.getElementById('adventure');
    var sliceoflife = document.getElementById('slice of life');
    var fantasy = document.getElementById('fantasy');
  
    function loadAllTitles(manga = library) {
      for (let i = 0; i < library.length; i++) {
        var mangaWrapper = document.querySelector('#wrapper');
        let createDiv = document.createElement('div');
        let imageNode = document.createElement('img');
        let createTitle = document.createElement('h3');
        let createGenre = document.createElement('p');
        let createCost = document.createElement('p');
        let mangaGenre = document.createTextNode('Genre: ' + e[i].genre);
        let mangaTitle = document.createTextNode(e[i].name);
        let mangaCost = document.createTextNode('$' + e[i].cost);
        createDiv.classList.add('manga');
        createDiv.id = manga[i].id.toString();
        imageNode.src = '/images/manga/' + e[i].id.toString() + '.jpg';
        imageNode.alt = manga[i].name + 'Manga Coverart';
  
        createTitle.appendChild(mangaTitle);
        createGenre.appendChild(mangaGenre);
        createCost.appendChild(mangaCost);
        createDesc.appendChild(mangaDesc);
  
        createDiv.appendChild(imageNode);
        createDiv.appendChild(createTitle);
        createDiv.appendChild(createGenre);
        createDiv.appendChild(createCost);
        createDiv.appendChild(createDesc);
        mangaWrapper.insertBefore(createDiv, mangaWrapper.childNodes[0]);
      }
    }
  
    all.onclick = function() {
      for (let i = 0; i < library.length; i++) {
        document.getElementById(library[i].id).classList.remove('hidden');
      }
      all.classList.add('currentselection');
      action.classList.remove('currentselection');
      adventure.classList.remove('currentselection');
      sliceoflife.classList.remove('currentselection');
      fantasy.classList.remove('currentselection');
    };
  
    action.onclick = function() {
      for (let i = 0; i < library.length; i++) {
        document.getElementById(library[i].id).classList.remove('hidden');
        if (!library[i].platform.includes('Action')) {
          document.getElementById(library[i].id).classList.add('hidden');
        }
      }
      all.classList.remove('currentselection');
      action.classList.add('currentselection');
      adventure.classList.remove('currentselection');
      sliceoflife.classList.remove('currentselection');
      fantasy.classList.remove('currentselection');
    };
  
    adventure.onclick = function() {
      for (let i = 0; i < library.length; i++) {
        document.getElementById(library[i].id).classList.remove('hidden');
        if (!library[i].platform.includes('Adventure')) {
          document.getElementById(library[i].id).classList.add('hidden');
        }
      }
      all.classList.remove('currentselection');
      action.classList.remove('currentselection');
      adventure.classList.add('currentselection');
      sliceoflife.classList.remove('currentselection');
      fantasy.classList.remove('currentselection');
    };
  
    sliceoflife.onclick = function() {
      for (let i = 0; i < library.length; i++) {
        document.getElementById(library[i].id).classList.remove('hidden');
        if (!library[i].platform.includes('Slice of Life')) {
          document.getElementById(library[i].id).classList.add('hidden');
        }
      }
      all.classList.remove('currentselection');
      action.classList.remove('currentselection');
      adventure.classList.remove('currentselection');
      sliceoflife.classList.add('currentselection');
      fantasy.classList.remove('currentselection');
    };
  
    fantasy.onclick = function() {
      for (let i = 0; i < library.length; i++) {
        document.getElementById(library[i].id).classList.remove('hidden');
        if (!library[i].platform.includes('Fantasy')) {
          document.getElementById(library[i].id).classList.add('hidden');
        }
      }
      all.classList.remove('currentselection');
      action.classList.remove('currentselection');
      adventure.classList.remove('currentselection');
      sliceoflife.classList.remove('currentselection');
      fantasy.classList.add('currentselection');
    };

    loadAllTitles();
  };