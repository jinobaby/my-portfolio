import React from 'react'
import './Styles/Experience.css'
import ShinyText from './templates/ShinyText'


function Projects() {
    return (
        <div className="exp-flex-container">
            <h2 className='about-title'>Projects</h2>
            <div className="flex-container">
                <div className="exp-grid">
                    <div className='exp-item project-card'>
                        <div className='project-image'>
                            <img src="" alt="AI Resume Optimizer" />
                            <div className='project-overlay'>
                                <span className='project-category'>AI/ML</span>
                                <span className='project-category'>Full Stack</span>
                            </div>
                        </div>
                        <div className='project-content'>
                            <div className='exp-header'>
                                <div className='role-title'>ReMatch — AI‑Powered Resume Parser & Ranker</div>
                                <div className='project-status completed'>Completed</div>
                            </div>
                            <div className='project-tech'>React • Node • Express • MongoDB • Javascript • OpenAI API</div>
                            <ShinyText className='project-description' text={"Built a 48‑hour hackathon MVP where recruiters can batch‑upload PDF/DOCX resumes in‑memory and instantly get skill‑extracted, GPT‑driven relevance scores and ranked shortlists against any job description. While job seekers see personalized recommendations,  all powered by a custom NLP pipeline and a MERN‑stack architecture for seamless, real‑time performance."} />
                            <div className='project-links'>
                                <a href="#" className='project-link'>GitHub</a>
                                <a href="" className='project-link demo'>Live Demo</a>
                            </div>
                        </div>
                    </div>

                    {/* Full Stack Personal Finance Optimiser */}
                    <div className='exp-item project-card'>
                        <div className='project-image'>
                            <img src="/my-portfolio/Screenshot 2025-07-16 163353.png" alt="Personal Finance Optimiser" />
                            <div className='project-overlay'>
                                <span className='project-category'>Full Stack</span>
                            </div>
                        </div>
                        <div className='project-content'>
                            <div className='exp-header'>
                                <div className='role-title'>Aureus - Personal Finance Optimiser</div>
                                <div className='project-status development'>In Progress</div>
                            </div>
                            <div className='project-tech'>TensorFlow  • Javascript • Node • Express • Tailwind • MongoDB • React </div>
                            <ShinyText className='project-description' text={"Building Aureus, an end‑to‑end web app that empowers users to track spending, forecast budgets, and optimize investment portfolios with real‑time, machine‑learning‑powered recommendations. I architected a React‑based dashboard, designed and deployed custom TensorFlow pipelines (via FastAPI) to analyze transaction data in‑memory, and implemented MongoDB backed storage for secure user profiles. The result is a seamless, responsive platform that delivers personalized financial insights and actionable alerts."} />
                            <div className='project-links'>
                                <a href="https://github.com/jinobaby/Aureus---The-Finance-Optimiser" className='project-link'>GitHub</a>
                                <a href="#" className='project-link demo'>Live Demo</a>
                            </div>
                        </div>
                    </div>

                    {/* E-commerce Platform */}
                    <div className='exp-item project-card'>
                        <div className='project-image'>
                            <img src="/my-portfolio/Ecommere.png" alt="E-commerce Platform" />
                            <div className='project-overlay'>
                                <span className='project-category'>E-commerce</span>
                            </div>
                        </div>
                        <div className='project-content'>
                            <div className='exp-header'>
                                <div className='role-title'>Neo Cart</div>
                                <div className='project-status development'>In Progress</div>
                            </div>
                            <div className='project-tech'>React • Javascript • Node • Express • MongoDB</div>
                            <ShinyText className='project-description' text={"I’m building NeoCart, a robust E-commerce platform with dedicated User and Admin modules. It lets users shop, manage carts, and securely authenticate, while admins oversee products and store operations. Built with Node.js, Express, React, and MongoDB, NeoCart is designed for scalability, clean UI, and real-world deployment. This project demonstrates my ability to deliver production-ready solutions from the ground up."} />

                            <div className='project-links'>
                                <a href="#" className='project-link'>GitHub</a>
                                <a href="#" className='project-link demo'>Live Demo</a>
                            </div>
                        </div>
                    </div>

                    {/* Dating Website */}
                    <div className='exp-item project-card'>
                        <div className='project-image'>
                            <img src="" alt="Dating Website" />
                            <div className='project-overlay'>
                                <span className='project-category'>Dating Website</span>
                            </div>
                        </div>
                        <div className='project-content'>
                            <div className='exp-header'>
                                <div className='role-title'>Just Us</div>
                                <div className='project-status completed'>Completed</div>
                            </div>
                            <div className='project-tech'>Handlebars • Javascript • Node • Express • MongoDB</div>
                            <ShinyText className='project-description' text={"Just Us is a modern dating app built and designed to help users form genuine connections through smart matching and real-time chat. Unlike typical dating platforms, it emphasizes meaningful interactions over endless swiping, using advanced algorithms to match people based on shared interests and conversation compatibility. The app is lightweight, privacy-focused, and offers a seamless experience for discovering matches, chatting, and managing profiles, making it perfect for anyone seeking real relationships in a safe, user-friendly environment."} />
                            <div className='project-links'>
                                <a href="#" className='project-link'>GitHub</a>
                                <a href="#" className='project-link demo'>Demo Video</a>
                            </div>
                        </div>
                    </div>

                    {/* Cryptocurrency Trading Bot */}
                    <div className='exp-item project-card'>
                        <div className='project-image'>
                            <img src="https://imgs.search.brave.com/S72AalJEF9kFKiqv3VsFrLc3IOYNzp0YlpVbcenazNo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9pbnRlcmFjdGl2/ZS1tYWxsLWtpb3Nr/LWRpZ2l0YWwta2lv/c2stbWFsbC13aGVy/ZS1zaG9wcGVycy1j/YW4tZmluZC1zdG9y/ZS1pbmZvcm1hdGlv/bi1wcm9tb185OTU1/NzgtMTE2NTMuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MA" alt="KI" />
                            <div className='project-overlay'>
                                <span className='project-category'>C</span>
                            </div>
                        </div>
                        <div className='project-content'>
                            <div className='exp-header'>
                                <div className='role-title'>KIOSK Self Ordering</div>
                                <div className='project-status completed'>Completed</div>
                            </div>
                            <div className='project-tech'>C</div>
                            <ShinyText className='project-description' text={"KIOSK Self Ordering is a user-friendly application designed to streamline the ordering process in fast-food restaurants. It allows customers to place their orders directly from a kiosk, reducing wait times and improving order accuracy. The application features a modern interface, real-time menu updates, and secure payment processing, making it an ideal solution for busy dining environments."} />
                            <div className='project-links'>
                                <a href="#" className='project-link'>GitHub</a>
                                <a href="#" className='project-link demo'>Documentation</a>
                            </div>
                        </div>
                    </div>

                    {/* Shopify */}
                    <div className='exp-item project-card'>
                        <div className='project-image'>
                            <img src="" alt="Shopify Website" />
                            <div className='project-overlay'>
                                <span className='project-category'>Freelance</span>
                            </div>
                        </div>
                        <div className='project-content'>
                            <div className='exp-header'>
                                <div className='role-title'>Niya - Women Apparel </div>
                                <div className='project-status live'>Live</div>
                            </div>
                            <div className='project-tech'>Shopify</div>
                            <ShinyText className='project-description' text={"As a freelance full‑stack developer, I architected a fully responsive Shopify storefront for Niya by crafting custom Liquid templates, dynamic product filters, and secure payment integrations. Leveraging mobile‑first Tailwind CSS for pixel‑perfect designs, I configured inventory management, automated email workflows, and delivered a polished, production‑ready platform that drives engagement and conversions."} />
                            <div className='project-links'>
                                <a href="#" className='project-link'>GitHub</a>
                                <a href="#" className='project-link demo'>Live Demo</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects