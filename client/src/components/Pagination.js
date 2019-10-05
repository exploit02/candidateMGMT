import React from 'react'

const Navbar = () => {
    return (
<nav class="mb-1 navbar navbar-expand-lg navbar-dark info-color">
  <a class="navbar-brand" href="#">CM</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
    aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-555">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/dashboard">Home
          <span class="sr-only"></span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/candidates">Candidates
          <span class="sr-only"></span>
        </a>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto nav-flex-icons">
      <li class="nav-item avatar">
      <a class="nav-link" href="/candidates"><i class="fas fa-toggle-off"></i> Log Off
          <span class="sr-only"></span>
        </a>
      </li>
    </ul>
  </div>
</nav>

    )
}

export default Navbar;