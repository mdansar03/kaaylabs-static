
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


const enterprise_tag = document.getElementById('enterprise_tag');
const business_tag = document.getElementById('business_tag');
const software_tag = document.getElementById('software_tag');
const cloud_tag = document.getElementById('cloud_tag');
const machine_tag = document.getElementById('machine_tag');


const active_enterprise_tag = document.getElementById('active_enterprise_tag');
const active_business_tag = document.getElementById('active_business_tag');
const active_software_tag = document.getElementById('active_software_tag');
const active_cloud_tag = document.getElementById('active_cloud_tag');
const active_machine_tag = document.getElementById('active_machine_tag');

const enterprise_text_redirect = document.getElementById('enterprise_text_redirect');
const business_text_redirect = document.getElementById('business_text_redirect');
const software_text_redirect = document.getElementById('software_text_redirect');
const cloud_text_redirect = document.getElementById('cloud_text_redirect');
const machine_text_redirect = document.getElementById('machine_text_redirect');

const enterprise_text_svg = document.getElementById('enterprise_text_svg');
const business_text_svg = document.getElementById('business_text_svg');
const software_text_svg = document.getElementById('software_text_svg');
const cloud_text_svg = document.getElementById('cloud_text_svg');
const machine_text_svg = document.getElementById('machine_text_svg');


enterprise_tag.addEventListener('mouseenter', ()=>
{
    enterprise_text_redirect.classList.add('enterprise_text_redirect_active');
    enterprise_text_svg.classList.add('enterprise_text_svg_active');
    business_text_svg.classList.remove('business_text_svg_active');
    business_text_redirect.classList.remove('business_text_redirect_active');
    software_text_redirect.classList.remove('software_text_redirect_active');
    software_text_svg.classList.remove('software_text_svg_active');
    cloud_text_redirect.classList.remove('cloud_text_redirect_active');
    cloud_text_svg.classList.remove('cloud_text_svg_active');
    machine_text_redirect.classList.remove('machine_text_redirect_active');
    machine_text_svg.classList.remove('machine_text_svg_active');


    active_enterprise_tag.classList.add('active_enterprise_tag');
    active_business_tag.classList.remove('active_business_tag');
    active_software_tag.classList.remove('active_software_tag');
    active_cloud_tag.classList.remove('active_cloud_tag');
    active_machine_tag.classList.remove('active_machine_tag');
})
business_tag.addEventListener('mouseenter', ()=>
{
    business_text_svg.classList.add('business_text_svg_active');
    business_text_redirect.classList.add('business_text_redirect_active');

    enterprise_text_redirect.classList.remove('enterprise_text_redirect_active');
    enterprise_text_svg.classList.remove('enterprise_text_svg_active');
    software_text_redirect.classList.remove('software_text_redirect_active');
    software_text_svg.classList.remove('software_text_svg_active');
    cloud_text_redirect.classList.remove('cloud_text_redirect_active');
    cloud_text_svg.classList.remove('cloud_text_svg_active');
    machine_text_redirect.classList.remove('machine_text_redirect_active');
    machine_text_svg.classList.remove('machine_text_svg_active');


    active_business_tag.classList.add('active_business_tag');
    active_enterprise_tag.classList.remove('active_enterprise_tag')
    active_software_tag.classList.remove('active_software_tag');
    active_cloud_tag.classList.remove('active_cloud_tag');
    active_machine_tag.classList.remove('active_machine_tag');

})
software_tag.addEventListener('mouseenter', ()=>
{
    software_text_redirect.classList.add('software_text_redirect_active');
    software_text_svg.classList.add('software_text_svg_active');

    enterprise_text_redirect.classList.remove('enterprise_text_redirect_active');
    enterprise_text_svg.classList.remove('enterprise_text_svg_active');
    business_text_svg.classList.remove('business_text_svg_active');
    business_text_redirect.classList.remove('business_text_redirect_active');
    cloud_text_redirect.classList.remove('cloud_text_redirect_active');
    cloud_text_svg.classList.remove('cloud_text_svg_active');
    machine_text_redirect.classList.remove('machine_text_redirect_active');
    machine_text_svg.classList.remove('machine_text_svg_active');


    active_software_tag.classList.add('active_software_tag');
    active_enterprise_tag.classList.remove('active_enterprise_tag');
    active_business_tag.classList.remove('active_business_tag');
    active_cloud_tag.classList.remove('active_cloud_tag');
    active_machine_tag.classList.remove('active_machine_tag');

})
cloud_tag.addEventListener('mouseenter', ()=>
{
    cloud_text_redirect.classList.add('cloud_text_redirect_active');
    cloud_text_svg.classList.add('cloud_text_svg_active');

    enterprise_text_redirect.classList.remove('enterprise_text_redirect_active');
    enterprise_text_svg.classList.remove('enterprise_text_svg_active');
    business_text_svg.classList.remove('business_text_svg_active');
    business_text_redirect.classList.remove('business_text_redirect_active');
    software_text_redirect.classList.remove('software_text_redirect_active');
    software_text_svg.classList.remove('software_text_svg_active');
    machine_text_redirect.classList.remove('machine_text_redirect_active');
    machine_text_svg.classList.remove('machine_text_svg_active');



    active_cloud_tag.classList.add('active_cloud_tag');
    active_enterprise_tag.classList.remove('active_enterprise_tag');
    active_software_tag.classList.remove('active_software_tag');
    active_business_tag.classList.remove('active_business_tag');
    active_machine_tag.classList.remove('active_machine_tag');

})
machine_tag.addEventListener('mouseenter', ()=>
{
    machine_text_redirect.classList.add('machine_text_redirect_active');
    machine_text_svg.classList.add('machine_text_svg_active');

    enterprise_text_redirect.classList.remove('enterprise_text_redirect_active');
    enterprise_text_svg.classList.remove('enterprise_text_svg_active');
    business_text_svg.classList.remove('business_text_svg_active');
    business_text_redirect.classList.remove('business_text_redirect_active');
    software_text_redirect.classList.remove('software_text_redirect_active');
    software_text_svg.classList.remove('software_text_svg_active');
    cloud_text_redirect.classList.remove('cloud_text_redirect_active');
    cloud_text_svg.classList.remove('cloud_text_svg_active');


    active_machine_tag.classList.add('active_machine_tag');
    active_enterprise_tag.classList.remove('active_enterprise_tag');
    active_cloud_tag.classList.remove('active_cloud_tag');
    active_software_tag.classList.remove('active_software_tag');
    active_business_tag.classList.remove('active_business_tag');
})


// const service_text_redirect = document.getElementById('service_text_redirect');
// const service_text_svg = document.getElementById('service_text_svg');



// enterprise_tag.addEventListener('mouseenter', ()=>
// {
//     service_text_redirect.classList.add('service_text_redirect_active');
//     service_text_svg.classList.add('service_text_svg_active');
// })
