'use strict';

function titleClickHandler(event){
  const clickedElement = this;
  event.preventDefault();
  clickedElement.classList.add('active');
  console.log('Link was clicked!', event);

  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  
  /*  [IN PROGRESS] add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement);

  /*  [DONE]  remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
    
  /* add class 'active' to the correct article */
 
  targetArticle.classList.add('active');
}

   
const links = document.querySelectorAll('.titles a');
console.log(links);
for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
 
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */
  function titleClickHandler(){
    const titleList = document.querySelectorAll(optTitleListSelector);
    

  }
  function clearMessages(){
    document.getElementById('messages').innerHTML = 'titleList';

 }

  /* for each article */
  const articles = document.querySelectorAll('.post');
  let html = '';
  for(let article of articles){
    article.classList.remove('active');
  }

  /* get the article id */
  const articleId = article.getAttribute('id');
    /* find the title element and get the title from the title element */
  const articleTitle = article.querySelector(optTitleSelector).innerHTML;
   

  /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
  /* insert link into titleList */
  html = html +linkHTML;

  let insertListLink = document.getElementById('link-title-list');
  insertListLink.insertAdjacentElementHTML('afterbegin', html);



}



