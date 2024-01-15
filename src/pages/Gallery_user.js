import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Gallery_user() {
  const [gallery_user, setGallery_user] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/gallery_user`).then(res => {
        console.log(res);
        setGallery_user(res.data.gallery_users);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  var gallery_userDetails = "";
  if (Array.isArray(gallery_user)) {
    gallery_userDetails = gallery_user.map((item, index) => (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.username}</td>
        <td>{item.password}</td>
        <td>{item.email}</td>
        <td>{item.nama_lengkap}</td>
        <td>{item.alamat}</td>
        <td>
          <Link to="/" className='btn btn-success' key={`edit-${index}`}>
            Edit
          </Link>
        </td>
        <td>
          <button className='btn btn-danger' key={`delete-${index}`}>
            Delete
          </button>
        </td>
      </tr>
    ));
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Gallery user List
                <Link to="/add-user" className='btn btn-primary float-end'>
                  Add user
                </Link>
              </h4>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Nama Lengkap</th>
                    <th>Alamat</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {gallery_userDetails}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery_user;
