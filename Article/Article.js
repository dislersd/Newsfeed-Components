// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(article) {
    // assign this.domElement to the passed in domElement
    this.domElement = article;
    this.paragraphs = article.querySelectorAll('p');
    // create a reference to the ".expandButton" class. 
    this.expandButton = article.querySelector('.expandButton');
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());

    this.paragraphs.forEach( p => {
      p.addEventListener('mouseover', () => this.highlight());
      
    })
    
    this.paragraphs.forEach( p => {
      p.addEventListener('mouseout', () => this.unhighlight());
    })

  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
      if (this.expandButton.textContent == 'Expand') {
    this.expandButton.textContent = 'Close';
    } else {
      this.expandButton.textContent = 'Expand'; 
    }
  }
  highlight() {
    this.paragraphs.forEach( p => {
        p.style.color = 'coral';
        p.style.textShadow = '-1px 1px black';
        TweenMax.to("p", 3, {scale: 1.1});
    });
  }
  unhighlight() {
    this.paragraphs.forEach( p => {
        p.style.color = 'black';
        p.style.textShadow = 'none';
        TweenMax.to("p", 1, {scale: 1});
    });
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

const articles = document.querySelectorAll('.article');

articles.forEach( article => new Article(article));