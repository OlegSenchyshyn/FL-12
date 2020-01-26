const structure = [
  {
    folder: true,
    title: 'Films',
    children: [
      {
        title: 'Iron Man.avi'
      },
      {
        folder: true,
        title: 'Fantasy',
        children: [
          {
            title: 'The Lord of the Rings.avi'
          },
          {
            folder: true,
            title: 'New folder 1',
            children: false
          }
        ]
      }
    ]
  },
  {
    folder: true,
    title: 'Documents',
    children: [
      {
        folder: true,
        title: 'EPAM Homework answers',
        children: null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here

function createFileTree(structure, node) {
  let newFolder = document.createElement('ul');

  for (let item of structure) {
    let newChild = document.createElement('li'),
      p = document.createElement('p'),
      icon = document.createElement('i'),
      span = document.createElement('span');
    p.addEventListener('click', action);
    icon.classList.add('material-icons');

    if (item.folder) {
      icon.innerHTML = 'folder';
      p.appendChild(icon);
      p.innerHTML += item.title;
      newChild.appendChild(p);
      newFolder.appendChild(newChild);
    } else {
      icon.innerHTML = 'insert_drive_file';
      span.appendChild(icon);
      span.className = 'file';
      span.innerHTML += item.title;
      newChild.appendChild(span);
      newFolder.appendChild(newChild);
    }
    if (item.children) {
      createFileTree(item.children, newChild);
    } else if (!item.children && item.folder) {
      let emptyFolder = document.createElement('span');
      emptyFolder.innerHTML = 'Folder is empty';
      newChild.appendChild(emptyFolder);
      emptyFolder.className = 'hidden';
    }
    node.appendChild(newFolder);
  }
}

function action() {
  const element = this.nextElementSibling;
  if (element.className === 'show') {
    element.className = 'hidden';
    this.firstChild.innerText = 'folder';
  } else {
    element.className = 'show';
    this.firstChild.innerText = 'folder_open';
  }
}
createFileTree(structure, rootNode);
