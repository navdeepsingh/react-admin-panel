import React from 'react';
import { userService } from '../_services';


class QrcodeListing extends React.Component {

  render() {
    if (this.props.qrcodes.length > 0) {
      this.qrcodes = this.props.qrcodes.map((item, key) =>
        <tr key={key}>
          <td>{key + 1}</td>
          <td>{item.source_link}</td>
          <td>{item.destination_link}</td>
          <td></td>
          <td>{item.created_at}</td>
          <td><a href="/edit" className="btn btn-primary" onClick={(e) => this.props.openModal(e, item)}>EDIT</a></td>
          <td><a href="/edit" className="btn btn-secondary">DELETE</a></td>
        </tr>
      );
    } else {
      this.qrcodes = <tr><td colSpan="7" className="text-center"> No Records Found Yet </td></tr>
    }


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
            {this.qrcodes}
          </tbody>
        </table>
      </div>
    )
  }
}

export default QrcodeListing;