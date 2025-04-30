import React, { useEffect, useState } from 'react';
import '../styles/blog.css';
import { Link, NavLink } from 'react-router-dom';
import api from '../api';
import imageUrl from '../imageurl';
import Footer from './footer';
import Spinner from './spinner';


function Blog() {
    const [blogposts, setBlogposts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(''); // Default to all
    const [activeCategory, setActiveCategory] = useState('');
    const [loading,setLoading] = useState(false)
    activeCategory ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    const fetchBlogPosts = async (category) => {
        try{
        setLoading(true)
        const response = await api.get('post/', {
            params: { category } 
        });
        setLoading(false)
        console.log(response.data);
        setBlogposts(response.data);
    }catch(error){
        console.log(error)
        setLoading(false)
    }
    };

    useEffect(() => {
        fetchBlogPosts(selectedCategory); 
    }, [selectedCategory]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category); // Set the selected category
        setActiveCategory(category);   // Set the active category
    };
     if(loading){
        return(
            <Spinner/>
        )
     }
    return (
        <>
        <div className='blog'>
            <header>
                Blog
            </header>
           
            <nav>
                <NavLink 
                    to="#" 
                    className={selectedCategory === '' ? 'active' : 'notactive'}
                    onClick={() => handleCategoryClick('')}
                >
                    All
                </NavLink>
                <NavLink 
                    to="#" 
                    className={selectedCategory === 'cake recipes and baking tips' ? 'active' : 'notactive'}
                    onClick={() => handleCategoryClick('cake recipes and baking tips')}
                >
                    Baking tips
                </NavLink>
                <NavLink 
                    to="#" 
                    className={selectedCategory === 'celebration ideas' ? 'active' : 'notactive'}
                    onClick={() => handleCategoryClick('celebration ideas')}
                >
                    Celebration ideas
                </NavLink>
                <NavLink 
                    to="#" 
                    className={selectedCategory === 'cake design trends' ? 'active' : 'notactive'}
                    onClick={() => handleCategoryClick('cake design trends')}
                >
                    Cake Design trends
                </NavLink>
                <NavLink 
                    to="#" 
                    className={selectedCategory === 'behind the scenes' ? 'active' : 'notactive'}
                    onClick={() => handleCategoryClick('behind the scenes')}
                >
                    Behind the scenes
                </NavLink>
                <NavLink 
                    to="#" 
                    className={selectedCategory === 'seasonal and holiday specials' ? 'active' : 'notactive'}
                    onClick={() => handleCategoryClick('seasonal and holiday specials')}
                >
                    Holiday specials
                </NavLink>
            </nav>

            <section className='blogposts-holder'>
                {blogposts.map((post) => (
                    <Link key={post.id} to={`/content/${post.slug}`} style={{color:'inherit'}}>
                    <article className='blogpost'>
                        <img src={`${imageUrl}${post.image}`} alt={post.title} />
                        <p>{post.category} &nbsp;&nbsp;&nbsp;&nbsp;{post.formatted_date}</p>
                        <h4>{post.title}</h4>
                        <p>{post.excerpt}</p>
                    </article>
                    </Link>
                ))}
            </section>
        </div>
        <Footer/>
        </>
    );
}

export default Blog;
