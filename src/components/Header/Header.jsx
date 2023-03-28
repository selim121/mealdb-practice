import React from 'react';

const Header = () => {
    return (
        <nav class="navbar">
            <div class="container-fluid bg-primary px-5 py-2">
                <a class="navbar-brand">Meal</a>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};

export default Header;