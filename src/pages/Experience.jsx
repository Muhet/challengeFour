import React from 'react'

const Experience = () => {
    function updateState(xpId) {
        const xpDivs = document.querySelectorAll('.experience_container');

        for (let index = 0; index < xpDivs.length; index++) {
            const div = xpDivs[index];
            if (div.getAttribute('id') === xpId) {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        }

    }
    return (
        <div className=' mt-28 ml-32 max-sm:ml-24' id="experience">


            <h2 className='text-gray-300 text-3xl font-bold md:ml-20 max-sm:text-xl max-sm:-ml-20'>
                <span className='text-green-300 text-3xl font-mono max-sm:text-xl'> 02.</span>
                Where i've Worked <hr className=' ml-80 w-56 -mt-4 opacity-30  max-sm:ml-56 max-sm:w-32' />
            </h2>



            <div className="ml-44 ">
                <div className=" mt-24  max-w-max max-sm:mt-10 max-sm:-ml-44  ">
                    <ul className=' cursor-pointer max-sm:-ml-20 max-sm:flex '>
                        <li><a href="#" onClick={() => updateState('experienceOne')} className="flex items-center p-2 text-base font-normal text-slate-400 rounded-lg  hover:text-emerald-500 hover:bg-emerald-200 max-sm:text-xs">Upstatement</a></li>
                        <li><a href="#" onClick={() => updateState('experienceTwo')} className="flex items-center p-2 text-base font-normal text-slate-400 rounded-lg  hover:text-emerald-500 hover:bg-emerald-200 max-sm:text-xs">Scout</a></li>
                        <li><a href="#" onClick={() => updateState('experienceThree')} className="flex items-center p-2 text-base font-normal text-slate-400 rounded-lg  hover:text-emerald-500 hover:bg-emerald-200 max-sm:text-xs ">Apple</a></li>
                        <li><a href="#" onClick={() => updateState('experienceFour')} className="flex items-center p-2 text-base font-normal text-slate-400 rounded-lg  hover:text-emerald-500 hover:bg-emerald-200 max-sm:text-xs ">Scout</a></li>
                        <li><a href="#" onClick={() => updateState('experienceFive')} className="flex items-center p-2 text-base font-normal text-slate-400 rounded-lg  hover:text-emerald-500 hover:bg-emerald-200 max-sm:text-xs ">Starry</a></li>
                        <li><a href="#" onClick={() => updateState('experienceSix')} className="flex items-center p-2 text-base font-normal text-slate-400 rounded-lg  hover:text-emerald-500 hover:bg-emerald-200  max-sm:text-xs">MullenLowe</a></li>
                    </ul>
                </div>
                <div className='text-slate-400 pt-7 experience_container max-w-2xl ml-56 -mt-64 max-sm:mt-0 max-sm:-ml-60 max-sm:mx-5' id='experienceOne'>
                    <div className='-mt-2 space-y-3'>
                        <h1 className='text-gray-300 text-2xl font-bold mb-2 max-sm:text-xl'>Engineer<span className='text-emerald-300'> @ Upstatement</span> </h1>
                        <h5 className='font-mono max-sm:text-sm'> May 2018 - Present</h5>
                        <p className='text-xl max-sm:text-lg'>Write modern, performant, maintainable code for a diverse array of client and internal projects</p>
                        <p className='text-xl max-sm:text-lg'>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</p>
                        <p className='text-xl max-sm:text-lg'>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</p>
                    </div>

                </div>


                <div className='experience_container text-slate-400 pt-5 experience_container max-w-xl ml-56 -mt-64 max-sm:mt-0 max-sm:-ml-60 ' id='experienceTwo'>
                    <div className='space-y-3'>
                        <h1 className='text-gray-300 text-2xl font-bold mb-2 max-sm:text-xl'>Studio Developer<span className='text-emerald-300'> @ Scout</span> </h1>
                        <h5 className='font-mono max-sm:text-sm'> January - April 2018</h5>
                        <p className='text-xl max-sm:text-lg'>Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern</p>
                        <p className='text-xl max-sm:text-lg'>Helped solidify a brand direction for blistabloc that spans both packaging and web</p>
                        <p className='text-xl max-sm:text-lg'>Interfaced with clients on a weekly basis, providing technological expertise</p>
                    </div>

                </div>

                <div className='experience_container text-slate-400 pt-5 experience_container max-w-xl ml-56 -mt-64 max-sm:mt-0 max-sm:-ml-60 ' id='experienceThree'>
                    <div className='space-y-3 text-slate-400'>
                        <h1 className='text-gray-300 text-2xl font-bold mb-2 max-sm:text-xl'>UI Engineer Co-op<span className='text-emerald-300'> @ Apple</span> </h1>
                        <h5 className='font-mono max-sm:text-sm'> July - December 2017</h5>
                        <p className='text-xl max-sm:text-lg'>Developed and shipped highly interactive web applications for Apple Music using Ember.js</p>
                        <p className=' text-xl max-sm:text-lg'>Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs</p>
                        <p className='text-xl max-sm:text-lg'>Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser</p>
                        <p className='text-xl max-sm:text-lg'>Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps</p>
                    </div>

                </div>

                <div className='experience_container text-slate-400 pt-5 experience_container max-w-xl ml-56 -mt-64 max-sm:mt-0 max-sm:-ml-60 ' id='experienceFour'>
                    <div className='space-y-3'>
                        <h1 className='text-gray-300 text-2xl font-bold mb-2 max-sm:text-xl'>Studio Developer<span className='text-emerald-300'> @ Scout</span> </h1>
                        <h5 className='font-mono max-sm:text-sm'> January - June 2017</h5>
                        <p className='text-xl max-sm:text-lg'>Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern</p>
                        <p className='text-xl max-sm:text-lg'>Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript</p>
                    </div>
                    <div className='ele0011'></div>
                    <div className='ele0012'></div>
                </div>

                <div className='experience_container text-slate-400 pt-5 experience_container max-w-xl ml-56 -mt-64 max-sm:mt-0 max-sm:-ml-60 ' id='experienceFive'>
                    <div className='space-y-3'>
                        <h1 className='text-gray-300 text-2xl font-bold mb-2 max-sm:text-xl'>Software Engineer Co-op<span className='text-emerald-300'> @  Starry</span> </h1>
                        <h5 className='font-mono max-sm:text-sm'> July - December 2016</h5>
                        <p className='text-xl max-sm:text-lg'>Engineered and maintained major features of Starry's customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS</p>
                        <p className='text-xl max-sm:text-lg'>Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry Station</p>
                        <p className='text-xl max-sm:text-lg'>Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Starry’s iOS and Android mobile apps</p>
                    </div>
                </div>

                <div className='experience_container text-slate-400 pt-5 experience_container max-w-xl ml-56 -mt-64 max-sm:mt-0 max-sm:-ml-60 ' id='experienceSix'>
                    <div className='space-y-3'>
                        <h1 className='text-gray-300 text-2xl font-bold mb-2 max-sm:text-xl'>Creative Technologist Co-op<span className='text-emerald-300'> @ MullenLowe</span> </h1>
                        <h5 className='font-mono max-sm:text-sm'> July - December 2015</h5>
                        <p className='text-xl max-sm:text-lg'>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</p>
                        <p className='text-xl max-sm:text-lg'>Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness</p>
                        <p className='text-xl max-sm:text-lg'>Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Experience;