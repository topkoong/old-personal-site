const URL = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40theeruttop`;
const classes = ['secondary', 'primary', 'success', 'warning', 'alert'];

const createLabel = (category, i) => {
    const label = document.createElement('span');
    let labelClassesRamdom = classes[i];
    label.classList.add('label', labelClassesRamdom, 'animated', 'shake', 'sm-margin');
    label.innerText = category;
    return label;
}

const createBlog = ({title, thumbnail, pubDate, link, categories}, i) => {
    const blogPosts = document.querySelector('.blog-posts');
    const cell = document.createElement('div');
	cell.classList.add('cell');
    const callout = document.createElement('div');
    // let calloutClassesRamdom = classes[Math.floor(classes.length * Math.random())]
    let calloutClassesRamdom = classes[i]
    callout.classList.add('callout', calloutClassesRamdom, 'animated', 'swing');
    const blogTitle = document.createElement('h4');
    blogTitle.textContent = `${title}`;
    blogTitle.classList.add('animated', 'bounceIn');
    const blogThumbnail = document.createElement('img');
    blogThumbnail.setAttribute('src', thumbnail);
    blogThumbnail.classList.add('u-add-tb-margin', 'animated', 'jello');
    
    const published = document.createElement('p');
    published.textContent = `Published: ${new Date(pubDate).toLocaleString("en-US")}`;
    const blogLink = document.createElement('a');
    blogLink.href = link;
    callout.appendChild(published);
    callout.appendChild(blogTitle);
    callout.appendChild(blogThumbnail);
    categories.forEach((category, i) => callout.appendChild(createLabel(category, i)));
    blogLink.appendChild(callout);
    cell.appendChild(blogLink);
    blogPosts.appendChild(cell);
}

const fetchBlogs = url => {
    return fetch(url)
        .then(res => res.json())
        .then(blogs => {
            blogs = blogs.items;
            blogs.forEach((blog, i)=> createBlog(blog, i));
        });
};
fetchBlogs(URL);





