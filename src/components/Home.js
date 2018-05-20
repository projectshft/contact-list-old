import React, { Component } from 'react';

const Home = () => (
  <div>
        {
          state.all().map(p => (
            <p key={p.id}>
              <span> {p.name}</span>
              <Link to={`/roster/${p.id}`}> Edit </Link>
              <span><button>Delete</button></span>
            </p>
          ))
        }
  </div>
)

export default Home
