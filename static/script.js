
function showWorkEx()
{
    removeActiveLink();
    document.getElementById("WORK_EX").classList.add("ACTIVE_LINK");
    document.getElementById("content_area").innerHTML = fillWorkEx();
}

function showMyLLMJourney()
{
    removeActiveLink();
    document.getElementById("MY_LLM_JOURNEY").classList.add("ACTIVE_LINK");

    document.getElementById("content_area").innerHTML = "Under Construction.... Good things take time:)";
    //document.getElementById("content_area").innerHTML = fillMyLLMJourney();
}

function showProjects()
{
    removeActiveLink();
    document.getElementById("PROJECTS").classList.add("ACTIVE_LINK");

    document.getElementById("content_area").innerHTML = fillProjects();
    //document.getElementById("content_area").innerHTML = "Under Construction.... Good things take time:)";
}

function showResume()
{    
    removeActiveLink();
    document.getElementById("RESUME").classList.add("ACTIVE_LINK");

    document.getElementById("content_area").innerHTML = fillResume();
}

function showEdHistory()
{    
    removeActiveLink();
    document.getElementById("ED_HISTORY").classList.add("ACTIVE_LINK");
    document.getElementById("content_area").innerHTML = fillEdHistory();
}


//------------------ HTML Filler Functions ------------------//
function fillWorkEx()
{
    let Str =  `
        <div class="workExCard card shadow bg-white rounded-2 cursor-pointer m-5" onmouseover="collapseShow('CNI_DESCR')" onmouseout="collapseHide('CNI_DESCR')">

            <div class="card-header workExCardHeader p-4">
                <div class="row">
                    <div class="col-10">
                        <h4 class="mb-3">
                            <span style="color:rgb(157, 34, 53)">U</span><span style="color:rgb(255, 199, 44)">S</span><span style="color:rgb(157, 34, 53)">C</span> - 
                            Core Center for Nano Imaging
                        </h4>

                        <h5 class="text-muted">
                            Full-Stack Software Engineer (Full-Time)
                        </h5>
                        <h6 class="text-muted">
                            Los Angeles, CA
                        </h6>
                        <h6 class="text-muted">
                            Jan 2023 - May 2024
                        </h6>
                    </div>
                    <div class="col-2 text-end align-top">
                        <img src="static/img/USC-logo.png" alt="USC Logo" style="height: 50px; border-radius: 0%;">
                    </div>
                </div>
            </div>

            <div class="card-body workExCardBody" id="CNI_DESCR" style="display: none;">
                <div>
                    <p style="font-size: 20px"><b>Skills</b></p>
                    <label class="skill">React</label>
                    <label class="skill">Node.js</label>
                    <label class="skill">Typescript</label>
                    <label class="skill">SQL</label>
                    <label class="skill">Prisma Client</label>
                    <label class="skill">JavaScript</label>
                    <label class="skill">PHP</label>
                    <label class="skill">MS Azure Cloud</label>
                    <label class="skill">Git</label>
                </div><br>

                <div>
                    <p class="overview"><b>Overview</b></p>
                    <p> At CNI, I worked on the official CNI workbench (webapp + desktop) that served scientific equipment to USC and external researcher community.
                    </p>
                </div>

                <div>
                    <p class="responsibilities"><b>Key Responsibilities</b></p>
                    <ol>
                        <li>
                            <b style="color: rgb(157, 34, 53);">Backend API Migration:</b>
                            Led the migration of the official CNI website from PHP to node.js using typescript.
                        </li>
                        <li>
                            <b style="color: rgb(157, 34, 53);">Frontend Development:</b>
                            Closely worked with the UI/UX team to understand the user requirements and developed the frontend using React.
                        </li>
                        <li>
                            <b style="color: rgb(157, 34, 53);">Single Sign-On Integration:</b>
                            Collaborated with the MS Azure team to integrate the official CNI website with the USC SSO to enable secure access to the website and avoid any bad actors.
                        </li>
                        <li>
                            <b style="color: rgb(157, 34, 53);">Revamped Instrument Booking Logic:</b>
                            Engineered and revamped the instrument booking logic to reduce instrument overbooking & enable the users to book the instruments in a more efficient manner.
                        </li>
                        <li>
                            <b style="color: rgb(157, 34, 53);">Database Migration:</b>
                            Migrated the database from MySQL to PostgreSQL using Prisma client.
                        </li>
                        <li>
                            <b style="color: rgb(157, 34, 53);">Cloud Deployment & Maintenance:</b>
                            Led Migration of server from local mail server of PHP to MS Azure. 
                        </li>
                    </ol>
                </div>

                <div>
                    <p class="achievements"><b>Achievements</b></p>
                    <ul>
                        <li>Successfully served <b>15,000+ researchers.</b></li>
                        <li>By migrating the backend API, helped <b>reduce the API latency by 30%.</b></li>
                        <li>Helped <b>reduced</b> the number of instrument <b>overbooked hours by 50%.</b></li>
                </ul> 
                </div><br>  
            </div>
        </div>

        <div class="workExCard card shadow bg-white rounded-2 cursor-pointer m-5" onmouseover="collapseShow('NORTHWEST_DESCR')" onmouseout="collapseHide('NORTHWEST_DESCR')">
            
            <div class="card-header workExCardHeader p-4">
                <div class="row">
                    <div class="col-10">
                        <h4 class="mb-3">
                            Northwest Bank
                        </h4>

                        <h5 class="text-muted">
                            Software Engineer (Intern)
                        </h5>
                        <h6 class="text-muted">
                            Palo Alto, CA
                        </h6>
                        <h6 class="text-muted">
                            Jan 2024 - May 2024
                        </h6>
                    </div>
                    <div class="col-2 text-end align-top">
                        <img src="static/img/northwest_logo.svg" alt="Northwest Logo" style="height: 30px; border-radius: 0%;">
                    </div>
                </div>
            </div>


            <div class="card-body workExCardBody" id="NORTHWEST_DESCR" style="display: none;">
                <div>    
                    <p style="font-size: 20px"><b>Skills</b></p>
                    <label class="skill">.NET</label>
                    <label class="skill">System Design</label>
                    <label class="skill">JavaScript</label>
                    <label class="skill">Git</label>
                    <label class="skill">MS Server SQL</label>
                    <label class="skill">HTML</label>
                    <label class="skill">Tailwind CSS</label>
                    <label class="skill">Bootstrap</label>
                    <label class="skill">CSS</label>
                </div><br>

                <div>
                    <p class="overview">
                        <b>Overview</b>
                    </p>
                    <p> 
                        At Northwest Bank, I was responsible for designing and developing a scalable feedback collection system to understand health of the products used and the user pain points.
                    </p>
                </div>

                <div>
                    <p class="responsibilities">
                        <b>Key Responsibilities</b>
                    </p>
                    <ol>
                        <li>
                            <b style="color: rgb(157, 34, 53);">System Design:</b> Engaged with stakeholders like CIO, and product managers to understand, document the requirements and based on that designed the system architecture.
                        </li>
                        <li>
                            <b style="color: rgb(157, 34, 53);">Software Development:</b> Developed the feedback collection system using .NET (MVC) framework. For the frontend, used Javascript, HTML, Tailwind CSS and Bootstrap to design the UI.
                        </li>
                    </ol>
                </div>

                <div>
                    <p class="achievements"><b>Achievements</b></p>
                    <ul>
                        <li>In the initial rollout phase, the tool has <b>served 4,000+ users.</b></li>
                        <li>Tool helped the bank <b>improve</b> the <b>product adoption rate by 25%.</b></li>
                    </ul> 
                </div><br>
            </div>
        </div>




        <div class="workExCard card shadow bg-white rounded-2 cursor-pointer m-5" onmouseover="collapseShow('CAPSICO_HEALTH_DESCR')" onmouseout="collapseHide('CAPSICO_HEALTH_DESCR')">

            <div class="card-header workExCardHeader p-4">
                <div class="row">
                    <div class="col-10">
                        <h4 class="mb-3">
                            Capsico Health
                        </h4>

                        <h5 class="text-muted">
                            Software Engineer (Intern)
                        </h5>
                        <h6 class="text-muted">
                            Palo Alto, CA
                        </h6>
                        <h6 class="text-muted">
                            May 2023 - Aug 2023
                        </h6>
                    </div>
                    <div class="col-2 text-end align-top">
                        <img src="static/img/capsico-logo.png" alt="Capsico Health Logo" style="height: 50px; border-radius: 0%;">
                    </div>
                </div>
            </div>
        
            <div class="card-body workExCardBody" id="CAPSICO_HEALTH_DESCR" style="display: none;">
                <div>    
                    <p style="font-size: 20px"><b>Skills</b></p>
                    <label class="skill">JavaScript</label>
                    <label class="skill">Java</label>
                    <label class="skill">Python</label>
                    <label class="skill">Gooogle Cloud Platform (GCP)</label>
                    <label class="skill">Git</label>
                    <label class="skill">PostgreSQL</label>
                    <label class="skill">Windows</label>
                    <label class="skill">Linux</label>
                    <label class="skill">HTML</label>
                    <label class="skill">CSS</label>
                    <label class="skill">JSON</label>
                </div><br>

                <div>
                    <p class="overview">
                        <b>Overview</b>
                    </p>
                    <p> 
                        At Capsico Health, I designed and built a scalable system for running Large Language Models(LLM) to predict patient care routine. Working in an agile development environment, I closely worked with Machine Learning engineers to understand LLM architecture and then used that information to design the workbench system.
                    </p>
                </div>

                <div>
                    <p class="responsibilities">
                        <b>Key Responsibilities</b>
                    </p>
                    <ol>
                        <li>
                            <b style="color: rgb(157, 34, 53);">System Design:</b> Designed the workbench system architecture and database schema.
                        </li>
                        <li>
                            <b style="color: rgb(157, 34, 53);">Software Development:</b> Implemented a user-friendly GUI and backend services using Java-servlets to enable the usability of the LLM workbench.
                            Additionally, developed REST APIs to run LLMs and deployed them on GCP, resulting in seamless integration with the backend services. 
                            Deploying and running the models on the cloud reduced the infrastructure cost by 25% and allowed 
                            cross-domain access to the models.
                        </li>
                    </ol>
                </div>

                <div>
                    <p class="achievements"><b>Achievements</b></p>
                    <ul>
                        <li>Took full ownership and proactively met all deadlines, resulting in the successful completion of the workbench</li>
                        <li>Deployment of LLM resulted in a 60% increase in user count.</li>
                    </ul> 
                </div><br>
            </div>
        </div>
        



        <div class="workExCard card shadow bg-white rounded-2 cursor-pointer m-5" onmouseover="collapseShow('PERSISTENT_SYSTEMS_DESCR')" onmouseout="collapseHide('PERSISTENT_SYSTEMS_DESCR')">

            <div class="card-header workExCardHeader p-4">
                <div class="row">
                    <div class="col-10">
                        <h4 class="mb-3">
                            Persistent Systems
                        </h4>

                        <h5 class="text-muted">
                            Full-Stack Software Engineer (Full-Time)
                        </h5>
                        <h6 class="text-muted">
                            Pune, India
                        </h6>
                        <h6 class="text-muted">
                            Aug 2020 - Jul 2022
                        </h6>
                    </div>
                    <div class="col-2 text-end align-top">
                        <img src="static/img/Persistent-logo.png" alt="Persistent Logo" style="height: 50px; border-radius: 0%;">
                    </div>
                </div>
            </div>
                    
            <div class="card-body workExCardBody" id="PERSISTENT_SYSTEMS_DESCR" style="display: none;">
                
                <div>
                    <h5>Skills</h5>
                    <label class="skill">Node.js</label>
                    <label class="skill">Typescript</label>
                    <label class="skill">Java</label>
                    <label class="skill">JavaScript</label>
                    <label class="skill">AWS</label>
                    <label class="skill">Git</label>
                    <label class="skill">Tailwind CSS</label>
                    <label class="skill">HTML</label>
                    <label class="skill">Jenkins</label>
                    <label class="skill">JQuery</label>
                    <label class="skill">SonarCloud</label>
                    <label class="skill">Windows Services</label>
                    <label class="skill">XML</label>
                    <label class="skill">JSON</label>
                </div><br>

                <div>
                    <p class="overview"><b>Overview</b></p>
                    <p> At Persistent Systems, I was responsible for developing VSCode, Jenkins, Azure Devops and Atlassian Bamboo plugins for <b>Checkmarx SAST (Static Application Security Testing)</b> tool to allow users to scan their codebase foe vulnerabilities.
                    </p>
                    
                    
                </div>

                <div>
                    <p class="responsibilities"><b>Key Responsibilities</b></p>
                    <ol>
                        <li>
                            <b style="color: rgb(157, 34, 53);">Backend Development:</b>
                            Engineered back end RESTful API endpoints in node.js using typescript to upload the codebase to the Checkmarx server for scanning. This led to Checkmarx replacing their existing legacy SOAP API written in JAVA with the new RESTful API.
                        </li>
                        <li>
                            <b style="color: rgb(157, 34, 53);">Frontend Development:</b>
                            On the frontend side, I closely worked with the UX team to understand the user behavior, created mockups to understand user interation patterns and designed the UI in a way that would be more intuitive for the users. I implementated the frontend using javascript, HTML and bootstrap.
                        </li>
                        <li>
                            <b style="color: rgb(157, 34, 53);">Code Deployment</b>
                            Closely worked with the DevOps team to deploy the codebase on AWS cloud services to achieve high availability and scalability.
                        </li>
                    </ol>
                </div>

                <div>
                    <p class="achievements"><b>Achievements</b></p>
                    <ul>
                        <li>Served <b>50,000+ users</b> across the globe.</li>
                        <li>Backend migration helped <b>improve the overall throughput by 45%.</b></li>
                    </ul> 
                </div><br>  
            </div>
        </div>
                

        <div class="workExCard card shadow bg-white rounded-2 cursor-pointer m-5" onmouseover="collapseShow('UBS_DESCR')" onmouseout="collapseHide('UBS_DESCR')">

            <div class="card-header workExCardHeader p-4">
                <div class="row">
                    <div class="col-10">
                        <h4 class="mb-3">
                            UBS - Union Bank of Switzerland
                        </h4>

                        <h5 class="text-muted">
                            Software Engineer (Intern)
                        </h5>
                        <h6 class="text-muted">
                            Pune, India
                        </h6>
                        <h6 class="text-muted">
                            May 2019 - Aug 2019
                        </h6>
                    </div>
                    <div class="col-2 text-end align-top">
                        <img src="static/img/UBS-logo.jpeg" alt="UBS Logo" style="height: 70px; border-radius: 0%;">
                    </div>
                </div>
            </div>

            <div class="card-body workExCardBody" id="UBS_DESCR" style="display: none;">
                <div>
                    <h5>Skills</h5>
                    <label class="skill">Python</label>
                    <label class="skill">Flask</label>
                    <label class="skill">Scikit-learn</label>
                    <label class="skill">Numpy</label>
                    <label class="skill">Pandas</label>
                    <label class="skill">Git</label>
                    <label class="skill">MS Azure</label>
                </div><br>

                <div>
                    <p class="overview"><b>Overview</b></p>
                    <p> At UBS, I was worked to built a k-means model to efficiently cluster unresolved chatbot queries and leveraged
                        the clustered data to train the chatbot to improve performance with respect to resolving greater number of user queries.
                        Moreover, I developed REST APIs that analysed client data collected from the chatbot conversations 
                        and provided valuable business insights.</p>
                </div>

                <div>
                    <p class="responsibilities"><b>Key Responsibilities</b></p>
                    <ol>
                        <li><b style="color: rgb(157, 34, 53);">Software Development:</b> Developed REST APIs using Flask framework. Tested the endpoints and deployed them on MS Azure Cloud service.</li>
                        <li><b style="color: rgb(157, 34, 53);">Machine Learning Engineering:</b> Built and trained k-means clustering model using scikit-learn, numpy and pandas libraries in python.</li>
                    </ol>
                </div>

                <div>
                    <p class="achievements"><b>Achievements</b></p>
                    <ul>
                        <li>My work helped improve the accuracy of the chatbot by 20%.</li>
                </ul> 
                </div><br>  
            </div>
        </div>
        `;
    
                return Str;
}

