
function showWorkEx()
{
    removeActiveLink();
    document.getElementById("WORK_EX").classList.add("ACTIVE_LINK");
    document.getElementById("content_area").innerHTML = setWorkEx();
}

function setWorkEx()
{
    let Str =  `<div class="card">
                    <div class="card-header" onmouseover="collapseShow('CAPSICO_HEALTH_DESCR')" onmouseout="collapseHide('CAPSICO_HEALTH_DESCR')">
                        <h4>CapsicoHealth | AI Workbench</h4>
                    </div>
                    <div class="card-body" id="CAPSICO_HEALTH_DESCR" style="display: none;">
                        <h5>Skills</h5>
                        <span class="skill">JavaScript</span>
                        <span class="skill">Java</span>
                        <span class="skill">Python</span>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" onmouseover="collapseShow('PERSISTENT_SYSTEMS_DESCR')" onmouseout="collapseHide('PERSISTENT_SYSTEMS_DESCR')">
                        <h4>Persistent Systems | Checkmarx SAST</h4>
                    </div>
                    <div class="card-body" id="PERSISTENT_SYSTEMS_DESCR" style="display: none;">
                        <h5>Skills</h5>
                        <span class="skill">JavaScript</span>
                        <span class="skill">Java</span>
                        <span class="skill">Python</span>
                    </div>
                </div>`;
    
                return Str;
}

function showProjects()
{
    removeActiveLink();
    document.getElementById("PROJECTS").classList.add("ACTIVE_LINK");

    document.getElementById("content_area").innerHTML = Str;
}

function showResume()
{    
    removeActiveLink();
    document.getElementById("RESUME").classList.add("ACTIVE_LINK");

    document.getElementById("content_area").innerHTML = setResume();
}

function setResume()
{
    let Str =  `<div class="card" style="width: 45rem; ">
                    <img class="card-img-top" src="static/pdf/Resume_Image.png" height="80%" alt="Yashh Jaggi Resume Image">
                    <div class="card-body">
                        <a href="static/pdf/Yashh_Jaggi_Resume.pdf" target="_blank" class="btn btn-primary">View Resume</a>
                    </div>
                </div>`;
    return Str;
}

function showEdHistory()
{    
    removeActiveLink();
    document.getElementById("ED_HISTORY").classList.add("ACTIVE_LINK");
    document.getElementById("content_area").innerHTML = setEdHistory();
}

function setEdHistory()
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