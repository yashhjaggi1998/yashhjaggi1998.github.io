
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
                        <li>Successfully served <b>15000+ researchers.</b></li>
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
                        <li>In the initial rollout phase, the tool has <b>served 4000+ users.</b></li>
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
                    <label class="skill">Java</label>
                    <label class="skill">JavaScript</label>
                    <label class="skill">JQuery</label>
                    <label class="skill">Node.js</label>
                    <label class="skill">AWS</label>
                    <label class="skill">Git</label>
                    <label class="skill">Typescript</label>
                    <label class="skill">Jenkins</label>
                    <label class="skill">SonarCloud</label>
                    <label class="skill">Windows Services</label>
                    <label class="skill">HTML</label>
                    <label class="skill">CSS</label>
                    <label class="skill">XML</label>
                    <label class="skill">JSON</label>
                </div><br>

                <div>
                    <p class="overview"><b>Overview</b></p>
                    <p> At Persistent Systems, I was engaged in the task of developing Static Security Application Testing (SAST) plugins for a client
                        on tools like Azure Devops, VSCode, Jenkins and Atlassian Bamboo. I was also responsible to develop REST APIs
                        to read, update, delete from security scan engine.</p>
                </div>

                <div>
                    <p class="responsibilities"><b>Key Responsibilities</b></p>
                    <ol>
                        <li><b style="color: rgb(157, 34, 53);">Software Development:</b> Developed REST APIs using Node.js and Typescript framework. 
                        Built a middleware for plugins from various tools to communicate with a common backend.
                        Additionally, deployed these services on AWS to achieve scalability and 24x7 availability of backend services across domains.</li>
                    </ol>
                </div>

                <div>
                    <p class="achievements"><b>Achievements</b></p>
                    <ul>
                        <li>Transitions to AWS hosting helped reduce infrastructure costs by 20%.</li>
                        <li>Migration of backend services from Java-servlets run on Virtual machines to REST APIs hosted on AWS improved the overall throughput by 45%.</li>
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
    let Str = ` <table class="table">
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
                </table>`;
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