import React from 'react'
import { Link } from 'react-router-dom'
export default function NavbarApp() {
return (
<div>

<nav className="navbar navbar-expand-lg navbar-primary bg-primary p-3 mt-5">
<Link className="navbar-brand" to="/">AMS App</Link> 
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav">
<li className="nav-item active">
<Link className="nav-link" to="/">Home</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/about-us">About</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/add-students">Add Students</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/add-attendance">Add Attendnace</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/feedback-us">Feedback</Link>
</li>
</ul>
</div>
</nav>

</div>
)
}
