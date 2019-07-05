import React from 'react';


class QrcodeListing extends React.Component {

  render() {
    return (
      <div className="table-responsive bg-light">
        <table className="table">
          <tbody>
            <tr>
              <th>#</th>
              <th>Source Link</th>
              <th>Destination Link</th>
              <th>QR Code</th>
              <th>Date Created</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default QrcodeListing;