function fillProjects()
{
    let Str = `
        <div class="row">

            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        
                        <video width="100%" muted controls>
                            <source src="static/videos/Dashboard.mov" type="video/mp4">
                        </video>

                        <h5 class="card-title">Interactive Dashboard &nbsp; <span class="badge text-bg-warning">New</span> </h5>
                        
                        <a target="_blank" href="https://github.com/yashhjaggi1998/Interview-Review-Dashboard" style="color:black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                        </a>

                        <br>
                        <br>

                        <span><b>Learning Objective</b></span><br>
                        <ul>
                            <li>
                                <a target="_blank" href="https://ui.shadcn.com/" class="text-decoration-none">
                                    React, Shadcn UI
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://nextjs.org/" class="text-decoration-none">
                                    NextJs
                                </a>
                            </li>
                        </ul>

                        <a target="_blank" href="https://smart-interview-review-dashboard-mock-ai.vercel.app/" class="btn btn-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
                                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4z"/>
                                    </svg>
                                    Live Demo
                                </a>

                    </div>
                </div>
            </div>

            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <video width="100%">
                            <source src="static/videos/OpenAPI.mp4" type="video/mp4">
                        </video>
                        <h5 class="card-title>"></h5>

                        <h5 class="card-title">Service to Schema - Java &nbsp; <span class="badge text-bg-warning">New</span> </h5>

                        <a target="_blank" href="https://github.com/yashhjaggi1998/EventSourcing-Banking" style="color:black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                        </a>

                        <br>
                        <br>

                        <span><b>Learning Objective</b></span><br>
                        <ul>
                            <li>
                                <a target="_blank" href="https://joehonour.medium.com/java-developing-a-spring-service-using-an-openapi-contract-first-approach-37dfd6422a9c" class="text-decoration-none">
                                    Service-to-schema methodology
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://martinfowler.com/eaaDev/EventSourcing.html" class="text-decoration-none">
                                    Event sourcing.
                                </a>
                            </li>
                        </ul>

                        <span><b>Description</b><span><br>
                        <span class="text-secondary">
                        This application supports a simple bank ledger using the event sourcing pattern to maintain an immutable transaction history. We use a service.yml file to define request, response and model classes for the add funds and remove funds APIs. Each event records details like transaction type, amount, timestamp, and account identifier. 
                        </span>

                        
                    </div>
                </div>
            </div>

            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <video width="100%" autoplay muted controls>
                            <source src="static/videos/EventSearch_WebApp.mp4" type="video/mp4">
                        </video>
                        <h5 class="card-title">Event Search - Web Application</h5>
                    </div>
                </div>
            </div>

        </div>

        <div class="row">
            
            <div class="col-6">
                <div class="card">
                    <div class="card">
                        <div class="card-body">
                            <video width="100%" height="320" muted controls>
                                <source src="static/videos/EventSearch_Android.mp4" type="video/mp4">
                            </video>
                            <h5 class="card-title">Event Search - Android Application</h5>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="col-6">
                <div class="card">
                    
                <div class="card-body">
                <video width="100%" height="320" muted controls>
                    <source src="static/videos/Game_Dev.mp4" type="video/mp4">
                </video>
                <h5 class="card-title>">2D Running Platformer Game</h5>
            </div>
                </div>
            </div>
        </div>
    
    `;

    /*let Str = ` <table class="table">
                    <tr>
                        <td>
                            <video width="500" height="320" autoplay muted controls>
                                <source src="static/videos/EventSearch_WebApp.mp4" type="video/mp4">
                            </video>
                            <p>Event Search - Web Application</p>
                        </td>
                        <td>
                            <video width="500" height="320" muted controls>
                                <source src="static/videos/EventSearch_Android.mp4" type="video/mp4">
                            </video>
                            <p>Event Search - Android Application</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <video width="500" height="320" muted controls>
                                <source src="static/videos/Game_Dev.mp4" type="video/mp4">
                            </video>
                            <p>Souldiers - 2D Platformer Game</p>
                        </td>
                        <td></td>
                    </tr>
                </table>`;*/
    return Str;
}

