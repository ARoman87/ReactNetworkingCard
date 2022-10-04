


function Info() {
    return (
        <div className="mainInfo">
            <h1>Angel Roman</h1>
            <h3>Software Engineer</h3>
            <a href="https://code-dependant.com/" target="blank">Portfolio Website</a>
        </div>
    )
}

function Email() {
    return (
        <div className="email">
            <a href="mailto: angel427roman@gmail.com"><button><img src="Mail.png"/><span>Email</span></button></a>
            
        </div>
    )
}

function About() {
    return (
        <div className="about">
            <h3>About</h3>
            <p>Aspiring Software Engineer who always strives for perfection. Looking for the next challenge in my career where I can use the skills that I have learned. Currently pursuing a Bachelor's Degree in Information Technology with a concentration in Software Development with an expected graduation date of December 2022.</p>
            <h3>Skills</h3>
            <p className="skills">&#9658;React &#9658;JavaScript &#9658;Python &#9658;Django &#9658;HTML/CSS &#9658;SQL &#9658;Java &#9658;C++ &#9658;Git/GitHub</p>

        </div>
    )
}

function Footer() {
    return(
        <div className="footer">
            <a href="https://www.linkedin.com/in/aroman87/" target="blank"><img src="Linkedin Icon.png"/></a>
            <a href="https://github.com/ARoman87" target="blank"><img src="GitHub Icon.png"/></a>
        </div>
    )
}



function Main() {
    return (
        <div className="body">
            <img className="myImage" src="LinkedInpic.jpg"/>
            <Info />
            <Email />
            <About />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Main/>, document.getElementById("root"));