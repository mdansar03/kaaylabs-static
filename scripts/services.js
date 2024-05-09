const button = document.querySelectorAll('#services_button');
const div = document.getElementById('services_id_active');
const Blog = document.getElementById('blog_button');
const about = document.getElementById('about_button');
const careers = document.getElementById('career_button');
const home = document.getElementById('home_button');
const contact = document.getElementById('contact_button');
const logo = document.getElementById('logo_kaaylabs');

button[0].addEventListener('mouseenter', () => {
    button[1].classList.add('active-placeholder')
});

Blog.addEventListener('mouseenter', ()=>
{
    button[1].classList.remove('active-placeholder');
})
about.addEventListener('mouseenter', ()=>
{
    button[1].classList.remove('active-placeholder');
})
careers.addEventListener('mouseenter', ()=>
{
    button[1].classList.remove('active-placeholder');
})
home.addEventListener('mouseenter', ()=>
{
    button[1].classList.remove('active-placeholder');
})
contact.addEventListener('mouseenter', ()=>
{
    button[1].classList.remove('active-placeholder');
})
logo.addEventListener('mouseenter', ()=>
{
    button[1].classList.remove('active-placeholder');
})

button[1].addEventListener('mouseleave', () => {
    button[1].classList.remove('active-placeholder')
});