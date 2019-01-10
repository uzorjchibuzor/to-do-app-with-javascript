import './scss/index.scss';
 import formLoader from './form';


  let content = document.querySelector('#content')
  content.className = "container";
  let entryForm = (formLoader(document.createElement('div')));
  content.appendChild(entryForm);

  
 