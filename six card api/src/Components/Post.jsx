import React from 'react';
import { useState, useEffect } from 'react';

function Post() {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json.slice(0, 6))); // صرف پہلے 6 پوسٹس حاصل کریں
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {data.map((post) => (
          <div key={post.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card custom-card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Card subtitle
                </h6>
                <p className="card-text">{post.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
