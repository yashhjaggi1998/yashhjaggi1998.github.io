
function showWorkEx()
{
    removeActiveLink();
    document.getElementById("WORK_EX").classList.add("ACTIVE_LINK");
    document.getElementById("content_area").innerHTML = fillWorkEx();
    //document.getElementById("content_area").innerHTML = "Under Construction.... Good things take time:)";
}


function showProjects()
{
    removeActiveLink();
    document.getElementById("PROJECTS").classList.add("ACTIVE_LINK");

    //document.getElementById("content_area").innerHTML = fillProjects();
    document.getElementById("content_area").innerHTML = "Under Construction.... Good things take time:)";
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
    let Str =  `<div class="card workExCard" onmouseover="collapseShow('CAPSICO_HEALTH_DESCR')" onmouseout="collapseHide('CAPSICO_HEALTH_DESCR')">
                    <div class="card-header workExCardHeader">
                        <p style="font-size: 22px;"><b>CapsicoHealth | AI Workbench</b></p>
                        <p style="font-size: 20px;"><b>Software Engineering Intern </b> | Palo Alto, CA</p>
                        <p style="font-size: 18px;">May 2023 - August 2023</p>
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
                           <p class="overview"><b>Overview</b></p>
                           <p> At Capsico Health, I designed and built a scalable system for running Large Language Models(LLM) to predict patient care routine. 
                                Working in an agile development environment, I closely worked with Machine Learning engineers to understand LLM architecture and 
                                then used that information to design the workbench system.</p>
                        </div>

                        <div>
                            <p class="responsibilities"><b>Key Responsibilities</b></p>
                            <ol>
                                <li><b style="color: rgb(157, 34, 53);">System Design:</b> Designed the workbench system architecture and database schema.</li>
                                <li><b style="color: rgb(157, 34, 53);">Software Development:</b> Implemented a user-friendly GUI and backend services using Java-servlets to enable the usability of the LLM workbench.
                                    Additionally, developed REST APIs to run LLMs and deployed them on GCP, resulting in seamless integration with the backend services. 
                                    Deploying and running the models on the cloud reduced the infrastructure cost by 25% and allowed 
                                    cross-domain access to the models.</li>
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
                <div class="card workExCard" onmouseover="collapseShow('CNI_DESCR')" onmouseout="collapseHide('CNI_DESCR')">
                    <div class="card-header workExCardHeader">
                        <p style="font-size: 22px;"><b>Core Center for Nano Imaging Center - CNI (<span style="color:rgb(157, 34, 53)">U</span><span style="color:rgb(255, 199, 44)">S</span><span style="color:rgb(157, 34, 53)">C</span>)</b></p>
                        <p style="font-size: 20px;"><b>Full Stack Developer</b> | Los Angeles, CA</p>
                        <p style="font-size: 18px;">January 2022 - Present</p>
                    </div>
                    <div class="card-body workExCardBody" id="CNI_DESCR" style="display: none;">
                        <div>
                            <p style="font-size: 20px"><b>Skills</b></p>
                            <label class="skill">React</label>
                            <label class="skill">Node.js</label>
                            <label class="skill">SQL</label>
                            <label class="skill">Prisma Client</label>
                            <label class="skill">Typescript</label>
                            <label class="skill">JavaScript</label>
                            <label class="skill">PHP</label>
                            <label class="skill">Microsoft Azure</label>
                            <label class="skill">Git</label>
                            <label class="skill">Bootstrap</label>
                            <label class="skill">HTML</label>
                            <label class="skill">CSS</label>
                        </div><br>

                        <div>
                           <p class="overview"><b>Overview</b></p>
                           <p> At CNI, I am working on migrating existing website from PHP to Node.js and React. 
                                Additionally, I work to add new features on a daily basis to improve performance and usability of the web application.
                            </p>
                        </div>

                        <div>
                            <p class="responsibilities"><b>Key Responsibilities</b></p>
                            <ol>
                                <li><b style="color: rgb(157, 34, 53);">Software Development:</b> Implemented the website GUI using React, resulting in a more user-friendly and responsive web interface.
                                    Migrate and re-write 100% of backend services from PHP to Node.js.</li>
                                <li><b style="color: rgb(157, 34, 53);">Server Maintenance:</b> Led Migration of server from local mail server of PHP to MS Azure. 
                                    Also handled  Migration of databases and media files to MS Azure.</li>
                            </ol>
                        </div>

                        <div>
                            <p class="achievements"><b>Achievements</b></p>
                            <ul>
                                <li>Transition of website enabled a better user experience.</li>
                                <li>Migration of server reduced maintenance costs by 70%.</li>
                        </ul> 
                        </div><br>  
                    </div>
                </div>
                <div class="card workExCard" onmouseover="collapseShow('PERSISTENT_SYSTEMS_DESCR')" onmouseout="collapseHide('PERSISTENT_SYSTEMS_DESCR')">
                    <div class="card-header workExCardHeader">
                        <p style="font-size: 22px;"><b>Persistent Systems | Checkmarx SAST</b></p>
                        <p style="font-size: 20px;"><b>Software Engineer - 2 </b> | Pune, India</p>
                        <p style="font-size: 18px;">October 2020 - July 2022</p>
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
                </div>`;
    
                return Str;
}

function fillProjects()
{
    let Str = "";
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
    let Str =  `<div class="card" onmouseover="collapseEdShow('USC_HEAD', 'USC_DESCR')" onmouseout="collapseEdHide('USC_HEAD', 'USC_DESCR')">
                    <div class="card-header" id="USC_HEAD" style="background-color: rgb(255, 199, 44)!important; color: rgb(157, 34, 53)">
                        <p style="font-size: 25px;"><b>University of Southern California</b> | Los Angeles, CA</p>
                        <p style="font-size: 22px;"><b>Viterbi School of Engineering</b></p>
                        <p style="font-size: 22px;"><b>Masters of Science | Computer Science</b></p>
                        <p style="font-size: medium;"><b>GPA:</b> 4.0</p>
                        <p style="font-size: medium;"><b>Honors:</b> MS CS Honors</p>
                        <p style="font-size: medium; font-style: italic;">August 2022 - May 2024</p>
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

                <div class="card" onmouseover="collapseEdShow('PICT_HEAD', 'PICT_DESCR')" onmouseout="collapseEdHide('PICT_HEAD', 'PICT_DESCR')">

                    <div class="card-header" id="PICT_HEAD" style="background-color: #007bff !important; color: white">
                        <p style="font-size: 25px;"><b>Pune Institute of Computer Technology</b> | Pune, India</p>
                        <p style="font-size: 22px;"><b>Bachelor of Engineering | Computer Engineering</b></p>
                        <p style="font-size: medium;"><b>GPA:</b> 9.42 out of 10</p>
                        <p style="font-size: medium; font-style: italic;">August 2016 - May 2020</p>
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

showWorkEx();