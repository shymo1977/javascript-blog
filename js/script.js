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
  optArticleSelector = '.post-tags .list'

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

function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll(.post);
  /* START LOOP: for every article: */
  for(let article of articles)
  /* find tags wrapper */
  const wrappTags = article.querySelectorAll(optArticleTagsSelector);
  /* make html variable with empty string */
  let articleTagsHtml ='';
  /* get tags from data-tags attribute */
  const articleTags = article.getAttribute('data-tags');
  /* split tags into array */
  const articleTagsArray = articleTags.split(' ');
  /* START LOOP: for each tag */
  for(let tag of articleTagsArray){

  }
  /* generate HTML of the link */
  function generateArticleTags(tag) {
  const tagHtmlLink = '<li><a class="tag-link active" href="#tag-' + tag +'"><span>' + tag +'</span></a></li>'+ ' ';
  }
  generateArticleTags()
  /* add generated code to html variable */
  ArticleTagsHtml = generateArticleTags(tag);
  /* END LOOP: for each tag */
  
  const tagsElement = article.querySelector('.list.list-horizontal');
  tagsElement.innerHTML = articleTagsHtml;
  /* insert HTML of all the links into the tags wrapper */
  
  /* END LOOP: for every article: */
}
  
generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = ;this
    /* make a new constant "href" and read the attribute "href" of the clicked element */
  const  href = clickedElement.getAttribute('href');
    /* make a new constant "tag" and extract tag from the "href" constant */
  
    /* find all tag links with class active */
  
    /* START LOOP: for each active tag link */
  
      /* remove class active */
  
    /* END LOOP: for each active tag link */
  
    /* find all tag links with "href" attribute equal to the "href" constant */
  
    /* START LOOP: for each found tag link */
  
      /* add class active */
  
    /* END LOOP: for each found tag link */
  
    /* execute function "generateTitleLinks" with article selector as argument */
  }
  
  function addClickListenersToTags(){
    /* find all links to tags */
  
    /* START LOOP: for each link */
  
      /* add tagClickHandler as event listener for that link */
  
    /* END LOOP: for each link */
  }
  
  addClickListenersToTags();