function fillResume()
{
    let Str =  `<div class="card" style="width: 45rem; ">
                    <img class="card-img-top" src="static/pdf/Resume_Image.png" height="80%" alt="Yashh Jaggi Resume Image">
                    <div class="card-body">
                        <a href="static/pdf/Yashh_Jaggi_Resume.pdf" target="_blank" id="VIEW_RESUME">View Resume</a>
                    </div>
                </div>`;
    return Str;
}

function fillEdHistory()
{
    let Str =  `
    <div class="card m-5" onmouseover="collapseEdShow('USC_HEAD', 'USC_DESCR')" onmouseout="collapseEdHide('USC_HEAD', 'USC_DESCR')">
        
        <div class="card-header p-3" id="USC_HEAD" style="background-color: rgb(255, 199, 44)!important; color: rgb(157, 34, 53)">
            <div class="row">
                <div class="col-10">

                    <h4><b>University of Southern California</b> | Los Angeles, CA</h4>
                    <h5 class="mb-3"><b>Viterbi School of Engineering</b></h5>
                    <h6>Masters of Science | Computer Science</h6>
                    <h6>Aug 2022 - May 2024</h6>
                    <br>
                    <p><b>Achievements</b></p>
                    <ul>
                        <li><h6><b>GPA:</b> 4.0</h6></li>
                        <li><h6><b>HONORS:</b> MS CS Honors</h6></li>
                        <li><h6><b>Teaching Assistant for CSCI572</b></h6></li>
                        <li><h6><b>GOOGLE exploreCSR Mentor</b></h6></li>
                    </ul>
                </div>

                <div class="col-2 text-end align-top">
                    <img src="static/img/USC-logo.png" alt="USC Logo" style="height: 50px; border-radius: 0%;">
                </div>
            </div>
        </div>


        <div class="card-body" id="USC_DESCR" style="display: none;">
            <h5>Courses Taken</h5>
            <ul>
                <li>Analysis of Algorithms - Grade A</li>
                <li>Database Management Systems - Grade A</li>
                <li>Web Technologies - Grade A</li>
                <li>Advanced Mobile Devices and Games - Grade A</li>
            </ul>
        </div>
    </div>

    <div class="card m-5" onmouseover="collapseEdShow('PICT_HEAD', 'PICT_DESCR')" onmouseout="collapseEdHide('PICT_HEAD', 'PICT_DESCR')">

        <div class="card-header p-3" id="PICT_HEAD" style="background-color: rgb(255, 199, 44)!important; color: rgb(157, 34, 53)">
            <h4 class="mb-3"><b>Pune Institute of Computer Technology</b> | Pune, India</h4>
            <h6>Bachelor of Engineering | Computer Engineering</h6>
            <h6><b>GPA:</b> 9.42 out of 10</h6>
            <h6>Aug 2016 - May 2020</h6>
        </div>
        <div class="card-body" id="PICT_DESCR" style="display: none;">
            <h5>Courses Taken</h5>
            <ul>
                <li>Machine Learning</li>
                <li>Systems Programming & Operating System</li>
                <li>Object Oriented Programming</li>
                <li>Advanced Data Structures & Algorithms</li>
                <li>Information & Cyber Security Technologies</li>
                <li>Data Mining & Warehousing</li>
            </ul>
        </div>
    </div>`;
    return Str;
}

//------------------ Helper Functions ------------------//
function removeActiveLink()
{
    let allListElements = document.querySelectorAll("*");
    allListElements.forEach((element) => {element.classList.remove('ACTIVE_LINK');});
}

function collapseShow(target_id)
{
    document.getElementById(target_id).style.display = "block";
}

function collapseHide(target_id)
{
    document.getElementById(target_id).style.display = "none";
}

function collapseEdShow(src_id, target_id)
{
    //document.getElementById(target_id).style.height = "block";
    document.getElementById(target_id).style.display = "block";
}

function collapseEdHide(src_id, target_id)
{
    document.getElementById(target_id).style.display = "none";
}

//showWorkEx();
showProjects();