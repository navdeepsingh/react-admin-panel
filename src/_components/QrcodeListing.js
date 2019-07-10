import React from 'react';


class QrcodeListing extends React.Component {

  render() {
    if (this.props.qrcodes.length) {
      this.qrcodes = this.props.qrcodes.map((item, key) =>
        <tr key={key}>
          <td>{key + 1}</td>
          <td>{item.source_link}</td>
          <td>{item.destination_link}</td>
          <td>{item.created_at}</td>
          <td align="center"><a href="/edit" className="btn btn-primary" onClick={(e) => this.props.openModal(e, item)}>EDIT</a></td>
          <td align="center"><a href="/delete" className="btn btn-secondary" onClick={(e) => this.props.openDeleteModal(e, item)}>DELETE</a></td>
        </tr >
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
              <th>Date Created</th>
              <td colSpan="2" align="center"><strong>Actions</strong></td>
            </tr>
            {this.qrcodes}
          </tbody>
        </table>
      </div>
    )
  }
}

export default QrcodeListing;