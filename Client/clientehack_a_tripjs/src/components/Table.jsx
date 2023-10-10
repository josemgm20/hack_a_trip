import { Component } from "react"

class Table extends Component {
  render() {
    return <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>javirc</td>
          <td>admin</td>
        </tr>
        <tr>
          <td>josemg</td>
          <td>admin</td>
        </tr>
        <tr>
          <td>cristoball</td>
          <td>user</td>
        </tr>
        <tr>
          <td>Corleone</td>
          <td>user</td>
        </tr>
        <tr>
          <td>Corinice</td>
          <td>user</td>
        </tr>
      </tbody>
    </table>
  }
}


/*function Table() {
    return  <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>javirc</td>
          <td>admin</td>
        </tr>
        <tr>
          <td>josemg</td>
          <td>admin</td>
        </tr>
        <tr>
          <td>cristoball</td>
          <td>user</td>
        </tr>
        <tr>
          <td>Corleone</td>
          <td>user</td>
        </tr>
        <tr>
          <td>Corinice</td>
          <td>user</td>
        </tr>
      </tbody>
    </table>
  } */
  
  export default Table